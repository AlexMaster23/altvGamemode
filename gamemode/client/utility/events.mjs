import * as alt from 'alt';
import * as native from 'natives';

console.log("Loaded client->utility->events.mjs");

alt.onServer('playerConnected', (playerName) => {
    alt.log(`You have been connected to server! Welcome ${playerName}!`);
});

alt.onServer('updateModel', (model) => {
	if (native.hasModelLoaded(native.getHashKey(model)))
		return;

	native.requestModel(native.getHashKey(model));
});