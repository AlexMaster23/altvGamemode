import * as alt from 'alt';
import * as native from 'natives';
import { DMV, Trucker } from '/client/locations/locations.mjs';
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

DMV.forEach(dmv => {
    createBlip('dmv', dmv, 315, 2, 'DMV');
});

Trucker.forEach(trucker => {
    createBlip('trucker', trucker, 67, 57, 'Trucker Job');
});

//240, 0, 0, 1 