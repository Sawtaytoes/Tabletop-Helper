import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Styles
// import './../../assets/styl/random-deck-pair'

export default class RandomDeckPair extends Component {
	// static propTypes = {
	// 	containerClass: PropTypes.string,
	// 	items: PropTypes.arrayOf(PropTypes.Object),
	// };

	constructor() {
		super()
	}

	getRandomDeck(excluded = []) {
		let { ids, decks } = this.props,
			excludedIds = excluded instanceof Array ? excluded : [excluded],
			index, id
		var idList = ids.slice()

		excludedIds.forEach(() => {
			idList.splice(excludedIds, 1)
		})

		index = Math.floor(Math.random() * idList.length),
		id = idList[index]

		return {
			index: index,
			id: id,
			info: decks[id]
		}
	}

	getRandomDeckPair() {
		let { ids } = this.props

		if (!ids || ids.length <= 1) {
			return "You have to have at least two different decks per the rules."
		}

		let adjectiveRandomDeck = this.getRandomDeck()
		let nounRandomDeck = this.getRandomDeck(adjectiveRandomDeck.index)

		return adjectiveRandomDeck.info.name.adjective + ' ' + nounRandomDeck.info.name.noun
	}

	render() { return (
		<div className={this.props.containerClass}>
			{this.getRandomDeckPair()}
		</div>
	)}
}
