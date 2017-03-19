import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { toggleFaction } from 'ducks/smash-up-decks-selector'

import Selector from 'components/smash-up/Selector'

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
	return ({ smashUpDecksSelector }) => ({
		isSelected: smashUpDecksSelector[initialProps.title],
	})
}

const mapDispatchToProps = dispatch => ({
	toggleFaction: title => dispatch(toggleFaction(title)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FactionsSelector)
