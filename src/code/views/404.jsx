import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'

// Components
import PageDescription from './../components/page-description'

// Styles
import './../../assets/styl/contact'

class NoMatch extends Component {
	constructor(props) {
		super()

		this.dispatch = props.state.store.dispatch
	}

	handleGoBack() {
		pushPath(this.dispatch(pushPath('/')))
	}

	render() { return (
		<article>
			<section className="bubble">
				<PageDescription
					title="404"
					subtitle="You're Trying to Get Somewhere That Doesn't Exist"
				>
					<button className="contact__field__input contact__send-button" onClick={this.handleGoBack.bind(this)} title="Go back to the previous page">Go back.</button>
				</PageDescription>
			</section>
		</article>
	)}
}

module.exports = connect(
	state => ({ state: state }),
	{ pushPath }
)(NoMatch);
