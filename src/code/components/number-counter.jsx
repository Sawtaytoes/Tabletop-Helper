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

	render() {
		this.initValues()
		const { number } = this.props
		const { value, rotation } = this

		return (
			<div style={{ margin: '40px 10px' }}>
				<div>
					<button onClick={this.handleDecrement.bind(this, 5)}>-5</button>
					<button onClick={this.handleDecrement.bind(this, 1)}>-1</button>
					<span style={{
						display: 'inline-block',
						margin: '10px 10px 20px',
					}}>
						<span style={{
							display: 'inline-block',
							transform: `rotate(${rotation}deg)`,
						}}> {value} </span>
					</span>
					<button onClick={this.handleIncrement.bind(this, 1)}>+1</button>
					<button onClick={this.handleIncrement.bind(this, 5)}>+5</button>
				</div>
				<div>
					<button onClick={this.handleRotation.bind(this, -90)}>Rotate Counterclockwise</button>
					<span> {rotation} </span>
					<button onClick={this.handleRotation.bind(this, 90)}>Rotate Clockwise</button>
				</div>
				<div>
					<button onClick={this.handleRemoveSelf}>Remove Counter {number}</button>
				</div>
			</div>
		)
	}
}

export default connect(
	state => ({ state, counters: state.numberCounters })
)(stylesLoader.render(NumberCounter))