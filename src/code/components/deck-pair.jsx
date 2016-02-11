import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import {
	addRandomFaction
} from './../actions'

// Styles
// import './../../assets/styl/deck-pair'

export default class DeckPair extends Component {
	// static propTypes = {
	// 	containerClass: PropTypes.string,
	// 	items: PropTypes.arrayOf(PropTypes.Object),
	// };

	constructor() {
		super()
	}

	renderPlayerNumber() {
		let { playerNumber } = this.props
		return <span><strong>Player {playerNumber}</strong></span>
	}

	renderDeckPair() {
		let { adjectiveDeck, nounDeck } = this.props
		return <p>{adjectiveDeck.name.adjective} {nounDeck.name.noun}</p>
	}

	render() { return (
		<div className={this.props.containerClass}>
			{this.renderPlayerNumber()}
			{this.renderDeckPair()}
		</div>
	)}
}

export default DeckPair;
