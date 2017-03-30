import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import About from 'components/pages/about'
import Home from 'components/pages/home'
import NoMatch from 'components/pages/no-match'
import ScoreKeeper from 'components/pages/score-keeper'
import SiteLayout from 'components/site-layout/site-layout'
import SmashUpRandomizer from 'components/smash-up'

const Pages = () => (
	<SiteLayout>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />

			<Route exact path="/randomizer" render={() => <Redirect to="/randomizer/smash-up" />} />
			<Route path="/randomizer/smash-up" component={SmashUpRandomizer} />

			<Route path="/score-keeper" component={ScoreKeeper} />
			<Route component={NoMatch} />
		</Switch>
	</SiteLayout>
)

export default Pages
