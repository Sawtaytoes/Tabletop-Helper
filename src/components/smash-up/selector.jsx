import React, { PropTypes } from 'react'

import { stylesLoader } from 'utils/styles-loader'

export const Selector = ({
	isHeader,
	// isExpanded,
	isSelected,
	onClick,
	tier,
	title,
}) => (
	<div className="selector" onClick={onClick}>
		{/*
		{isHeader &&
			<span className="selector__expander">
				<i className={`fa ${isExpanded ? 'fa-plus' : 'fa-minus'}`} />
			</span>
		}
		{isHeader && <span>&nbsp;</span>}
		*/}

		<div className="selector__content">
			<span className={`selector__title ${isHeader ? 'selector__title--header' : ''}`}>
				{title}
			</span>
			{tier &&
				<span className={`selector__description`}>
					{tier.name}: {tier.rank}
				</span>
			}
		</div>
		<span>&nbsp;</span>
		<span className="selector__filter">
			<i className={`fa ${isSelected ? 'fa-check-circle' : 'fa-check-circle-o'}`} />
		</span>
	</div>
)

Selector.propTypes = {
	// isExpanded: PropTypes.bool,
	isHeader: PropTypes.bool,
	isSelected: PropTypes.bool,
	onClick: PropTypes.func,
	tier: PropTypes.shape({
		name: PropTypes.string,
		rank: PropTypes.number,
	}),
	title: PropTypes.string.isRequired,
}

Selector.defaultProps = {
	// isExpanded: true,
	isHeader: false,
	isSelected: false,
	onClick: () => {},
}

export default stylesLoader(require('./selector.styl'))(Selector)
