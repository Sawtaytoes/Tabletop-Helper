import React, { PropTypes } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import SmashUpRandomizer from 'components/smash-up/randomizer/'

const SmashUp = ({ match: { url } }) => (
	<article>
		<Switch>
			<Route path={`${url}/randomizer`} component={SmashUpRandomizer} />
			<Redirect exact from={`${url}`} to={`${url}/randomizer`} />
		</Switch>
	</article>
)

SmashUp.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}).isRequired,
}

export default SmashUp
