import * as alt from 'alt';
import * as native from 'natives';

console.log("Loaded client->checkpoints->checkpoints.mjs");

//DMV
let blip;
alt.onServer('gps:setCheck', () => {
    if(blip) return;
    
    blip = new alt.PointBlip(
        240, 
        -1379, 
        33
    );
    blip.shortRange = false;
    blip.sprite = 128;
    blip.color = 5;
    blip.name = 'GPS Destination';
    blip.route = true;
    blip.routeColor = 1;
    nativeBlip({x:240, y:-1379, z:33}, 128, 5, 'GPS Destination');
    alt.log(`Create checkpoint to the destination`);
});
alt.onServer('gps:removeCheck', () => {
    if(!blip) return;
    blip.destroy();
});