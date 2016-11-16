import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import {
	removeItem,
} from 'actions/item-holder'
import {
	incrementCounter,
	decrementCounter,
	rotateCounter,
} from 'actions/number-counters'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()
.add(require('styl/number-counter'))

class NumberCounter extends PureComponent {
	handleRemoveSelf = () => {
		const { dispatch, name, id } = this.props
		dispatch(removeItem(name, id))
	};

	handleIncrement = interval => {
		const { dispatch, id } = this.props
		const { value } = this
		dispatch(incrementCounter(id, value, interval))
	};

	handleDecrement = interval => {
		const { dispatch, id } = this.props
		const { value } = this
		dispatch(decrementCounter(id, value, interval))
	};

	handleRotation = interval => {
		const { dispatch, id } = this.props
		const { rotation } = this
		dispatch(rotateCounter(id, rotation, interval))
	};

	initValues() {
		const { counters, id } = this.props
		const {
			rotation = 0,
			style = '',
			value = 0,
		} = counters[id] || {}

		this.rotation = rotation
		this.style = style
		this.value = value
	}

	renderCountControls() {
		const { value, rotation } = this
		const { number } = this.props

		return [
			<div key="identifier" className="number-counter__identifier">Player {number}</div>,
			<div key="controls" className="number-counter__controls">
				<span className="number-counter__control number-counter__control--clickable" onClick={this.handleDecrement.bind(this, 5)}>-5</span>
				<span className="number-counter__control number-counter__control--clickable" onClick={this.handleDecrement.bind(this, 1)}>-1</span>
				<span className="number-counter__control number-counter__control--count">
					<span className="number-counter__count" style={{
						transform: `rotate(${rotation}deg)`,
					}}>{value}</span>
				</span>
				<span className="number-counter__control number-counter__control--clickable" onClick={this.handleIncrement.bind(this, 1)}>+1</span>
				<span className="number-counter__control number-counter__control--clickable" onClick={this.handleIncrement.bind(this, 5)}>+5</span>
			</div>,
		]
	}

	renderSettingsControls() {
		const { value, rotation } = this
		const { number } = this.props

		return [
			<div key="identifier" className="number-counter__identifier">Player {number}</div>,
			<div key="controls" className="number-counter__controls">
				<span className="number-counter__control" onClick={this.handleRemoveSelf}>
					<span>
						<i className="fa fa-close"></i>
					</span>
					<span> Remove</span>
				</span>
				<span className="number-counter__control number-counter__control--count">
					<span className="number-counter__count" style={{
						transform: `rotate(${rotation}deg)`,
					}}>{value}</span>
				</span>
				<span className="number-counter__control" onClick={this.handleRotation.bind(this, -90)}>
					<i className="fa fa-rotate-left"></i>
				</span>
				<span className="number-counter__control" onClick={this.handleRotation.bind(this, 90)}>
					<i className="fa fa-rotate-right"></i>
				</span>
			</div>,
		]
	}

	render() {
		this.initValues()
		const { settingsVisible } = this.props

		return (
			<div className="number-counter">
				{settingsVisible && this.renderCountControls()}
				{!settingsVisible && this.renderSettingsControls()}
			</div>
		)
	}
}

export default connect(state => ({
	counters: state.numberCounters,
	settingsVisible: state.contextMenu.visible,
}))(stylesLoader.render(NumberCounter))
