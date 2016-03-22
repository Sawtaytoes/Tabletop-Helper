info =
	name:
		standard: "Fluxx"
		variations: [
			"Adventure Time Fluxx"
			"Batman Fluxx"
			"Zombie Fluxx"
		]
	players:
		standard: "2-5"
		variations: "2-6"

goal = "Meet all requirements for the current Goal."

rules = [
	"Goals and Rules are in effect immediately when played."
	"Keepers and Creepers sit in front of you when played."
	"Creepers don't count as a Play and allow a redraw so long as the card was a Draw that turn."
	"Depending on the version, Creepers may prevent you from winning unless a Rule or Goal states otherwise."
	"Actions are played, then discarded."
	"Surprises can be played at any time on others' turns, but count as a Play on your own."
	"Surprises can cancel other surprises."
]

setup = [
	"Put Basic Rules in the center of the table."
	"Place deck next to Basic Rules face-down."
	"Each player starts with 3 cards."
	"Start by drawing one, then playing one in that order."
]

faq = [
	"Anyone can join at any time, just deal out 3 cards and that person's in."
	"If you already drew 2 cards on your turn, and you put down a Draw 3, you draw only one more card at the time it's played."
	"If you played 2 cards this turn and change the rules from Play 3 to Play 2, you cannot play anymore cards this turn."
	"On your turn, all cards count as a Play except extras from Actions, Free Actions on rules, and abilities on Keeper and Creepers."
	"You win when you meet the requirements for a goal even for a split second unless that goal is canceled by a surprise."
]

module.exports =
	info: info
	goal: goal
	rules: rules
	setup: setup
	faq: faq
