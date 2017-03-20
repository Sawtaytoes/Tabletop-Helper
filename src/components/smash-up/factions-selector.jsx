import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { toggleFaction } from 'ducks/smash-up-decks-filter'

import Selector from 'components/smash-up/selector'

export const FactionsSelector = ({
	isSelected,
	title,
	toggleFaction,
}) => (
	<Selector
		isSelected={isSelected}
		onClick={() => toggleFaction(title)}
		title={title}
	/>
)

FactionsSelector.propTypes = {
	isSelected: PropTypes.bool,
	title: PropTypes.string.isRequired,
	toggleFaction: PropTypes.func,
}

FactionsSelector.defaultProps = {
	isSelected: false,
	toggleFaction: () => {},
}

const mapStateToProps = (_, initialProps) => {
	return ({ smashUpDecksFilter }) => ({
		isSelected: smashUpDecksFilter[initialProps.title],
	})
}

const mapDispatchToProps = dispatch => ({
	toggleFaction: title => dispatch(toggleFaction(title)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FactionsSelector)
