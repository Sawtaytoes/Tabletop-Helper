export const PAIR_FACTIONS = 'SMASH_UP_PAIR_FACTIONS'

export const generateDecks = (availableFactions, numberOfPlayers) => ({
	type: PAIR_FACTIONS,
	availableFactions,
	iterations: numberOfPlayers * 2,
})

export const getNormalizedFactions = availableFactions => (
	Object.keys(availableFactions).filter(key => availableFactions[key])
)

export const randomizeFactions = (availableFactions, randomizedFactions, iterations) => {
	if (iterations <= 0) return randomizedFactions

	randomizedFactions.push(availableFactions.splice(Math.floor(Math.random() * availableFactions.length)))
	randomizeFactions([ ...availableFactions ], randomizedFactions, iterations - 1)

	return randomizedFactions
}

export const pairFactions = randomizedFactions => {
	const decks = []

	for (let i = 0; i < randomizedFactions.length; i += 2) {
		decks.push({
			playerNumber: Math.ceil(i / 2) + 1,
			adjectiveFaction: randomizedFactions[i],
			nounFaction: randomizedFactions[i + 1],
		})
	}

	return decks
}

export const initialState = []

export default (state = initialState, { type, availableFactions, iterations = 0 }) => {
	switch (type) {
		case PAIR_FACTIONS: {
			return pairFactions(randomizeFactions(
				getNormalizedFactions(availableFactions),
				[],
				iterations
			))
		}

		default:
			return state
	}
}
