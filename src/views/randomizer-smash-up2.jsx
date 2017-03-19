import React from 'react'
import { Route, Redirect, Link } from 'react-router-dom'

// Components
import PlayersSelector from 'components/players-selector'
import SmashUpDecksSelector from 'components/smash-up-decks-selector'

const RandomizerSmashUp = () => (
	<div>
		<Redirect from="/randomizer/smash-up" to="/randomizer/smash-up/players-selector" />

		<Route path="/randomizer/smash-up/players-selector" render={() => (
			<div>
				<div><Link to="/randomizer/smash-up/deck-selector">Next</Link></div>
				<PlayersSelector />
				<div><Link to="/randomizer/smash-up/deck-selector">Next</Link></div>
			</div>
		)} />

		<Route path="/randomizer/smash-up/deck-selector" render={() => (
			<div>
				<div><Link to="/randomizer/smash-up/players-selector">Next</Link></div>
				<SmashUpDecksSelector />
				<div><Link to="/randomizer/smash-up/players-selector">Next</Link></div>
			</div>
		)} />


		{/*<Link to="/randomizer/smash-up/" />*/}

	</div>
)

export default RandomizerSmashUp
