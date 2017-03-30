import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { toggleFaction } from 'ducks/smash-up/decks-filter'

import Selector from 'components/smash-up/selector'

export const FactionsSelector = ({
	isSelected,
	tier,
	title,
	toggleFaction,
}) => (
	<Selector
		key="selector"
		isSelected={isSelected}
		onClick={() => toggleFaction(title)}
		tier={tier}
		title={title}
	/>
)

FactionsSelector.propTypes = {
	isSelected: PropTypes.bool,
	tier: PropTypes.shape({
		name: PropTypes.string.isRequired,
		rank: PropTypes.number.isRequired,
	}).isRequired,
	title: PropTypes.string.isRequired,
	toggleFaction: PropTypes.func,
}

FactionsSelector.defaultProps = {
	isSelected: false,
	toggleFaction: () => {},
}

const mapStateToProps = (_, initialProps) => {
	return ({ smashUp: { decksFilter } }) => ({
		isSelected: decksFilter[initialProps.title],
	})
}

const mapDispatchToProps = dispatch => ({
	toggleFaction: title => dispatch(toggleFaction(title)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FactionsSelector)
