import React, { PropTypes } from 'react'
import { Redirect, Route } from 'react-router-dom'

import SmashUpRandomizer from 'components/smash-up/randomizer/'

const SmashUp = ({ match: { url } }) => (
	<article>
		<Redirect exact from={`${url}/`} to={`${url}/randomizer`} />
		<Route path={`${url}/randomizer`} component={SmashUpRandomizer} />
	</article>
)

SmashUp.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}).isRequired,
}

export default SmashUp
