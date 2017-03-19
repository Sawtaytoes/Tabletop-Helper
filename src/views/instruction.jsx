import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Components
import PageDescription from 'components/page-description'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()

class Instruction extends PureComponent {
	constructor(props) {
		super()

		let instructions = require('content/instructions/' + props.params.link),
			{ info, expansions, rules, setup, variants, faq } = instructions

		this.instructions = instructions
		this.sections = [{
			name: 'Other Titles',
			items: info.name.variations
		}, {
			name: 'Expansions & Promos',
			items: expansions
		}, {
			name: 'Rules',
			items: rules
		}, {
			name: 'Setup',
			items: setup
		}, {
			name: 'Variants',
			items: variants
		}, {
			name: 'FAQ',
			items: faq
		}]
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
				{goBack}

				<PageDescription
					title={info.name.standard}
					subtitle={info.players.standard + (info.players.variations ? ' or ' + info.players.variations : '') + ' players'}
					description={info.goal}
				/>

				{this.sections.map((section) => {
					return section.items && this.renderSection(section)
				})}

				{goBack}
			</article>
		)
	}
}

export default connect(
	state => ({}),
	null, null,
	{ pure: false }
)(stylesLoader.render(Instruction))
