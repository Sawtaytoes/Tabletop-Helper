import test from 'tape-catch'

// Utils
import mockStore from 'utils/mocks/store.mock'

import smashUpRandomizer, {
	generateDecks,
	getNormalizedFactions,
	initialState,
	pairFactions,
	randomizeFactions,
} from './randomizer'

const testHelper = {}

test('Smash Up Randomizer: Initial', t => {
	const store = mockStore(smashUpRandomizer, initialState)
	t.equal(store.getState(), initialState)
	t.end()
})

testHelper.getNormalizedFactions = (t, { availableFactions, expectedFactions }) => {
	const normalizedFactions = getNormalizedFactions(availableFactions)
	t.ok(normalizedFactions instanceof Array, 'normalizing factions turns the container into an array')
	t.deepEqual(normalizedFactions, expectedFactions,
		'normalized factions remove unselected factions and sets'
	)
}


test('Smash Up Randomizer: Normalize Factions', t => {
	testHelper.getNormalizedFactions(t, {
		availableFactions: {
			"Aliens": true,
			"Dinosaurs": true,
			"Bear Cavalry": false,
			"Ghosts": false,
		},
		expectedFactions: [
			"Aliens",
			"Dinosaurs",
		],
	})

	testHelper.getNormalizedFactions(t, {
		availableFactions: {
			"Aliens": true,
			"Dinosaurs": true,
			"Ninjas": true,
			"Pirates": true,
			"Robots": true,
			"Tricksters": true,
			"Wizards": true,
			"Zombies": true,

			"Bear Cavalry": false,
			"Ghosts": false,
			"Killer Plants": false,
			"Steampunks": false,
		},
		expectedFactions: [
			"Aliens",
			"Dinosaurs",
			"Ninjas",
			"Pirates",
			"Robots",
			"Tricksters",
			"Wizards",
			"Zombies",
		],
	})

	testHelper.getNormalizedFactions(t, {
		availableFactions: {},
		expectedFactions: [],
	})

	testHelper.getNormalizedFactions(t, {
		availableFactions: {
			"Smash Up": true,
			"Cease & Desist": true,

			"Bear Cavalry": false,
			"Ghosts": false,
			"Killer Plants": false,
			"Steampunks": false,
		},
		expectedFactions: [],
	})

	testHelper.getNormalizedFactions(t, {
		availableFactions: {
			"Smash Up": true,

			"Aliens": true,
			"Dinosaurs": true,
			"Ninjas": true,
		},
		expectedFactions: [
			"Aliens",
			"Dinosaurs",
			"Ninjas",
		],
	})

	t.end()
})


testHelper.randomizeFactions = (t, { availableFactions, iterations }) => {
	const randomizedFactions = randomizeFactions(availableFactions, [], iterations)
	const numberOfFactions = randomizedFactions.length

	t.equal(numberOfFactions, iterations, `there are only ${iterations} of ${numberOfFactions} factions`)
	t.ok(
		randomizedFactions.every(randomizedFaction => (
			randomizedFactions.filter(filteredFaction => randomizedFaction === filteredFaction).length === 1
		)),
		'no factions are duplicates of each other'
	)
}

test('Smash Up Randomizer: Randomize Factions', t => {
	testHelper.randomizeFactions(t, {
		availableFactions: [
			"Aliens",
			"Dinosaurs",
		],
		iterations: 2,
	})

	testHelper.randomizeFactions(t, {
		availableFactions: [
			"Aliens",
			"Dinosaurs",
		],
		iterations: 0,
	})

	testHelper.randomizeFactions(t, {
		availableFactions: [
			"Aliens",
			"Dinosaurs",
			"Ninjas",
			"Pirates",
			"Robots",
			"Tricksters",
			"Wizards",
			"Zombies",
		],
		iterations: 8,
	})

	testHelper.randomizeFactions(t, {
		availableFactions: [
			"Aliens",
			"Dinosaurs",
			"Ninjas",
			"Pirates",
			"Robots",
			"Tricksters",
			"Wizards",
			"Zombies",
		],
		iterations: 4,
	})

	testHelper.randomizeFactions(t, {
		availableFactions: [
			"Aliens",
			"Dinosaurs",
			"Ninjas",
			"Pirates",
			"Robots",
			"Tricksters",
			"Wizards",
			"Zombies",
		],
		iterations: 0,
	})

	testHelper.randomizeFactions(t, {
		availableFactions: [],
		iterations: 0,
	})

	t.end()
})


testHelper.pairFactions = (t, { randomizedFactions, expectedDecks }) => {
	const decks = pairFactions(randomizedFactions)

	const numberOfFactions = randomizedFactions.length
	const numberOfDecks = decks.length

	t.equal(numberOfDecks, numberOfFactions / 2,
		`Half of ${numberOfFactions} factions make up the ${numberOfDecks} decks`
	)
	t.deepEqual(decks, expectedDecks, 'decks generated are as expected')
}

test('Smash Up Randomizer: Pair Factions', t => {
	testHelper.pairFactions(t, {
		randomizedFactions: [
			"Aliens",
			"Dinosaurs",
		],
		expectedDecks: [{
			playerNumber: 1,
			adjectiveFaction: "Aliens",
			nounFaction: "Dinosaurs",
		}]
	})

	testHelper.pairFactions(t, {
		randomizedFactions: [
			"Aliens",
			"Dinosaurs",
			"Ninjas",
			"Pirates",
			"Robots",
			"Tricksters",
			"Wizards",
			"Zombies",
		],
		expectedDecks: [{
			playerNumber: 1,
			adjectiveFaction: "Aliens",
			nounFaction: "Dinosaurs",
		}, {
			playerNumber: 2,
			adjectiveFaction: "Ninjas",
			nounFaction: "Pirates",
		}, {
			playerNumber: 3,
			adjectiveFaction: "Robots",
			nounFaction: "Tricksters",
		}, {
			playerNumber: 4,
			adjectiveFaction: "Wizards",
			nounFaction: "Zombies",
		}]
	})

	testHelper.pairFactions(t, {
		randomizedFactions: [],
		expectedDecks: [],
	})

	t.end()
})


testHelper.generateDecks = (t, { numberOfPlayers, filteredFactions, previousDecks = [] }) => {
	const store = mockStore(smashUpRandomizer, [
		...initialState,
		...previousDecks,
	])

	store.dispatch(generateDecks(filteredFactions, numberOfPlayers))

	const decks = store.getState()
	const numberOfDecks = decks.length
	const numberOfFactions = numberOfDecks * 2

	t.equal(numberOfDecks, numberOfPlayers,
		`${numberOfDecks} decks are for ${numberOfPlayers} players`
	)
	t.equal(
		decks.reduce((dictionary, { adjectiveFaction, nounFaction }) => {
			dictionary.add(adjectiveFaction)
			dictionary.add(nounFaction)
			return dictionary
		}, new Set()).size,
		numberOfFactions,
		'no factions are duplicates of each other'
	)
}

test('Smash Up Randomizer: Generate Decks', t => {
	const filteredFactions = {
		"Aliens": true,
		"Dinosaurs": true,
		"Ninjas": true,
		"Pirates": true,
		"Robots": true,
		"Tricksters": true,
		"Wizards": true,
		"Zombies": true,

		"Bear Cavalry": false,
		"Ghosts": false,
		"Killer Plants": false,
		"Steampunks": false,
	}

	testHelper.generateDecks(t, {
		numberOfPlayers: 2,
		filteredFactions,
	})

	testHelper.generateDecks(t, {
		numberOfPlayers: 4,
		filteredFactions,
	})

	testHelper.generateDecks(t, {
		numberOfPlayers: 0,
		filteredFactions,
	})

	testHelper.generateDecks(t, {
		numberOfPlayers: 2,
		filteredFactions,
		previousDecks: [{
			playerNumber: 1,
			adjectiveFaction: "Robots",
			nounFaction: "Tricksters",
		}, {
			playerNumber: 2,
			adjectiveFaction: "Wizards",
			nounFaction: "Zombies",
		}],
	})

	t.end()
})
