`import React, { Component } from 'react'`

info =
	name:
		standard: "Bang! The Dice Game"
		variations: [
			"Bang! The Walking Dead Dice Game"
		]
	players: standard: "3-8"

goal = <ul>
	<li>Renegade: Be the last one alive</li>
	<li>Outlaw: Kill the Sheriff</li>
	<li>Sheriff &amp; Deputies: Kill everyone else.</li>
</ul>

rules = [
	"Sheriff goes first."
	"Bullets are lives and the Sheriff has 2 extra."
	<div>
		Dice are resolved at the end of up to 3 rolls.
		<ul>
			<li>Arrow: Resolve immediately after each roll and after the last arrow is drawn, all arrows subtract from lives.</li>
			<li>Dynamite: Cannot be re-rolled. 3 of these ends your turn immediately, all remaining dice are resolved, and you take 1 damage.</li>
			<li>{1}: Choose a player 1 place away to lose 1 life.</li>
			<li>{2}: Choose a player 2 places away to lose 1 life.</li>
			<li>Beer: Choose a player or yourself to heal 1 life. You cannot gain lives more than your starting total.</li>
			<li>Gatling Gun: 3 of these and you discard all your arrows. Each player other than you loses 1 life.</li>
		</ul>
	</div>
	"On your third roll, you can only choose to re-roll dice that were rolled on your second roll."
]

setup = [
	<span><strong>(OPTIONAL)</strong> Give each player an instruction card.</span>
	<div>
		Stack the role deck
		<ul>
			<li>3 players: 1 Sheriff, 1 Renegade, 1 Outlaw</li>
			<li>4 players: 1 Sheriff, 1 Renegade, 2 Outlaw</li>
			<li>5 players: 1 Sheriff, 1 Renegade, 2 Outlaw, 1 Deputy</li>
			<li>6 players: 1 Sheriff, 1 Renegade, 3 Outlaw, 1 Deputy</li>
			<li>7 players: 1 Sheriff, 1 Renegade, 3 Outlaw, 2 Deputy</li>
			<li>8 players: 1 Sheriff, 2 Renegade, 3 Outlaw, 2 Deputy</li>
		</ul>
	</div>
	"Shuffle both character and role decks separately."
	"Divvy out one character face-up and role face-down to each player."
	"Players look at their role and get lives equal to the bullets on their character."
	"Reveal and give the Sheriff the dice."
]

module.exports =
	info: info
	goal: goal
	rules: rules
	setup: setup
