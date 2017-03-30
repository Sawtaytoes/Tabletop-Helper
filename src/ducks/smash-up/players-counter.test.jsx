import test from 'tape-catch'

// Utils
import mockStore from 'utils/mocks/store.mock'

import playersCounter, {
	addPlayer,
	initialState,
	removePlayer,
} from './players-counter'

const testHelper = {}

test('Player Counter: Initial', t => {
	const store = mockStore(playersCounter, initialState)
	t.equal(store.getState(), initialState)
	t.end()
})

testHelper.addPlayer = (t, { initial, final }) => {
	const store = mockStore(playersCounter, {
		...initialState,
		numberOfPlayers: initial,
	})

	store.dispatch(addPlayer())

	t.equal(store.getState().numberOfPlayers, final, `${initial} becomes ${final} players`)
}

test('Player Counter: Add Player', t => {
	testHelper.addPlayer(t, {
		initial: 2,
		final: 3,
	})

	testHelper.addPlayer(t, {
		initial: 8,
		final: 9,
	})

	testHelper.addPlayer(t, {
		initial: 0,
		final: 2,
	})

	testHelper.addPlayer(t, {
		initial: 9,
		final: 9,
	})

	testHelper.addPlayer(t, {
		initial: 11,
		final: 9,
	})

	testHelper.addPlayer(t, {
		initial: -1,
		final: 2,
	})

	t.end()
})

testHelper.removePlayer = (t, { initial, final }) => {
	const store = mockStore(playersCounter, {
		...initialState,
		numberOfPlayers: initial,
	})

	store.dispatch(removePlayer())

	t.equal(store.getState().numberOfPlayers, final, `${initial} becomes ${final} players`)
}

test('Player Counter: Remove Player', t => {
	testHelper.removePlayer(t, {
		initial: 3,
		final: 2,
	})

	testHelper.removePlayer(t, {
		initial: 9,
		final: 8,
	})

	testHelper.removePlayer(t, {
		initial: 0,
		final: 2,
	})

	testHelper.removePlayer(t, {
		initial: 2,
		final: 2,
	})

	testHelper.removePlayer(t, {
		initial: 11,
		final: 9,
	})

	testHelper.removePlayer(t, {
		initial: -1,
		final: 2,
	})

	t.end()
})
