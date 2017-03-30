export default [{
	name: 'Home',
	to: '',
}, {
	name: 'About',
	to: 'about',
}, {
	name: 'Instructions',
	to: 'instructions',
}, {
	name: 'Score Keeper',
	to: 'score-keeper',
}, {
	name: 'Smash Up',
	to: 'smash-up',
	description: "Wanna play Smash Up? Use this app to set your players and sets and have it randomly choose your deck combinations.",
	subitems: [{
		name: 'Randomizer',
		to: 'randomizer',
		subitems: [{
			name: 'Select Players',
			to: 'players-selector',
			description: "",
		}, {
			name: 'Filter Decks',
			to: 'factions-filter',
			description: "",
		}, {
			name: 'Configure Ranking',
			to: 'ranking-selector',
			description: "",
		}, {
			name: 'Game Overview',
			to: 'game-overview',
			description: "",
		}],
	}],
}, {
	name: 'Contact',
	to: 'contact',
	description: "Send us a message, support question, press inquiries, or a content submission.",
}, {
	name: 'Unit Tests',
	to: 'tests',
}]
