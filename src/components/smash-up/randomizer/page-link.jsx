import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

import { stylesLoader } from 'utils/styles-loader'

const PageLink = ({
	children,
	to,
}) => (
	<Link
		className="page-link"
		to={to}
	>
		{children}
	</Link>
)

PageLink.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string,
	]).isRequired,
	to: PropTypes.string.isRequired,
}

export default stylesLoader(require('./page-link.styl'))(PageLink)
