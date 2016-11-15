import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import cookie from 'react-cookie'

// Components
import PageDescription from 'components/page-description'

// Styles
import { stylesHelper } from 'utilities/styles-helper'
const styles = []

class Instructions extends Component {
	constructor(props) {
		super()

		this.info = {

		}
	}

	renderSection(section) { return (
		<div key={section.name}>
			<h2>{section.name}</h2>
			<ul>
				{section.items.map((item, i) => {
					return <li key={i}>{item}</li>
				})}
			</ul>
		</div>
	)}

	render() {
		let { info, goal } = this.instructions,
			goBack = <Link to="/instructions">&lt; Back</Link>

		return (
			<article>
				<PageDescription title="Number Keepers" />

				{this.counters.map(counter => <Counter
					id={counter.id}
					count={counter.value}
				/>)}

				{goBack}
			</article>
		)
	}
}

module.exports = connect(
	state => ({ counters: state.numberCounter.counters })
)(stylesHelper(Instructions, styles))
