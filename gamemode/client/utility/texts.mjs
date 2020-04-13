import * as alt from 'alt';
import * as native from 'natives';
import {DMV,Trucker} from '../locations/locations.mjs';

console.log("Loaded client->utility->texts.mjs");
//            x: -66 y: -2437, z:7
alt.onServer('dmv:displayText', () => {
    console.log("dmv:displayText -> created checkpoints!");
    const truckergetJob = native.createCheckpoint(45, -67, -2438, 4, -67, -2438, 7, 3, 193, 255, 0, 255, 0); //240 -1379 33
    native.setCheckpointCylinderHeight(truckergetJob, 4, 6, 3);
    const dmvCheck = native.createCheckpoint(45, -29, -1105, 26, -29, -1105, 26, 2, 244, 0,0, 255, 0); //-29 -1105 26
    native.setCheckpointCylinderHeight(dmvCheck, 2, 3, 3);
});