import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import DeckFilter from 'components/deck-filter'
import DeckPair from 'components/deck-pair'
import PageDescription from 'components/page-description'

// Actions
import {
	updateNumberOfPlayers
} from 'actions/factions'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
.add(require('styl/message'))
.add(require('styl/randomizer'))

// Content
import { sets, factions } from 'content/smash-up-decks'

class Randomizer extends Component {
	constructor() {
		super()

		this.playerFactionIds = []
	}

	getRandomDeckId() {
		let { selectedFactionIds, dispatch } = this.props,
			{ playerFactionIds } = this,
			index, id
		var ids = selectedFactionIds.slice()

		playerFactionIds.forEach((id) => {
			ids.splice(ids.indexOf(id), 1)
		})

		index = Math.floor(Math.random() * ids.length),
		id = ids[index]

		return id
	}

	resetPlayerFactions() {
		let { playerFactionIds } = this

		while (playerFactionIds.length) {
			playerFactionIds.pop()
		}
	}

	setDeckList() {
		let { numberOfFactions, dispatch } = this.props,
			{ playerFactionIds } = this

		this.resetPlayerFactions()

		for (let i = 0; i < numberOfFactions; i++) {
			playerFactionIds.push(this.getRandomDeckId())
		}
	}

	handlePlayersIncreased(e) {
		let { dispatch, numberOfPlayers } = this.props
		dispatch(updateNumberOfPlayers(numberOfPlayers + 1))

	}
	handlePlayersDecreased(e) {
		let { dispatch, numberOfPlayers } = this.props
		dispatch(updateNumberOfPlayers(numberOfPlayers - 1))
	}

	handleRandomizeClicked(e) {
		this.setState({}) // Hack to force React to redraw on click
	}

	renderNumberOfPlayers() { return (
		<div className="players-selector-container">
			<div className="players-selector">
				<span className="players-selector__arrows">
					<span className="players-selector__arrow players-selector__arrow--up" onClick={this.handlePlayersIncreased.bind(this)}>
						<i className="fa fa-arrow-up"></i>
					</span>
					<span className="players-selector__arrow players-selector__arrow--down" onClick={this.handlePlayersDecreased.bind(this)}>
						<i className="fa fa-arrow-down"></i>
					</span>
				</span>
				<span className="players-selector__content players-selector__description">{this.props.numberOfPlayers} Players</span>
				<button className="players-selector__content players-selector__button" onClick={this.handleRandomizeClicked.bind(this)}>Randomize</button>
			</div>
		</div>
	)}

	renderNotEnoughFactionsForPlayersMessage() {
		let { numberOfPlayers, numberOfFactions } = this.props

		return (
			<div className="message message--error">
				You need at least {numberOfFactions} different factions selected for {numberOfPlayers} players.
			</div>
		)
	}

	renderDeckPairs() {
		let { numberOfFactions, selectedFactionIds } = this.props,
			{ playerFactionIds } = this,
			deckPairs = []

		if (selectedFactionIds.length < numberOfFactions) {
			return this.renderNotEnoughFactionsForPlayersMessage()
		}

		this.setDeckList()

		for (let i = 0; i < numberOfFactions; i += 2) {
			deckPairs.push(
				<DeckPair key={i}
					playerNumber={Math.ceil(i / 2) + 1}
					adjectiveDeck={factions[playerFactionIds[i]]}
					nounDeck={factions[playerFactionIds[i+1]]}
				/>
			)
		}

		return <div>{deckPairs}</div>
	}

	render() { return (
		<article>
			{/*
			<PageDescription
				title="Smash Up Randomizer"
				description="A mechanism for randomizing Smash Up deck configurations"
			/>
			*/}

			<div>
				{this.renderNumberOfPlayers()}
				{this.renderDeckPairs()}

				<DeckFilter
					sets={sets}
					decks={factions}
				/>
			</div>
		</article>
	)}
}

module.exports = connect(
	state => ({
		numberOfPlayers: state.factions.numberOfPlayers,
		numberOfFactions: state.factions.numberOfFactions,
		selectedFactionIds: state.factions.selectedFactionIds
	}),
	null, null,
	{ pure: false }
)(stylesLoader.render(Randomizer))
