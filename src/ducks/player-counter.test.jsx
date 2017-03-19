import test from 'tape-catch'

// Utils
import mockStore from 'utils/mocks/store.mock'

import playerCounter, {
	addPlayer,
	initialState,
	removePlayer,
} from 'ducks/player-counter'

const testHelper = {}

test('Player Counter: Initial', t => {
	const store = mockStore(playerCounter, initialState)
	t.equal(store.getState(), initialState)
	t.end()
})

testHelper.addPlayer = (t, initialValue, finalValue) => {
	const store = mockStore(playerCounter, {
		...initialState,
		numberOfPlayers: initialValue,
	})

	store.dispatch(addPlayer())

	t.equal(store.getState().numberOfPlayers, finalValue)
	t.end()
}

test('Player Counter: Add Player (2 becomes 3 players)', t => {
	testHelper.addPlayer(t, 2, 3)
})

test('Player Counter: Add Player (8 becomes 9 players)', t => {
	testHelper.addPlayer(t, 8, 9)
})

test('Player Counter: Add Player (0 becomes 2 players)', t => {
	testHelper.addPlayer(t, 0, 2)
})

test('Player Counter: Add Player (9 becomes 9 players)', t => {
	testHelper.addPlayer(t, 9, 9)
})

test('Player Counter: Add Player (11 becomes 9 players)', t => {
	testHelper.addPlayer(t, 11, 9)
})

test('Player Counter: Add Player (-1 becomes 2 players)', t => {
	testHelper.addPlayer(t, -1, 2)
})

testHelper.removePlayer = (t, initialValue, finalValue) => {
	const store = mockStore(playerCounter, {
		...initialState,
		numberOfPlayers: initialValue,
	})

	store.dispatch(removePlayer())

	t.equal(store.getState().numberOfPlayers, finalValue)
	t.end()
}

test('Player Counter: Remove Player (3 becomes 2 players)', t => {
	testHelper.removePlayer(t, 3, 2)
})

test('Player Counter: Remove Player (9 becomes 8 players)', t => {
	testHelper.removePlayer(t, 9, 8)
})

test('Player Counter: Remove Player (0 becomes 2 players)', t => {
	testHelper.removePlayer(t, 0, 2)
})

test('Player Counter: Remove Player (2 becomes 2 players)', t => {
	testHelper.removePlayer(t, 2, 2)
})

test('Player Counter: Remove Player (11 becomes 9 players)', t => {
	testHelper.removePlayer(t, 11, 9)
})

test('Player Counter: Remove Player (-1 becomes 2 players)', t => {
	testHelper.removePlayer(t, -1, 2)
})
