import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Components
import PageDescription from 'components/page-description'
import NumberCounter from 'components/number-counter'

// Actions
import {
	openContext,
	closeContext,
} from 'actions/context-menu'
import {
	addItem,
	removeItems,
} from 'actions/item-holder'
import {
	initCounter,
	removeCounters,
} from 'actions/number-counters'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
.add(require('styl/score-keeper'))

const name = 'Score Keeper'

class ScoreKeeper extends PureComponent {
	constructor() {
		super()

		this.actions = [{
			name: 'Settings',
			icon: 'cog',
			handler: this.handleContextMenuVisibility,
		}, {
			name: 'Reset',
			icon: 'refresh',
			handler: this.handleRemoveAllCounters,
		}, {
			name: 'Add Counter',
			icon: 'plus',
			handler: this.handleAddCounter,
		}]

		this.colors = [
			'#e6b665', // orange
			'#e66286', // red
			'#ae61e6', // purple
			'#70aef1', // blue
			'#8bf170', // green
		]
		// .sort(() => Math.round((Math.random() - 0.5) * 10) % 2) // TEMP
	}

	handleAddCounter = () => {
		const { dispatch } = this.props
		dispatch(addItem(name))
	};

	handleRemoveAllCounters = () => {
		const { dispatch, counterHolder } = this.props
		const ids = counterHolder && Object.keys(counterHolder).map(key => counterHolder[key])
		dispatch(removeCounters(ids))
		dispatch(removeItems(name))
	};

	handleContextMenuVisibility = () => {
		const { dispatch, settingsVisible } = this.props

		if (settingsVisible) {
			dispatch(closeContext())
		} else {
			dispatch(openContext())
		}
	};

	renderAction({ name, icon, handler }) { return (
		<span key={name} className="score-keeper__action" onClick={handler}>
			<span className="score-keeper__action__icon">
				<i className={`fa fa-${icon}`}></i>
			</span>
			<span className="score-keeper__action__text">{name}</span>
		</span>
	)}

	renderActions() { return (
		<div className="score-keeper__actions">
			{this.actions.map(action => this.renderAction(action))}
		</div>
	)}

	renderCounters() {
		const { counterHolder } = this.props
		let counterNumber = 1

		return (
			<div className="score-keeper__counters">
				{(!counterHolder || counterHolder && !Object.keys(counterHolder).length) &&
					<div className="score-keeper__message">No Counters</div>
				}

				{counterHolder && Object.keys(counterHolder).map(key => {
					const id = counterHolder[key]
					const counter = (
						<div
							key={key}
							className="score-keeper__counter"
							style={{ backgroundColor: this.colors[counterNumber - 1] }}
						>
							<NumberCounter
								id={id}
								number={counterNumber}
								containerName={name}
							/>
						</div>
					)

					counterNumber += 1
					return counter
				})}
			</div>
		)
	}

	render() { return (
		<article className="score-keeper">
			{/*<PageDescription title="Number Keepers" />*/}
			{this.renderActions()}
			{this.renderCounters()}
		</article>
	)}
}

module.exports = connect(state => ({
	counterHolder: state.itemHolder[name],
	settingsVisible: state.contextMenu.visible,
}))(stylesLoader.render(ScoreKeeper))
