import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import RandomizeButton from 'components/smash-up/randomize-button'
import { factions } from 'content/smash-up-decks'
import { stylesLoader } from 'utils/styles-loader'

export const GameOverview = ({
	decks,
}) => (
	<div className="game-overview">
		<div className="game-overview__message">
			<em><strong>Note: </strong>Lower Rank is Better</em>
		</div>

		{decks
			.map(deck => ({
				...deck,
				adjectiveFaction: factions.find(({ title }) => title === deck.adjectiveFaction),
				nounFaction: factions.find(({ title }) => title === deck.nounFaction)
			}))
			.map(({ playerNumber, adjectiveFaction, nounFaction }) => (
				<div key={playerNumber} className="game-overview__info">
					<div className="game-overview__player-info">
						<div className="game-overview__player-title">
							Player
						</div>
						<div className="game-overview__player-number">
							{playerNumber}
						</div>
					</div>

					<div className="game-overview__deck-info">
						<div className="game-overview__deck-name">
							{adjectiveFaction.name.adjective} {nounFaction.name.noun}
						</div>

						<div className="game-overview__deck-rank">
							Rank {adjectiveFaction.tier.rank + nounFaction.tier.rank}
						</div>
					</div>
				</div>
			))
		}

		<RandomizeButton />
	</div>
)

GameOverview.propTypes = {
	decks: PropTypes.arrayOf(PropTypes.shape({
		playerNumber: PropTypes.number,
		adjectiveFaction: PropTypes.string,
		nounFaction: PropTypes.string,
	})),
}

GameOverview.defaultProps = {
	decks: [],
}

const mapStateToProps = ({ smashUpRandomizer }) => ({
	decks: smashUpRandomizer,
})

export default connect(mapStateToProps)(stylesLoader(require('./game-overview.styl'))(GameOverview))
