import React, { PropTypes } from 'react'
import { Route, Redirect } from 'react-router-dom'

import DecksFilter from 'components/smash-up/factions-filter'
import GameOverview from 'components/smash-up/game-overview'
import PageLink from 'components/smash-up/page-link'
import PlayersSelector from 'components/smash-up/players-selector'
import { stylesLoader } from 'utils/styles-loader'

const RandomizerSmashUp = ({ match }) => (
	<article className="randomizer-smash-up">
		<Route exact path={`${match.url}/`} render={() => <Redirect to={`${match.url}/players-selector`} />} />

		<Route path={`${match.url}/players-selector`} render={() => (
			<article>
				<div className="randomizer-smash-up__page-links">
					<div />
					<PageLink to={`${match.url}/factions-filter`}>Choose Factions</PageLink>
				</div>

				<PlayersSelector />
			</article>
		)} />

		<Route path={`${match.url}/factions-filter`} render={() => (
			<article>
				<div className="randomizer-smash-up__page-links">
					<PageLink to={`${match.url}/players-selector`}>Choose Players</PageLink>
					<PageLink to={`${match.url}/game-overview`}>Filter Factions</PageLink>
				</div>

				<DecksFilter />
			</article>
		)} />

		{/*
		<Route path={`${match.url}/ranking-selector`} render={() => (
			<div>
				<div><Link to={`${match.url}/factions-filter`}>Back</Link></div>
				<RankingSelector />
				<div><Link to={`${match.url}/game-overview`}>Submit</Link></div>
			</div>
		)} />
		*/}

		<Route path={`${match.url}/game-overview`} render={() => (
			<article>
				<div className="randomizer-smash-up__page-links">
					<PageLink to={`${match.url}/factions-filter`}>Filter Factions</PageLink>
					<PageLink to={`${match.url}/players-selector`}>Start Over</PageLink>
				</div>

				<GameOverview />
			</article>
		)} />
	</article>
)

RandomizerSmashUp.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}).isRequired,
}

export default stylesLoader(require('./randomizer-smash-up.styl'))(RandomizerSmashUp)
