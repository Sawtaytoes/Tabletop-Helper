import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// Components
import PageDescription from 'components/page-description'
import NumberCounter from 'components/number-counter'

// Actions
import {
	addItem,
	removeItems,
} from 'actions/item-holder'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()

const name = 'Score Keeper'

class ScoreKeeper extends PureComponent {
	handleAddCounter = () => {
		const { dispatch, counters } = this.props
		dispatch(addItem(name))
	};

	handleRemoveAllCounters = () => {
		const { dispatch } = this.props
		dispatch(removeItems(name))
	};

	render() {
		const { counters } = this.props
		let counterNumber = 1

		return (
			<article>
				<PageDescription title="Number Keepers" />
				<button onClick={this.handleAddCounter}>Add Counter</button>
				<button onClick={this.handleRemoveAllCounters}>Reset</button>
				{counters && Object.keys(counters).map(key => {
					const counter = <NumberCounter key={key} id={counters[key]} number={counterNumber} name={name} />
					counterNumber += 1
					return counter
				})}
			</article>
		)
	}
}

module.exports = connect(
	state => ({ state, counters: state.itemHolder[name] })
)(stylesLoader.render(ScoreKeeper))
