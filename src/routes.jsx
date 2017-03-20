import React, { PureComponent, PropTypes } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// Components
import SiteLayout from 'layouts/site-layout'
import About from 'views/about'
import Home from 'views/home'
import RandomizerSmashUp from 'views/randomizer-smash-up'
import ScoreKeeper from 'views/score-keeper'

// Actions
import { changeLocation } from 'ducks/location'

class ReduxLocation extends PureComponent {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		location: PropTypes.object.isRequired,
	};

	componentWillMount() {
		const { location, dispatch } = this.props
		dispatch(changeLocation(location))
	}

	render() { return null }
}

const ConnectedReduxLocation = connect(() => ({}))(ReduxLocation)

const Routes = () => (
	<SiteLayout>
		<Route exact path="/" component={Home} />
		<Route exact path="/" component={ConnectedReduxLocation} />

		<Route path="/about" component={About} />
		<Route path="/about" component={ConnectedReduxLocation} />

		<Route exact path="/randomizer" render={() => <Redirect to="/randomizer/smash-up" />} />

		<Route path="/randomizer/smash-up" component={RandomizerSmashUp} />
		<Route path="/randomizer/smash-up" component={ConnectedReduxLocation} />

		<Route path="/score-keeper" component={ScoreKeeper} />
		<Route path="/score-keeper" component={ConnectedReduxLocation} />

		{/* 404 */}
	</SiteLayout>
)

export default Routes
