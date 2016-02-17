import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'

// Components
import PageDescription from 'components/page-description'

// Utilities
import { styleHelper } from 'utilities/style-helper'

// Styles
const styles = [
	require('styl/contact')
]

class NoMatch extends Component {
	handleGoBack(e) {
		e.preventDefault()
		this.props.pushPath(this.props.dispatch(pushPath('/game')))
	}

	render() { return (
		<article>
			<section className="bubble">
				<PageDescription
					title="404"
					subtitle="You're Trying to Get Somewhere That Doesn't Exist"
				>
					<button className="contact__field__input contact__send-button" title="Go back to the previous page" onClick={this.handleGoBack.bind(this)}>Go Back</button>
				</PageDescription>
			</section>
		</article>
	)}
}

module.exports = connect(
	state => ({}),
	dispatch => ({ dispatch, pushPath })
)(styleHelper(NoMatch, styles))
