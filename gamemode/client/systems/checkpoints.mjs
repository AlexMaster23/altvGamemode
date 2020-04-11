import * as alt from 'alt';
import * as native from 'natives';
var c1;
var blip1;
alt.onServer('cp:createCheckpoint', (player, type, x, y, z, radius, r, g, b, a, nearHeight, farHeight, shortRange, sprite, color, name) => {
    if(c1 && blip1) return alt.log("Ai deja un checkpoint activ!");
    c1 = native.createCheckpoint(type, x, y, z, x, y, z, radius, r, g, b, a, 0);
    native.setCheckpointCylinderHeight(c1, nearHeight, farHeight, radius);
    blip1 = new alt.PointBlip(x, y, z);
    blip1.shortRange = shortRange;
    blip1.sprite = parseInt(sprite);
    blip1.color = parseInt(color);
    blip1.name = name;
    blip1.route  = true;
    blip1.routeColor = parseInt(color);
});

alt.onServer('cp:destroyCheckpoint', () => {
    if(!c1 && !blip1) return;
    alt.log(`Checkpoint destroyed! ${c1} / ${blip1}`);
    blip1.destroy();
    native.deleteCheckpoint(c1);
    c1 = undefined;
    blip1 = undefined;
});