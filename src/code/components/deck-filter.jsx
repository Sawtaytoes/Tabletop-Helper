import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createArrayFromRange } from './../utilities/array'

// Actions
import {
	addFaction,
	addAllFactions,
	removeFaction,
	removeAllFactions
} from './../actions'

// Styles
// import './../../assets/styl/deck-filter'

class DeckFilter extends Component {
	// static propTypes = {
	// 	containerClass: PropTypes.string,
	// 	items: PropTypes.arrayOf(PropTypes.Object),
	// };

	constructor() {
		super()
	}

	getIdFromTitle(title) {
		return title.toLowerCase().replace(' ', '-')
	}

	handleSelectAllClicked(items, e) {
		let { dispatch } = this.props

		if (e.target.checked) {
			dispatch(addAllFactions())
		} else {
			dispatch(removeAllFactions())
		}
	}

	handleItemClicked(id, e) {
		let { dispatch } = this.props

		if (e.target.checked) {
			dispatch(addFaction(id))
		} else {
			dispatch(removeFaction(id))
		}
	}

	renderSelectAll() {
		let htmlId = 'select-all-' + (Math.random() * 10000),
			{ items, selectedFactionIds } = this.props

		return (
			<div>
				<label htmlFor={htmlId}>
					<input id={htmlId} type="checkbox" title="Select all items in the list" value={htmlId} checked={items.length === selectedFactionIds.length} onChange={this.handleSelectAllClicked.bind(this, items)}
					/>
					<span> Select All</span>
				</label>
			</div>
		)
	}

	renderItem(item, id) {
		let htmlId = this.getIdFromTitle(item.title)

		return (
			<div key={id + htmlId}>
				<label htmlFor={htmlId}>
					<input id={htmlId} type="checkbox" title={item.description} value={htmlId} checked={this.props.selectedFactionIds.includes(id)} onChange={this.handleItemClicked.bind(this, id)} />
					<span> {item.title}</span>
				</label>
			</div>
		)
	}

	render() { return (
		<form action="POST">
			<fieldset className={this.props.containerClass}>
				{this.renderSelectAll()}
				{this.props.items.sort((a, b) => {
					if (a.title > b.title) {
						return 1
					} else if (a.title < b.title) {
						return -1
					}

					return 0
				}).map((item, id) => {
					return this.renderItem(item, id)
				})}
			</fieldset>
		</form>
	)}
}

export default connect(
	state => ({ selectedFactionIds: state.factions.selectedFactionIds })
)(DeckFilter);
