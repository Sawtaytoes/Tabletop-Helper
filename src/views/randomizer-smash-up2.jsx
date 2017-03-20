import React from 'react'
import { Route, Redirect, Link } from 'react-router-dom'

import DecksFilter from 'components/smash-up/decks-filter'
import GameOverview from 'components/smash-up/game-overview'
import PlayersSelector from 'components/players-selector'

const RandomizerSmashUp = () => (
	<div>
		<Route exact path="/randomizer/smash-up" render={() => <Redirect to="/randomizer/smash-up/players-selector" />} />

		<Route path="/randomizer/smash-up/players-selector" render={() => (
			<div>
				<div><Link to="/randomizer/smash-up/deck-selector">Next</Link></div>
				<PlayersSelector />
				<div><Link to="/randomizer/smash-up/deck-selector">Next</Link></div>
			</div>
		)} />

		<Route path="/randomizer/smash-up/deck-selector" render={() => (
			<div>
				<div><Link to="/randomizer/smash-up/players-selector">Back</Link></div>
				<DecksFilter />
				<div><Link to="/randomizer/smash-up/game-overview">Submit</Link></div>
			</div>
		)} />

		{/*
		<Route path="/randomizer/smash-up/ranking-selector" render={() => (
			<div>
				<div><Link to="/randomizer/smash-up/deck-selector">Back</Link></div>
				<RankingSelector />
				<div><Link to="/randomizer/smash-up/game-overview">Submit</Link></div>
			</div>
		)} />
		*/}

		<Route path="/randomizer/smash-up/game-overview" render={() => (
			<div>
				<div><Link to="/randomizer/smash-up/deck-selector">Back</Link></div>
				<GameOverview />
				<div><Link to="/randomizer/smash-up/players-selector">Start Over</Link></div>
			</div>
		)} />
	</div>
)

export default RandomizerSmashUp
