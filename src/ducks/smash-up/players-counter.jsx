export const ADD_PLAYER = 'SMASH_UP::ADD_PLAYER'
export const REMOVE_PLAYER = 'SMASH_UP::REMOVE_PLAYER'

export const addPlayer = () => ({ type: ADD_PLAYER })
export const removePlayer = () => ({ type: REMOVE_PLAYER })

export const initialState = {
	numberOfPlayers: 2,
}

export default (state = initialState, { type }) => {
	const { numberOfPlayers } = state

	const minNumberOfPlayers = 2
	const maxNumberOfPlayers = 9

	switch (type) {
		case ADD_PLAYER: {
			const playerCount = Math.max(
				minNumberOfPlayers,
				Math.min(
					maxNumberOfPlayers,
					numberOfPlayers + 1,
				),
			)

			return {
				...state,
				numberOfPlayers: playerCount,
			}
		}

		case REMOVE_PLAYER: {
			const playerCount = Math.min(
				maxNumberOfPlayers,
				Math.max(
					minNumberOfPlayers,
					numberOfPlayers - 1,
				),
			)

			return {
				...state,
				numberOfPlayers: playerCount,
			}
		}

		default:
			return state
	}
}
