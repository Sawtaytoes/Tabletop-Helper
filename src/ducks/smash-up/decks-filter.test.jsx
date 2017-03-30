import test from 'tape-catch'

// Utils
import mockStore from 'utils/mocks/store.mock'

import smashUpDecksFilter, {
	deselectAll,
	initialState,
	selectAll,
	toggleFaction,
	toggleSet,
} from './decks-filter'

const testHelper = {}

test('Smash Up Decks Selector: Initial', t => {
	const store = mockStore(smashUpDecksFilter, initialState)
	t.equal(store.getState(), initialState)
	t.end()
})

testHelper.toggleFaction = (t, { title, initial, final }) => {
	const store = mockStore(smashUpDecksFilter, {
		...initialState,
		[title]: initial,
	})

	store.dispatch(toggleFaction(title))

	t.equal(store.getState()[title], final, `faction that is ${initial} is now ${final}`)
}

test('Smash Up Decks Selector: Toggle Faction', t => {
	const title = "Awesome Level 9000"

	testHelper.toggleFaction(t, {
		title,
		initial: false,
		final: true,
	})

	testHelper.toggleFaction(t, {
		title,
		initial: true,
		final: false,
	})

	testHelper.toggleFaction(t, {
		title,
		initial: undefined,
		final: true,
	})

	testHelper.toggleFaction(t, {
		title,
		initial: null,
		final: true,
	})

	t.end()
})


testHelper.toggleSet = (t, { title, decks, initial, final }) => {
	const store = mockStore(smashUpDecksFilter, {
		...initialState,
		[title]: initial,
	})

	store.dispatch(toggleSet(title))

	t.equal(store.getState()[title], final, `set that is ${initial} is now ${final}`)
	t.equal(decks.every(title => store.getState()[title]), final, `set factions are now ${final}`)
}

test('Smash Up Decks Selector: Toggle Set', t => {
	const title = "Awesome Level 9000"
	const decks = [
		"Bear Cavalry",
		"Ghosts",
		"Killer Plants",
		"Steampunks",
	]

	testHelper.toggleSet(t, {
		title,
		decks,
		initial: false,
		final: true,
	})

	testHelper.toggleSet(t, {
		title,
		decks,
		initial: true,
		final: false,
	})

	testHelper.toggleSet(t, {
		title,
		decks,
		initial: undefined,
		final: true,
	})

	testHelper.toggleSet(t, {
		title,
		decks,
		initial: null,
		final: true,
	})

	t.end()
})


testHelper.selectAll = t => {
	const store = mockStore(smashUpDecksFilter, {
		...initialState,
		"Ghosts": true,
		"Killer Plants": false,
		"Tricksters": true,
		"Wizards": false,
		"Zombies": true,
	})

	store.dispatch(selectAll())

	t.equal(Object.values(store.getState()).every(title => title), true, `all decks are now ${true}`)
}

test('Smash Up Decks Selector: Select All', t => {
	testHelper.selectAll(t)

	t.end()
})


testHelper.deselectAll = t => {
	const store = mockStore(smashUpDecksFilter, {
		...initialState,
		"Ghosts": true,
		"Killer Plants": false,
		"Tricksters": true,
		"Wizards": false,
		"Zombies": true,
	})

	store.dispatch(deselectAll())

	t.equal(Object.values(store.getState()).every(title => title), false, `all decks are now ${false}`)
}

test('Smash Up Decks Selector: Deselect All', t => {
	testHelper.deselectAll(t)

	t.end()
})
