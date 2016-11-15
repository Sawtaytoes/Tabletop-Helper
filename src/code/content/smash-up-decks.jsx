const setNames = {
	core: "Core",
	al9k: "Awesome Level 9000",
	cthulhu: "The Obligatory Cthulhu Set",
	sfdf: "Science Fiction Double Feature",
	monster: "Monster Smash",
	geek: "The Big Geeky Box",
	pretty: "Pretty Pretty Smash Up",
	munchkin: "Munchkin",
	iyf: "It's Your Fault",
}

const sets = [{
	title: setNames.core,
	description: '',
}, {
	title: setNames.al9k,
	description: '',
}, {
	title: setNames.cthulhu,
	description: '',
}, {
	title: setNames.sfdf,
	description: '',
}, {
	title: setNames.monster,
	description: '',
}, {
	title: setNames.geek,
	description: '',
}, {
	title: setNames.pretty,
	description: '',
}, {
	title: setNames.munchkin,
	description: '',
}, {
	title: setNames.iyf,
	description: '',
}]

const factions = [{
	title: "Aliens",
	name: {
		noun: "Aliens",
		adjective: "Alien",
	},
	description: "Return minions back to their owners' hands, gain victory points through play, and base manipulation",
	setName: setNames.core,
}, {
	title: "Dinosaurs",
	name: {
		noun: "Dinosaurs",
		adjective: "Dinosaur",
	},
	description: "High-powered minions break bases quickly with ways to augment power further.",
	setName: setNames.core,
}, {
	title: "Ninjas",
	name: {
		noun: "Ninjas",
		adjective: "Ninja",
	},
	description: "Destroy minions and sneak onto bases at the last second using specials.",
	setName: setNames.core,
}, {
	title: "Pirates",
	name: {
		noun: "Pirates",
		adjective: "Pirate",
	},
	description: "Move around from base to base and destroy weak minions.",
	setName: setNames.core,
}, {
	title: "Robots",
	name: {
		noun: "Robots",
		adjective: "Robotic",
	},
	description: "Play lots of weak minions at once that compound eachother.",
	setName: setNames.core,
}, {
	title: "Tricksters",
	name: {
		noun: "Tricksters",
		adjective: "Trickster",
	},
	description: "Force other players to discard and make bases undesirable to play on.",
	setName: setNames.core,
}, {
	title: "Wizards",
	name: {
		noun: "Wizards",
		adjective: "Wizard",
	},
	description: "Draw quickly, and play several cards per turn.",
	setName: setNames.core,
}, {
	title: "Zombies",
	name: {
		noun: "Zombies",
		adjective: "Zombie",
	},
	description: "Play minions from the discard pile.",
	setName: setNames.core,
}, {
	title: "Bear Cavalry",
	name: {
		noun: "Bear Cavalry",
		adjective: "Bear Cavalry",
	},
	description: "Move other players' minions and destroy them.",
	setName: setNames.al9k,
}, {
	title: "Ghosts",
	name: {
		noun: "Ghosts",
		adjective: "Ghost",
	},
	description: "Benefit from discarding and having 2 or fewer cards in their hand.",
	setName: setNames.al9k,
}, {
	title: "Killer Plants",
	name: {
		noun: "Killer Plants",
		adjective: "Killer Plant",
	},
	description: "Search your deck for weak minions and multi-turn abilities, base manipulation.",
	setName: setNames.al9k,
}, {
	title: "Steampunks",
	name: {
		noun: "Steampunks",
		adjective: "Steampunk",
	},
	description: "Powerful base actions that can be salvaged from the discard pile, moving between bases.",
	setName: setNames.al9k,
}, {
	title: "Elder Things",
	name: {
		noun: "Elder Things",
		adjective: "Elder Thing",
	},
	description: "Give Madness to other players, and have strong minions that are difficult to play.",
	setName: setNames.cthulhu,
}, {
	title: "Innsmouth",
	name: {
		noun: "Innsmouth",
		adjective: "Innsmouth",
	},
	description: "Lots of power 2 minions that work together well and played in droves.",
	setName: setNames.cthulhu,
}, {
	title: "Minions of Cthulhu",
	name: {
		noun: "Minions of Cthulhu",
		adjective: "Cthulhu's Minion",
	},
	description: "Play lots of actions, recover cards from the discard pile, and slow the game down all the while gaining Madness.",
	setName: setNames.cthulhu,
}, {
	title: "Miskatonic University",
	name: {
		noun: "Miskatonic University",
		adjective: "Miskatonic University",
	},
	description: "Gain, use, and lose Madness to accomplish a little of everything.",
	setName: setNames.cthulhu,
}, {
	title: "Cyborg Apes",
	name: {
		noun: "Cyborg Apes",
		adjective: "Cyborg Ape",
	},
	description: "Play lots of actions on minions to power them up.",
	setName: setNames.sfdf,
}, {
	title: "Shapeshifters",
	name: {
		noun: "Shapeshifters",
		adjective: "Shapeshifter",
	},
	description: "Copy other players' power and abilities.",
	setName: setNames.sfdf,
}, {
	title: "Super Spies",
	name: {
		noun: "Super Spies",
		adjective: "Super Spy",
	},
	description: "Sabotage other players' hands and deck while improving yours, play specials while bases are scoring.",
	setName: setNames.sfdf,
}, {
	title: "Time Travelers",
	name: {
		noun: "Time Travelers",
		adjective: "Time Traveler",
	},
	description: "Replay actions and minions, avoiding the discard pile by going to the hand or the bottom of the deck.",
	setName: setNames.sfdf,
}, {
	title: "Giant Ants",
	name: {
		noun: "Giant Ants",
		adjective: "Giant Ant",
	},
	description: "Play and move +1 power counters on your minions flexibly.",
	setName: setNames.monster,
}, {
	title: "Mad Scientists",
	name: {
		noun: "Mad Scientists",
		adjective: "Mad Scientist",
	},
	description: "Play and manipulate +1 power counters on your minions.",
	setName: setNames.monster,
}, {
	title: "Vampires",
	name: {
		noun: "Vampires",
		adjective: "Vampire",
	},
	description: "Destroy minions to gain power.",
	setName: setNames.monster,
}, {
	title: "Werewolves",
	name: {
		noun: "Werewolves",
		adjective: "Werewolf",
	},
	description: "Gain power on your turn and destroy minions.",
	setName: setNames.monster,
}, {
	title: "Geeks",
	name: {
		noun: "Geeks",
		adjective: "Geek",
	},
	description: "Interrupt other players' turns to disrupt their plans.",
	setName: setNames.geek,
}, {
	title: "Fairies",
	name: {
		noun: "Fairies",
		adjective: "Fairy",
	},
	description: "Choose between effects and manipulate actions played on minions.",
	setName: setNames.pretty,
}, {
	title: "Kitty Cats",
	name: {
		noun: "Kitty Cats",
		adjective: "Kitty Cat",
	},
	description: "Temporarily take control of other player's minions, and destroy minions you control.",
	setName: setNames.pretty,
}, {
	title: "Mythic Horses",
	name: {
		noun: "Mythic Horses",
		adjective: "Mythic Horse",
	},
	description: "Benefit from having minions together on bases and lots of ways to move.",
	setName: setNames.pretty,
}, {
	title: "Princesses",
	name: {
		noun: "Princesses",
		adjective: "Princess",
	},
	description: "A few strong minions with powerful talents and abilities.",
	setName: setNames.pretty,
}, {
	title: "Clerics",
	name: {
		noun: "Clerics",
		adjective: "Clerical",
	},
	description: "Return cards from the discard pile and prevent them from going to the discard pile",
	setName: setNames.munchkin,
}, {
	title: "Dwarves",
	name: {
		noun: "Dwarves",
		adjective: "Dwarven",
	},
	description: "Benefit from treasures played on their minions",
	setName: setNames.munchkin,
}, {
	title: "Elves",
	name: {
		noun: "Elves",
		adjective: "Elven",
	},
	description: "Help other players to indirectly help self",
	setName: setNames.munchkin,
}, {
	title: "Halflings",
	name: {
		noun: "Halflings",
		adjective: "Halfling",
	},
	description: "Playing lots of extra minions, often negating their effects to play them",
	setName: setNames.munchkin,
}, {
	title: "Mages",
	name: {
		noun: "Mages",
		adjective: "Mage",
	},
	description: "Discarding cards for destroying and other effects",
	setName: setNames.munchkin,
}, {
	title: "Orcs",
	name: {
		noun: "Orcs",
		adjective: "Orcish",
	},
	description: "Huge brute horse against your opponents while being hard to knock down",
	setName: setNames.munchkin,
}, {
	title: "Thieves",
	name: {
		noun: "Thieves",
		adjective: "Thieving",
	},
	description: "Steal things and get treasure, sell treasures for VP",
	setName: setNames.munchkin,
}, {
	title: "Warriors",
	name: {
		noun: "Warriors",
		adjective: "Warrior",
	},
	description: "Playing more monsters on bases to slow game and destroying monsters on bases",
	setName: setNames.munchkin,
}, {
	title: "Dragons",
	name: {
		noun: "Dragons",
		adjective: "Dragon",
	},
	setName: setNames.iyf,
}, {
	title: "Greek Myths",
	name: {
		noun: "Greek Myths",
		adjective: "Greek Myth",
	},
	setName: setNames.iyf,
}, {
	title: "Sharks",
	name: {
		noun: "Sharks",
		adjective: "Shark",
	},
	setName: setNames.iyf,
}, {
	title: "Superheroes",
	name: {
		noun: "Superheroes",
		adjective: "Superhero",
	},
	setName: setNames.iyf,
}, {
	title: "Tornados",
	name: {
		noun: "Tornados",
		adjective: "Tornado",
	},
	setName: setNames.iyf,
}]

const deckSetList = []
const deckSetListReverse = {}

sets.forEach((set, setId) => {
	deckSetList.push({
		id: setId,
		decks: [],
		...set,
	})

	deckSetListReverse[set.title] = setId
})

factions.forEach((faction, factionId) => {
	const setId = deckSetListReverse[faction.setName]

	deckSetList[setId].decks.push({
		id: factionId,
		...faction,
	})
})

module.exports = {
	sets: deckSetList,
	factions: factions,
}
