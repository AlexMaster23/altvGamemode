import * as alt  from 'alt';
import * as chat from 'chat';

console.log("Loaded server->systems->gps.mjs");


alt.onClient('gps:gotoDMV', gotoDMV);

async function gotoDMV(player)
{
    chat.sendGPS(player, `Ti-am setat ruta catre DMV`);
    alt.emitClient(player, `gps:setCheck`);
}
