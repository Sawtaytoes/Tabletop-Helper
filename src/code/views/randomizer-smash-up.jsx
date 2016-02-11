import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import DeckFilter from './../components/deck-filter'
import DeckPair from './../components/deck-pair'
import PageDescription from './../components/page-description'

// Actions
import {
	updateNumberOfPlayers
} from './../actions'

// Content
import { sets, factions } from './../content/smash-up-decks'

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


		return
	}

	handlePlayersChanged(e) {
		let { dispatch } = this.props
		dispatch(updateNumberOfPlayers(e.target.value))
	}

	handleRandomizeClicked(e) {
		e.preventDefault()

		this.setState({randomize: true}) // Hack to force React to redraw on click
	}

	renderNumberOfPlayers() {
		let htmlId = 'number-of-players'

		return (
			<form action="" method="post">
				<label htmlFor="number-of-players">
					Players:
					<input id="number-of-players" type="number" value={this.props.numberOfPlayers} onChange={this.handlePlayersChanged.bind(this)} />
				</label>
				<button onClick={this.handleRandomizeClicked.bind(this)}>Randomize</button>
			</form>
		)
	}

	renderNotEnoughFactionsForPlayersMessage() {
		let { numberOfPlayers, numberOfFactions } = this.props

		return (
			<div>
				You need at least {numberOfFactions} different factions for {numberOfPlayers} players.
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

			{this.renderNumberOfPlayers()}
			{this.renderDeckPairs()}

			<DeckFilter
				sets={sets}
				decks={factions}
			/>
		</article>
	)}
}

module.exports = connect(
	state => ({
		numberOfPlayers: state.factions.numberOfPlayers,
		numberOfFactions: state.factions.numberOfFactions,
		selectedFactionIds: state.factions.selectedFactionIds
	})
)(Randomizer);
