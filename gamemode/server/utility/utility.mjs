import * as alt from 'alt';

console.log("Loaded server->utility->utility.mjs");

export function loadModelForPlayers(player) {
	alt.Player.all.forEach((target) => {
		alt.emitClient(target, 'updateModel', player.model);
	});
}

export function loadModelsForPlayer(player) {
	alt.Player.all.forEach((target) => {
		alt.emitClient(player, 'updateModel', target.model);
	});
}

export function suicidePlayer(player) {
	alt.Player.all.forEach((target) => {
		alt.emitClient(target, 'suicidePlayer', player);
	});
}