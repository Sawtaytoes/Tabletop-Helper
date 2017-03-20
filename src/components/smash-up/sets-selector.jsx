import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { toggleSet } from 'ducks/smash-up-decks-filter'

import Selector from 'components/smash-up/selector'

export const SetsSelector = ({
	isSelected,
	title,
	toggleSet,
}) => (
	<Selector
		isSelected={isSelected}
		onClick={() => toggleSet(title)}
		styles={{ fontWeight: 'bold' }}
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
	return ({ smashUpDecksFilter }) => ({
		isSelected: smashUpDecksFilter[initialProps.title],
		toggleSet: () => {},
	})
}

const mapDispatchToProps = dispatch => ({
	toggleSet: title => dispatch(toggleSet(title)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetsSelector)
