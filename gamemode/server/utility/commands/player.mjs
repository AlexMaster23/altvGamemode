import * as alt from 'alt';
import * as chat from 'chat';
import SQL from '../../../../database/database.mjs';
import * as utility from '../utility.mjs';
console.log("Loaded server->utility->commands->player.mjs");

const db = new SQL();

chat.registerCmd('stats', (player) => {
    db.selectData('users', ['username', 'password', 'email', 'adminLevel', 'helperLevel', 'premium', 'premiumPoints', 'creation', 'lastlogin', 'playingtime', 'cash', 'faction', 'arrestTime', 'truckerSkill', 'truckerProgress', 'courierSkill', 'courierProgress', 'fisherSkill', 'fisherProgress', 'bank'], data  => {
        const info = data.find(info => {
            return info;
        });
        alt.emitClient(player, 'stats:open');
        alt.emitClient(player, 'stats:update', player.name, info.playingtime, info.cash);
        console.log("stats opened");
    });
});

chat.registerCmd('gps',(player) => {
    chat.sendGPS(player, `Alege unde vrei sa mergi!`);
    alt.emitClient(player, `gps:open`);
});

chat.registerCmd('licences',(player) => {
    db.selectData('users', ['level', 'driverlicence', 'driverhours'], data  => {
        const info = data.find(info => {
            return info;
        });
        var hasdriver = 'Nu';
        if(info.driverlicence == 0)
        {
            hasdriver = 'Nu';
        }
        else if(info.driverlicence == 1)
        {
            hasdriver = 'Da'
        }
        chat.sendInfo(player, `Driver licence: ${hasdriver} (${info.driverhours} ore ramase)`);
        console.log(`Licenta: ${info.driverlicence}`)
    });
});

chat.registerCmd('killcp',(player) => {
    alt.emit('cp:deleteCheckpoint', player);
});