import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Styles
import { styleHelper } from 'utilities/style-helper'
const styles = [
	require('styl/deck-pair')
]

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
		return (
			<span className="deck-pair__player">
				<span className="deck-pair__player__label">Player</span> <span className="deck-pair__player__number">{playerNumber}</span>
			</span>
		)
	}

	renderDeckPair() {
		let { adjectiveDeck, nounDeck } = this.props
		return <span className="deck-pair__deck-name">{adjectiveDeck.name.adjective} {nounDeck.name.noun}</span>
	}

	render() { return (
		<div className={this.props.containerClass + ' deck-pair'}>
			{this.renderPlayerNumber()}
			{this.renderDeckPair()}
		</div>
	)}
}

export default styleHelper(DeckPair, styles);
