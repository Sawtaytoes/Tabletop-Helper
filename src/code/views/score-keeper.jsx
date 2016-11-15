import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import cookie from 'react-cookie'

// Components
import PageDescription from 'components/page-description'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()

class ScoreKeeper extends PureComponent {
	render() {
		const { counters } = this.props

		return (
			<article>
				<PageDescription title="Number Keepers" />

				{counters && counters.map(counter => (<Counter
					id={counter.id}
					count={counter.value}
				/>))}
			</article>
		)
	}
}

module.exports = connect(
	state => ({ counters: state.numberCounter.counters })
)(stylesLoader.render(ScoreKeeper))
