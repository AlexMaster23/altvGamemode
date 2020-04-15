import * as alt from 'alt';
import * as native from 'natives';
import * as locations from '/client/locations/locations.mjs';
alt.log('Loaded: client->blips->blips.mjs');

export function createBlip(category, pos, sprite, color, label, display = 2) {
    if (!pos || !category || !sprite) {
        return;
    }

    const blip = native.addBlipForCoord(pos.x, pos.y, pos.z);
    native.setBlipAsShortRange(blip, true);
    native.setBlipSprite(blip, sprite);
    native.setBlipColour(blip, color);
    native.beginTextCommandSetBlipName('STRING');
    native.addTextComponentSubstringPlayerName(label);
    native.endTextCommandSetBlipName(blip);
    native.setBlipDisplay(blip, display);

    return blip;
}

locations.DMV.forEach(dmv => {
    createBlip('dmv', dmv, 315, 2, 'DMV');
});

locations.Trucker.forEach(trucker => {
    createBlip('trucker', trucker, 67, 57, 'Trucker Job');
});

locations.Fisher.forEach(fisher => {
    createBlip('fisher', fisher, 68, 57, 'Fisher Job');
});

locations.sellFish.forEach(sellFish => {
    createBlip('sellFish', sellFish, 59, 69, 'Cumparator Peste');
});

locations.Dealership.forEach(DS => {
    createBlip('Dealership', DS, 225, 1, 'Dealership');
});

locations.CarDemolisher.forEach(CD => {
    createBlip('CarDemolisher', CD, 668, 57, 'Car Demolisher Job');
});