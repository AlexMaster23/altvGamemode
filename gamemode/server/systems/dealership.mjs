import * as alt from 'alt';
import * as chat from 'chat';
import SQL from '../../../database/database.mjs';
console.log("Loaded server->systems->dealership.mjs");
const db = new SQL();
chat.registerCmd('buycar',(player) => {
    db.selectData('users', ['id', 'level', 'bank'], data  => {
        var info = data.find(dbinfo => {
            return dbinfo;
        });
       if(info.level < 3)
       {
          return chat.sendError(player, `Pentru a cumpara o masina ai nevoie de level 3!`);
       }
       alt.emitClient(player, 'ds:OpenDealership', info.bank);
    });
});











/*

//BUYCAR
x: -29.854944229125977 / y: -1105.134033203125 / z:26.4154052734375
rotx: 0 / roty: 0 / z: -2.5726430416107178

//CAR SHOW POS
x: -40.615386962890625 / y: -1099.6219482421875 / z:25.6739501953125
rotx: 0 / roty: 0 / z: -0.14842170476913452


//CAR SPAWN FOR TEST-DRIVE/BUY
x: -43.81977844238281 / y: -1115.2615966796875 / z:26.88720703125
rotx: 0 / roty: 0 / z: -1.1378997564315796
*/