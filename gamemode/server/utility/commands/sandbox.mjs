import * as alt from 'alt';
import * as chat from 'chat';

console.log("Loaded server->utility->commands->sandbox.mjs");

chat.registerCmd('hour',(player) => {
    var info = new Date();
    chat.send(player, `Hour: ${info.getHours()} Minute: ${info.getMinutes()} Seconds: ${info.getSeconds()}`);
});

chat.registerCmd('day',(player) => {
    var info = new Date();
    chat.send(player, `Day: ${info.getDate()} Month: ${info.getUTCMonth()} Year: ${info.getUTCFullYear()}`);
});

chat.registerCmd('pula',(player) => {
    //alt.emit('cp:createCheckpoint', player, pos, radius, r, g, b, a, nearHeight, farHeight, shortRange, sprite, color, name);
    alt.emit('cp:createCheckpoint', player, 45, 235, -1390, 30, 5, 240, 0, 0, 255, 4, 8, false, 128, 6, 'Destination', 'CheckpointColshape');
});
