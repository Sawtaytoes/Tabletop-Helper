import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import {
	selectFaction,
	selectSetFactions,
	selectAllFactions,

	deselectFaction,
	deselectSetFactions,
	deselectAllFactions
} from 'actions'

// Utilities
import convertTextToId from 'utilities/convert-text-to-id'

// Styles
import { styleHelper } from 'utilities/style-helper'
const styles = [
	require('styl/deck-filter')
]

class DeckFilter extends Component {
	// static propTypes = {
	// 	containerClass: PropTypes.string,
	// 	items: PropTypes.arrayOf(PropTypes.Object),
	// };

	constructor() {
		super()

		this.icons = {
			checked: 'fa-check-circle',
			unchecked: 'fa-check-circle-o'
		}

		this.deckSetList = []
		this.deckSetListReverse = {}
	}

	isSetChecked(set) {
		let { selectedFactionIds } = this.props,
			{ decks } = set,
			allFactionsSelected = true

		for (let i = 0; i < decks.length; i++) {
			allFactionsSelected = allFactionsSelected && selectedFactionIds.includes(decks[i].id)
		}

		return allFactionsSelected
	}

	getCheckedIcon(isChecked) {
		let { checked, unchecked } = this.icons
		return 'fa ' + (isChecked ? checked : unchecked)
	}

	handleSelectAllClicked(isChecked, e) {
		let { dispatch } = this.props
		isChecked ? dispatch(deselectAllFactions()) : dispatch(selectAllFactions())
	}

	handleSetSelection(isChecked, id, e) {
		let { dispatch } = this.props
		isChecked ? dispatch(deselectSetFactions(id)) : dispatch(selectSetFactions(id))
	}

	handleDeckSelection(isChecked, id, e) {
		let { dispatch } = this.props
		isChecked ? dispatch(deselectFaction(id)) : dispatch(selectFaction(id))
	}

	renderSelectAll() {
		let htmlId = 'select-all-' + (Math.random() * 1000000),
			{ decks, selectedFactionIds } = this.props,
			isChecked = decks.length === selectedFactionIds.length

		return (
			<div className="deck-filter__item deck-filter__item--select-all" onClick={this.handleSelectAllClicked.bind(this, isChecked)}>
				<input className="deck-filter__checkbox" type="checkbox" title="Select all items in the list" value={htmlId} checked={isChecked} />
				<span><i className={this.getCheckedIcon(isChecked)}></i> <em>Select All</em></span>
			</div>
		)
	}

	renderSet(set, setId) {
		let htmlId = convertTextToId(set.title),
			isChecked = this.isSetChecked(set)

		return (
			<div key={setId + htmlId} className="deck-filter__items">
				<div className="deck-filter__item deck-filter__item--group" onClick={this.handleSetSelection.bind(this, isChecked, setId)}>
					<input className="deck-filter__checkbox" type="checkbox" title={set.description} checked={isChecked} />
					<span><i className={this.getCheckedIcon(isChecked)}></i> <strong>{set.title}</strong></span>
				</div>

				<div className="deck-filter__subitems">
					{set.decks.map((deck) => {
						return this.renderDeck(deck, deck.id)
					})}
				</div>
			</div>
		)
	}

	renderDeck(deck, deckId) {
		let htmlId = convertTextToId(deck.title),
			{ selectedFactionIds } = this.props,
			isChecked = selectedFactionIds.includes(deckId)

		return (
			<div key={deckId + htmlId} className="deck-filter__subitem" onClick={this.handleDeckSelection.bind(this, isChecked, deckId)}>
				<input className="deck-filter__checkbox" type="checkbox" title={deck.description} checked={isChecked} />
				<span><i className={this.getCheckedIcon(isChecked)}></i> {deck.title}</span>
			</div>
		)
	}

	render() { return (
		<fieldset className={'deck-filter ' + (this.props.containerClass || '')}>
			{this.renderSelectAll()}
			{this.props.sets.map((set, setId) => {
				return this.renderSet(set, setId)
			})}
		</fieldset>
	)}
}

export default connect(
	state => ({ selectedFactionIds: state.factions.selectedFactionIds })
)(styleHelper(DeckFilter, styles));
