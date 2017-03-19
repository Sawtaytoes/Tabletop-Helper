import React, { PropTypes } from 'react'

export const Selector = ({
	isSelected,
	onClick,
	styles,
	title,
}) => (
	<div>
		<span style={styles}>{title}</span>
		<span> </span>
		<a onClick={onClick}>{isSelected ? '++++++' : '------'}</a>
	</div>
)

Selector.propTypes = {
	isSelected: PropTypes.bool,
	onClick: PropTypes.func,
	styles: PropTypes.object,
	title: PropTypes.string.isRequired,
}

Selector.defaultProps = {
	isSelected: false,
	onClick: () => {},
	styles: {},
}

export default Selector
