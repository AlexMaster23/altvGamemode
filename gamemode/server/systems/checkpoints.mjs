import * as alt from 'alt';
import * as chat from 'chat';

console.log("Loaded server->systems->checkpoints.mjs");

//alt.emit('cp:CreateCheckpoint', );
var colshape;
alt.on('cp:createCheckpoint', (player, type, x, y, z, radius, r, g, b, a, nearHeight, farHeight, shortRange, sprite, color, name, colshapeName) => {
    console.log("cp:createCheckpoint triggered!");
    console.log(colshape);
    if(colshape != undefined) return chat.sendError(player, `Ai un checkpoint activ , foloseste [/killcp] pentru al sterge! ${colshape}`);
    colshape = new alt.ColshapeCircle(x, y, radius);
    colshape.name = colshapeName;
    //alt.emitClient(player, 'cp:createCheckpoint', player, type, pos, radius, r, g, b, a, nearHeight, farHeight, shortRange, sprite, color, name);
    alt.emitClient(player, 'cp:createCheckpoint', player, type, x, y, z, radius, r, g, b, a, nearHeight, farHeight, shortRange, sprite, color, name);
});

alt.on('cp:deleteCheckpoint', (player) => {
    console.log("cp:deleteCheckpoint triggered!");
    try {
        console.log(colshape);
        if(colshape == null || colshape == undefined) return chat.sendError(player, `Nu ai un checkpoint activ!`);
        //colshape = undefined;
        colshape.destroy();
        colshape = undefined;
        alt.emitClient(player, 'cp:destroyCheckpoint');
        //chat.sendInfo(player, `Ai sters cu success checkpoint-ul`);
    }
    catch(err)
    {
        console.log("Error: " + err);
    }
});