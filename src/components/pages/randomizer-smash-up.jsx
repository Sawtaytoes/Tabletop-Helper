import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import DecksFilter from 'components/smash-up/factions-filter'
import GameOverview from 'components/smash-up/game-overview'
import PageLink from 'components/smash-up/page-link'
import PlayersSelector from 'components/smash-up/players-selector'
import { stylesLoader } from 'utils/styles-loader'

const RandomizerSmashUp = () => (
	<article className="randomizer-smash-up">
		<Route exact path="/randomizer/smash-up" render={() => <Redirect to="/randomizer/smash-up/players-selector" />} />

		<Route path="/randomizer/smash-up/players-selector" render={() => (
			<article>
				<div className="randomizer-smash-up__page-links">
					<div />
					<PageLink to="/randomizer/smash-up/factions-filter">Choose Factions</PageLink>
				</div>

				<PlayersSelector />
			</article>
		)} />

		<Route path="/randomizer/smash-up/factions-filter" render={() => (
			<article>
				<div className="randomizer-smash-up__page-links">
					<PageLink to="/randomizer/smash-up/players-selector">Choose Players</PageLink>
					<PageLink to="/randomizer/smash-up/game-overview">Filter Factions</PageLink>
				</div>

				<DecksFilter />
			</article>
		)} />

		{/*
		<Route path="/randomizer/smash-up/ranking-selector" render={() => (
			<div>
				<div><Link to="/randomizer/smash-up/factions-filter">Back</Link></div>
				<RankingSelector />
				<div><Link to="/randomizer/smash-up/game-overview">Submit</Link></div>
			</div>
		)} />
		*/}

		<Route path="/randomizer/smash-up/game-overview" render={() => (
			<article>
				<div className="randomizer-smash-up__page-links">
					<PageLink to="/randomizer/smash-up/factions-filter">Filter Factions</PageLink>
					<PageLink to="/randomizer/smash-up/players-selector">Start Over</PageLink>
				</div>

				<GameOverview />
			</article>
		)} />
	</article>
)

export default stylesLoader(require('./randomizer-smash-up.styl'))(RandomizerSmashUp)
