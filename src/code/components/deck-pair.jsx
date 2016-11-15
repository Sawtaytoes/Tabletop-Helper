import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
	.add(require('styl/deck-pair'))

class DeckPair extends PureComponent {
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
		<div className={'deck-pair ' + (this.props.containerClass || '')}>
			{this.renderPlayerNumber()}
			{this.renderDeckPair()}
		</div>
	)}
}

export default stylesLoader.render(DeckPair)
