import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
	selectAll,
	deselectAll,
} from 'ducks/smash-up-decks-filter'

import Selector from 'components/smash-up/selector'

export const AllSelector = ({
	isSelected,
	selectAll,
	deselectAll,
}) => (
	<Selector
		isSelected={isSelected}
		onClick={() => isSelected ? deselectAll() : selectAll()}
		title="Select All"
	/>
)

AllSelector.propTypes = {
	isSelected: PropTypes.bool,
	selectAll: PropTypes.func,
	deselectAll: PropTypes.func,
}

AllSelector.defaultProps = {
	isSelected: false,
	selectAll: () => {},
	deselectAll: () => {},
}

const mapStateToProps = ({ smashUpDecksFilter }) => ({
	isSelected: Object.values(smashUpDecksFilter).every(filter => filter),
})

const mapDispatchToProps = dispatch => ({
	selectAll: () => dispatch(selectAll()),
	deselectAll: () => dispatch(deselectAll()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllSelector)
