import React, { PropTypes } from 'react'
import { Redirect, Route } from 'react-router-dom'

import DecksFilter from 'components/smash-up/factions-filter'
import GameOverview from 'components/smash-up/game-overview'
import PageLink from 'components/smash-up/page-link'
import PlayersSelector from 'components/smash-up/players-selector'
import { stylesLoader } from 'utils/styles-loader'

const SmashUpRandomizer = ({ match: { url } }) => (
	<article className="smash-up-randomizer">
		<Redirect exact from={`${url}/`} to={`${url}/randomizer`} />
		<Redirect exact from={`${url}/randomizer`} to={`${url}/players-selector`} />

		<Route path={`${url}/players-selector`} render={() => (
			<article>
				<div className="smash-up-randomizer__page-links">
					<div />
					<PageLink to={`${url}/factions-filter`}>Choose Factions</PageLink>
				</div>

				<PlayersSelector />
			</article>
		)} />

		<Route path={`${url}/factions-filter`} render={() => (
			<article>
				<div className="smash-up-randomizer__page-links">
					<PageLink to={`${url}/players-selector`}>Choose Players</PageLink>
					<PageLink to={`${url}/game-overview`}>Filter Factions</PageLink>
				</div>

				<DecksFilter />
			</article>
		)} />

		{/*
		<Route path={`${url}/ranking-selector`} render={() => (
			<div>
				<div><Link to={`${url}/factions-filter`}>Back</Link></div>
				<RankingSelector />
				<div><Link to={`${url}/game-overview`}>Submit</Link></div>
			</div>
		)} />
		*/}

		<Route path={`${url}/game-overview`} render={() => (
			<article>
				<div className="smash-up-randomizer__page-links">
					<PageLink to={`${url}/factions-filter`}>Filter Factions</PageLink>
					<PageLink to={`${url}/players-selector`}>Start Over</PageLink>
				</div>

				<GameOverview />
			</article>
		)} />
	</article>
)

SmashUpRandomizer.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}).isRequired,
}

export default stylesLoader(require('./index.styl'))(SmashUpRandomizer)
