import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import {
	expandSet,
	expandAllSets,

	contractSet,
	contractAllSets,

	selectFaction,
	selectSetFactions,
	selectAllFactions,

	deselectFaction,
	deselectSetFactions,
	deselectAllFactions
} from 'ducks/factions'

// Utils
import convertTextToId from 'utils/convert-text-to-id'
import StylesLoader from 'utils/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
.add(require('./deck-filter.styl'))

class DeckFilter extends Component {
	static propTypes = {
		containerClass: PropTypes.string,
		decks: PropTypes.array.isRequired,
		dispatch: PropTypes.func.isRequired,
		expandedSetIds: PropTypes.array.isRequired,
		selectedFactionIds: PropTypes.array.isRequired,
		sets: PropTypes.array.isRequired,
	};

	constructor() {
		super()

		this.icons = {
			checked: 'fa-check-circle',
			unchecked: 'fa-check-circle-o',

			expanded: 'fa-minus',
			contracted: 'fa-plus'
		}

		this.deckSetList = []
		this.deckSetListReverse = {}
	}

	isSetChecked(set) {
		let { selectedFactionIds } = this.props,
			{ decks } = set,
			allFactionsSelected = true

		for (let i = 0; i < decks.length; i++) {
			let { id } = decks[i]
			allFactionsSelected = allFactionsSelected && selectedFactionIds.includes(id)
		}

		return allFactionsSelected
	}

	isSetExpanded(set) {
		let { expandedSetIds } = this.props
		return expandedSetIds.includes(set.id)
	}

	getCheckedIcon(isChecked) {
		let { checked, unchecked } = this.icons
		return 'fa ' + (isChecked ? checked : unchecked)
	}

	getExpandedIcon(isExpanded) {
		let { expanded, contracted } = this.icons
		return 'fa ' + (isExpanded ? expanded : contracted)
	}

	handleSelectAll(isChecked) {
		let { dispatch } = this.props
		isChecked ? dispatch(deselectAllFactions()) : dispatch(selectAllFactions())
	}

	handleExpandAll(isExpanded) {
		let { dispatch } = this.props
		isExpanded ? dispatch(contractAllSets()) : dispatch(expandAllSets())
	}

	handleSetSelection(isChecked, id) {
		let { dispatch } = this.props
		isChecked ? dispatch(deselectSetFactions(id)) : dispatch(selectSetFactions(id))
	}

	handleSetExpansion(isExpanded, setId) {
		let { dispatch } = this.props
		isExpanded ? dispatch(contractSet(setId)) : dispatch(expandSet(setId))
	}

	handleDeckSelection(isChecked, id) {
		let { dispatch } = this.props
		isChecked ? dispatch(deselectFaction(id)) : dispatch(selectFaction(id))
	}

	renderSelectAll() {
		const { decks, expandedSetIds, selectedFactionIds } = this.props
		let isChecked = decks.length === selectedFactionIds.length
		let isExpanded = expandedSetIds.length > 0

		return (
			<div className="deck-filter__item deck-filter__item--select-all">
				<div className="deck-filter__content deck-filter__selector" onClick={this.handleSelectAll.bind(this, isChecked)}>
					<span className="deck-filter__checkmark">
						<i className={this.getCheckedIcon(isChecked)}></i>
					</span>

					<span className="deck-filter__title">Select All</span>
				</div>

				<div className="deck-filter__content deck-filter__expander" onClick={this.handleExpandAll.bind(this, isExpanded)}>
					<span className="deck-filter__plus-minus">
						<i className={this.getExpandedIcon(isExpanded)}></i>
					</span>
				</div>
			</div>
		)
	}

	renderSet(set, setId) {
		let htmlId = convertTextToId(set.title),
			isChecked = this.isSetChecked(set),
			isExpanded = this.isSetExpanded(set)

		return (
			<div key={setId + htmlId} className="deck-filter__items">
				<div className="deck-filter__item deck-filter__item--group">
					<div className="deck-filter__content deck-filter__selector" onClick={this.handleSetSelection.bind(this, isChecked, setId)}>
						<span className="deck-filter__checkmark">
							<i className={this.getCheckedIcon(isChecked)}></i>
						</span>

						<span className="deck-filter__title deck-filter__title--set">{set.title}</span>
					</div>

					<div className="deck-filter__content deck-filter__expander" onClick={this.handleSetExpansion.bind(this, isExpanded, setId)}>
						<span className="deck-filter__plus-minus">
							<i className={this.getExpandedIcon(isExpanded)}></i>
						</span>
					</div>
				</div>

				<div className="deck-filter__subitems">
					{isExpanded && set.decks.map((deck) => {
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
			<div key={deckId + htmlId} className="deck-filter__item deck-filter__subitem" onClick={this.handleDeckSelection.bind(this, isChecked, deckId)}>
				<div className="deck-filter__content deck-filter__selector">
					<span className="deck-filter__checkmark">
						<i className={this.getCheckedIcon(isChecked)}></i>
					</span>

					<span className="deck-filter__title">{deck.title}</span>
				</div>
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
	state => ({
		expandedSetIds: state.factions.expandedSetIds,
		selectedFactionIds: state.factions.selectedFactionIds
	})
)(stylesLoader.render(DeckFilter));
