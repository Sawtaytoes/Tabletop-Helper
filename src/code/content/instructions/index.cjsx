instructions = [
	name: 'Fluxx'
	link: 'fluxx'
,
	name: 'Bang! The Dice Game'
	link: 'bang-the-dice-game'
,
	name: 'Munchkin'
	link: 'munchkin'
]

module.exports =
	instructions: instructions.sort (a, b) ->
		if a.name > b.name
			1
		else if a.name < b.name
			-1
		else
			0
