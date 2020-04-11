import * as alt  from 'alt';
import * as chat from 'chat';
console.log("Loaded server->systems->gps.mjs");
alt.onClient('gps:gotoDMV', gotoDMV);
async function gotoDMV(player)
{
    chat.sendGPS(player, `Ti-am setat ruta catre DMV`);
    alt.emit('cp:createCheckpoint', player, 45, 240, -1379, 33, 5, 255, 247, 0, 255, 4, 8, false, 128, 5, 'GPS Location', 'GPS Location');
}
