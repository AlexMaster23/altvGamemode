import * as alt from 'alt';
import * as native from 'natives';
let blip; 
alt.onServer('test:createCheck', (pos, color, sprite, description) => {
    nativeBlip(pos, sprite, color, description);
});
alt.onServer('test:destroyCheck', () => {
    native.removeBlip(blip);
});
function nativeBlip(pos, sprite, color, description) {
    if (sprite === 1) {
        sprite = 570;
    }

    // lul

    blip = native.addBlipForCoord(pos.x, pos.y, pos.z);
    native.setBlipSprite(blip, sprite);
    native.setBlipColour(blip, color);
    native.setBlipNameToPlayerName(blip, description);
    native.setBlipRoute(blip, true);
    native.setBlipRouteColour(blip, color);
    return blip;
}