const info = {
	name: {
			standard: "Munchkin",
			variations: [
				"Munchkin Adventure Time",
				"Munchkin Marvel",
			]
	},
	players: {
		standard: "3-6"
	},
}

const goal = "Get to level 10 before other players."

const expansions = [
	"Munchkin Adventure Time 2: It's a Dungeon Crawl Expansion Set",
]

const rules = [
	"Kick the Door: Pull the top card off the Door deck. If you find a monster, enter Combat; otherwise take the card unless it's a Curse, then you have the option of Looking for Trouble or Looting the Room.",
	"Look for Trouble: Put down a monster from your hand to enter into Combat.",
	"Loot the Room: Take a card face-down from the Door deck.",
	"Combat: Monsters' health is its level and any abilities. Your power is your level along with any Items, Allies, effects, and the same from a player helping you. Other players may play monsters or items to harm you. After defeating a monster(s)--all of them--each gives you the stated number of treasures and one level unless stated higher.",
	"Wandering Monster: Lets you play a monster from your hand during Combat.",
	"Undead & Demon Monsters: Undead and Demon monsters may be played without a Wandering Monster so long as there is an Undead or Demon monster in Combat respectively.",
	"Ask for Help: You may only receive help from one other player during Combat. Class abilities apply to both you and your helper. Only the main player gains levels so negotiate on treasures or not. When shared with a helping player, Treasures are played face-up.",
	"Curse: Can be played at absolutely any time against anyone. If pulled during Kick the Door, suffer the curse.",
	"Ally: May be played and replaced at absolutely any time. You may only have one Ally. These add to your power when fighting monsters and can be discarded to Run Away from all monsters. A Helper benefiting from Ally sacrifice is optional.",
	"Equip Item: You can only do this on your turn when not fighting monsters. You must unequip an item you are already wearing on that body part if you equip a new one.",
	"Carry Item: All non-One-Shot items in play are considered carried unless they're equipped.",
	"One-Shot Items: The effect is resolved and then the card is discarded.",
	"Races: You may only have one race at a time. Playing a new race discards the previous one.",
	"Hand: You may have no more than 5 cards at the end of your turn. Hands may be shown to other players.",
	"Charity: If you exceed the hand limit, give extras to the player(s) whom has the lowest level.",
	"Selling Items: You may sell both played and in-hand items for their value. Each 1000 points gives 1 level except the winning level.",
	"Trading: You may only trade items that are out in play face-up.",
	"Run Away: When running away from monsters, you have to roll a 5 or more for each monster or suffer Bad Stuff.",
	"Bad Stuff: You suffer the Bad Stuff when you fail to Run Away from a monster. In a multi-monster fight, this occurs for each monster you fail to run away from.",
	"Death: You only lose your items and cards in hand unless you also want to change characters, then you lose everything else except your level. Other players should Loot the Body. You may not receive anything (incl levels) until you start your next turn with 4 Door and Treasure cards.",
	"Loot the Body: When a player dies, other players from highest to lowest level (roll on ties) takes one card. Everything else is discarded.",
]

const setup = [
	"Shuffle Treasure, Door, and Dungeon cards into separate decks.",
	"Shuffle character sheets then secretly give one to each player under the table.",
	"Each player starts with a character of own gender at level 1.",
	"Flip over a Dungeon and start with that location.",
	"Give each player 4 Treasure and Door cards.",
]

const variants = [
	"No Expansions: Remove all cards with an expansion symbol on their face.",
	"No Dungeons: Don't play with Dungeons.",
	"One Dungeon: Start with one Dungeon and remove all Portal cards.",
]

const faq = [
	"BMO disregards all gender-related effects.",
	"Your Next Combat and Turn curses count for the current Combat and turn respectively.",
	"Curses which apply to more than one item only apply to the victim's chosen item.",
	"Cheat! Cards stay even if you die unless you change character.",
	"You have to reach level 10 through Looking for Trouble unless a card or ability says otherwise.",
	"When fighting multiple monsters, you have to fight them all as one large monster but have to run away from each monster separately. Special abilities on each monster only count for their respective sections of the combined health.",
	"When losing to a monster or monsters, you only suffer the Bad Stuff for each monster you failed to run away from.",
	"If you are running away from multiple monsters and end up dying, you don't have to fight other monsters.",
	"The only way to get rid of cards in play is to discard or trade them. You cannot discard them without a special ability.",
]

module.exports = {
	info: info,
	goal: goal,
	expansions: expansions,
	rules: rules,
	setup: setup,
	variants: variants,
	faq: faq,
}
