const instructions = [{
	name: 'Fluxx',
	link: 'fluxx',
}, {
	name: 'Bang! The Dice Game',
	link: 'bang-the-dice-game',
}, {
	name: 'Munchkin',
	link: 'munchkin',
}]

instructions.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)

export default { instructions }
