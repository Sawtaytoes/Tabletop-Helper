import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import DeckFilter from './../components/deck-filter'
import PageDescription from './../components/page-description'
import RandomDeckPair from './../components/random-deck-pair'

// Content
import { sets, factions } from './../content/smash-up-decks'

class Randomizer extends Component {
	constructor() {
		super()
	}

	render() { return (
		<article>
			{/*
			<PageDescription
				title="Smash Up Randomizer"
				description="A mechanism for randomizing Smash Up deck configurations"
			/>
			*/}

			<RandomDeckPair
				ids={this.props.selectedFactionIds}
				decks={factions}
			/>

			{/*
			<DeckFilter
				items={sets}
			/>
			*/}
			<DeckFilter
				items={factions}
			/>
		</article>
	)}
}

module.exports = connect(
	state => ({ selectedFactionIds: state.factions.selectedFactionIds })
)(Randomizer);
