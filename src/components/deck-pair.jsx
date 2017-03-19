import React, { PureComponent, PropTypes } from 'react'

// Utils
import StylesLoader from 'utils/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
.add(require('./deck-pair.styl'))

class DeckPair extends PureComponent {
	static propTypes = {
		adjectiveDeck: PropTypes.object.isRequired,
		containerClass: PropTypes.string,
		nounDeck: PropTypes.object.isRequired,
		playerNumber: PropTypes.number.isRequired,
	};

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
