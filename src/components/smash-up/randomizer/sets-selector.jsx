import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { toggleSet } from 'ducks/smash-up/decks-filter'

import Selector from 'components/smash-up/randomizer/selector'

export const SetsSelector = ({
	isSelected,
	title,
	toggleSet,
}) => (
	<Selector
		isHeader={true}
		isSelected={isSelected}
		onClick={() => toggleSet(title)}
		title={title}
	/>
)

SetsSelector.propTypes = {
	isSelected: PropTypes.bool,
	title: PropTypes.string.isRequired,
	toggleSet: PropTypes.func,
}

SetsSelector.defaultProps = {
	isSelected: false,
	toggleSet: PropTypes.func,
}

const mapStateToProps = (_, initialProps) => {
	return ({ smashUp: { decksFilter } }) => ({
		isSelected: decksFilter[initialProps.title],
		toggleSet: () => {},
	})
}

const mapDispatchToProps = dispatch => ({
	toggleSet: title => dispatch(toggleSet(title)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetsSelector)
