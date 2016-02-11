import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createArrayFromRange } from './../utilities/array'

// Actions
import {
	selectFaction,
	selectSetFactions,
	selectAllFactions,

	deselectFaction,
	deselectSetFactions,
	deselectAllFactions
} from './../actions'

// Styles
// import './../../assets/styl/deck-filter'

class DeckFilter extends Component {
	// static propTypes = {
	// 	containerClass: PropTypes.string,
	// 	items: PropTypes.arrayOf(PropTypes.Object),
	// };

	constructor() {
		super()

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

	getIdFromTitle(title) {
		return title.toLowerCase().replace(/\s/g, '-').replace(/'/g, '')
	}

	handleSelectAllClicked(e) {
		let { dispatch } = this.props

		if (e.target.checked) {
			dispatch(selectAllFactions())
		} else {
			dispatch(deselectAllFactions())
		}
	}

	handleSetSelection(id, e) {
		let { dispatch } = this.props

		if (e.target.checked) {
			dispatch(selectSetFactions(id))
		} else {
			dispatch(deselectSetFactions(id))
		}
	}

	handleDeckSelection(id, e) {
		let { dispatch } = this.props

		if (e.target.checked) {
			dispatch(selectFaction(id))
		} else {
			dispatch(deselectFaction(id))
		}
	}

	renderSelectAll() {
		let htmlId = 'select-all-' + (Math.random() * 1000000),
			{ decks, selectedFactionIds } = this.props

		return (
			<div>
				<label htmlFor={htmlId}>
					<input id={htmlId} name={htmlId} type="checkbox" title="Select all items in the list" value={htmlId} checked={decks.length === selectedFactionIds.length} onChange={this.handleSelectAllClicked.bind(this)}
					/>
					<span> <em>Select All</em></span>
				</label>
			</div>
		)
	}

	renderSet(set, setId) {
		let htmlId = this.getIdFromTitle(set.title)

		return (
			<div key={setId + htmlId}>
				<label htmlFor={htmlId}>
					<input id={htmlId} name={htmlId} type="checkbox" title={set.description} value={htmlId} checked={this.isSetChecked(set)} onChange={this.handleSetSelection.bind(this, setId)} />
					<span> <strong>{set.title}</strong></span>
				</label>

				<div>
					{set.decks.map((deck) => {
						return this.renderDeck(deck, deck.id)
					})}
				</div>
			</div>
		)
	}

	renderDeck(deck, deckId) {
		let htmlId = this.getIdFromTitle(deck.title),
			{ selectedFactionIds } = this.props

		return (
			<div key={deckId + htmlId}>
				<label htmlFor={htmlId}>
					<input id={htmlId} name={htmlId} type="checkbox" title={deck.description} value={htmlId} checked={selectedFactionIds.includes(deckId)} onChange={this.handleDeckSelection.bind(this, deckId)} />
					<span> {deck.title}</span>
				</label>
			</div>
		)
	}

	render() { return (
		<fieldset className={this.props.containerClass}>
			{this.renderSelectAll()}
			{this.props.sets.map((set, setId) => {
				return this.renderSet(set, setId)
			})}
		</fieldset>
	)}
}

export default connect(
	state => ({ selectedFactionIds: state.factions.selectedFactionIds })
)(DeckFilter);
