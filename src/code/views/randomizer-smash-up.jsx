import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import DeckFilter from 'components/deck-filter'
import DeckPair from 'components/deck-pair'
import PageDescription from 'components/page-description'
import RaisedButton from 'material-ui/lib/raised-button';

// Actions
import {
	updateNumberOfPlayers
} from 'actions'

// Styles
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

// Content
import { sets, factions } from 'content/smash-up-decks'

const muiTheme = getMuiTheme()

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
			<fieldset>
				<label htmlFor={htmlId}>
					Players:
					<input id={htmlId} type="number" value={this.props.numberOfPlayers} onChange={this.handlePlayersChanged.bind(this)} />
				</label>
				<RaisedButton label="Randomize" />
				<button onClick={this.handleRandomizeClicked.bind(this)}>Randomize</button>
			</fieldset>
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
		<MuiThemeProvider muiTheme={muiTheme}>
			{/*
			<PageDescription
				title="Smash Up Randomizer"
				description="A mechanism for randomizing Smash Up deck configurations"
			/>
			*/}

			<form action="" method="post">
				{this.renderNumberOfPlayers()}
				{this.renderDeckPairs()}

				<DeckFilter
					sets={sets}
					decks={factions}
				/>

				<input name="state" type="hidden" value={JSON.stringify(this.props.state)} />
			</form>
		</MuiThemeProvider>
	)}
}

module.exports = connect(
	state => ({
		state: state,
		numberOfPlayers: state.factions.numberOfPlayers,
		numberOfFactions: state.factions.numberOfFactions,
		selectedFactionIds: state.factions.selectedFactionIds
	})
)(Randomizer)
