import * as alt from 'alt';
import * as native from 'natives';
import {DMV,Trucker} from '../locations/locations.mjs';

console.log("Loaded client->utility->texts.mjs");
//            x: -66 y: -2437, z:7
alt.onServer('dmv:displayText', () => {
    console.log("dmv:displayText -> created checkpoints!");
    const truckergetJob = native.createCheckpoint(45, -67, -2438, 4, -67, -2438, 7, 3, 193, 255, 0, 255, 0);
    native.setCheckpointCylinderHeight(truckergetJob, 4, 6, 3);
    //native.setCheckpointCylinderHeight(checkpoint_number, nearHeight_number, farHeight_number, radius_number);
    //native.createCheckpoint(type_number, posX1_number, posY1_number, posZ1_number, posX2_number, posY2_number, posZ2_number, radius_number, red_number, green_number, blue_number, alpha_number, reserved_number);
});
function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;dsa
    return [r, g, b];
}

function drawText3d(msg, posX, posY, posZ, scale, fontType, r, g, b, a, useOutline = true, useDropShadow = true) {
    const entity = alt.Player.local.vehicle ? alt.Player.local.vehicle.scriptID : alt.Player.local.scriptID;
    const vector = native.getEntityVelocity(entity);
    const frameTime = native.getFrameTime();
    native.setDrawOrigin(posX + (vector.x * frameTime), posY + (vector.y * frameTime), posZ + (vector.z * frameTime), 0);
    native.beginTextCommandDisplayText('STRING');
    native.addTextComponentSubstringPlayerName(msg);
    native.setTextFont(fontType);
    native.setTextScale(1, scale);
    native.setTextWrap(0.0, 1.0);
    native.setTextCentre(true);
    native.setTextColour(r, g, b, a);

    if(useOutline) native.setTextOutline();
    if(useDropShadow) native.setTextDropShadow();

    native.endTextCommandDisplayText(0, 0);
    native.clearDrawOrigin();
}

export function drawText2d(
    msg,
    x,
    y,
    scale,
    fontType,
    r,
    g,
    b,
    a,
    useOutline = true,
    useDropShadow = true,
    layer = 0,
    align = 0
) 
{
    let hex = msg.match('{.*}');
    if (hex) {
        const rgb = hexToRgb(hex[0].replace('{', '').replace('}', ''));
        r = rgb[0];
        g = rgb[1];
        b = rgb[2];
        msg = msg.replace(hex[0], '');
    }

    //native.setScriptGfxDrawOrder(layer);
    native.beginTextCommandDisplayText('STRING');
    native.addTextComponentSubstringPlayerName(msg);
    native.setTextFont(fontType);
    native.setTextScale(1, scale);
    native.setTextWrap(0.0, 1.0);
    native.setTextCentre(true);
    native.setTextColour(r, g, b, a);
    native.setTextJustification(align);

    if (useOutline) native.setTextOutline();

    if (useDropShadow) native.setTextDropShadow();

    native.endTextCommandDisplayText(x, y);
}
