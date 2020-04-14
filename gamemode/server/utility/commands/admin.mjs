import * as alt from 'alt';
import * as chat from 'chat';
import * as playerFunc from '../../systems/player.mjs'
import SQL from '../../../../database/database.mjs';
import * as utility from '../utility.mjs';
console.log("Loaded server->utility->commands->admin.mjs");

const db = new SQL();

chat.registerCmd('set',(player, args) => {
    db.selectData('users', ['id', 'username', 'password', 'email', 'adminLevel', 'helperLevel', 'premium', 'premiumPoints', 'creation', 'lastlogin', 'playingtime', 'cash', 'faction', 'arrestTime', 'truckerSkill', 'truckerProgress', 'courierSkill', 'courierProgress', 'fisherSkill', 'fisherProgress','bank','driverlicence','driverhours','level'], data  => {
        var pdata = data.find(info => { return info; });
        if(pdata.adminLevel < 2) return chat.sendError(player, `Nu ai gradul necesar pentru a accesa aceasta comanda!`);
        if(args === undefined || args.length == 0)
        {
            chat.sendError(player, `Usage: /set < level,skin,cash,bank,adminLevel,helperLevel,premium,premiumPoints,playingtime,faction,truckerSkill,courierSkill,fisherSkill > < value >`);
        }
        //CASES
        if(args[0] === 'skin')
        {
            try {
                if(args[1] == null || args[1] == undefined) return chat.sendError(player, `Trebuie sa precizezi un skin!`);
                player.model = args[1];
                utility.loadModelForPlayers(player);
                chat.sendAdmin(player, `Ti-ai setat skinul: ${args[1]}`);
                //Update skin in the database!
                db.updatePartialData(pdata.id, {playermodel: player.model}, 'users', res => { console.log(`saved player skin! ${player.model}`); });
            } catch(err) {
                chat.sendAdmin(player, `Acest skin nu exista ${args[1]}!`);
            }
        }
        else if(args[0] === 'level')
        {
            try 
            {
                if(args[1] == null || args[1] == undefined) return chat.sendError(player, `Syntax: /set level < level >`);
                pdata.level = args[1];
                chat.sendAdmin(player, `Ti-ai setat level: ${args[1]}`);
                db.updatePartialData(pdata.id, {level: args[1]}, 'users', res => {});
            }
            catch 
            {
                chat.sendAdmin(player, `Eroare la setarea de level!`);
            }
        }
    });
});

chat.registerCmd('up', (player) => {
    chat.sendAdmin(player, 'You were slapped.');
    player.pos = {
        x: player.pos.x,
        y: player.pos.y,
        z: player.pos.z + 5
    };
});

chat.registerCmd('veh', (player, arg) => {
    if (arg == undefined || arg.length == 0) {
        chat.sendError(player, 'Usage: /veh (vehicle)');
        return;
    }

    try {
        const tempVeh = new alt.Vehicle(arg[0], player.pos.x, player.pos.y, player.pos.z, 0, 0, 0);
        alt.emitClient(player, 'utility:putPlayerInVehicle', tempVeh);
        tempVeh.setSyncedMeta('engine', false);
    } catch (e) {
        chat.send(player, 'Not a valid vehicle model. Must be a plain name. ie. infernus');
    }
});

chat.registerCmd('tpxyz', (player, args) => {
    if (args.length <= 2) {
        chat.sendError(player, 'Usage: /tpxyz (x, y, z)');
        return;
    }

    player.pos = {
        x: args[0],
        y: args[1],
        z: args[2]
    };
    chat.sendAdmin(player, `You have been teleported to x: ${args[0]} y: ${args[2]} z: ${args[1]}`);
});

chat.registerCmd('pos',(player) => {
    chat.sendAdmin(player, `Your position is x: ${player.pos.x} / y: ${player.pos.y} / z:${player.pos.z}`);
    console.log(`x: ${player.pos.x} / y: ${player.pos.y} / z:${player.pos.z}`)
    console.log(`rotx: ${player.rot.x} / roty: ${player.rot.y} / z: ${player.rot.z}`);
});

chat.registerCmd('addcash',(player, value) => 
{
    if(value <= 0) return;
    playerFunc.addCash(player, value);
});

chat.registerCmd('gotojob',(player, args) => {
    if(args[0] === undefined || args.length == 0)
    {
        chat.sendError(player, `Trebuie sa precizeri un ID pentru job`);
    }
    if(args[0] < 1)
    {
        chat.sendError(player, `ID-urile pentru job sunt de la 1 in sus!`);
    }

    if(args[0] == 1)
    {
        chat.sendInfo(player, `Ai fost teleportat la job-ul Trucker!`);
        player.pos = {
            x: -67,
            y: -2438,
            z:7
        }
    }
    if(args[0] == 2)
    {
        chat.sendInfo(player, `Ai fost teleportat la job-ul Fisher!`);
        player.pos = {
            x: -1845,
            y: -1196, //-1845.085693359375 / y: -1196.21533203125 / z:19.169921875
            z:19
        }
    }
});

chat.registerCmd('ah',(player, args) => 
{
    if(args[0] === undefined || args[0].length === undefined) return chat.sendError(player, "Syntax: /ah < admin level 1-6 >");

    if(args[0] === '1')
    {
        chat.send(player, `Admin 1: /gotojob /tpxyz /veh /up`);   
    }
    if(args[0] === '2')
    {
        chat.send(player, `Admin 2: `);   
    }
    if(args[0] === '3')
    {
        chat.send(player, `Admin 3: `);   
    }
    if(args[0] === '4')
    {
        chat.send(player, `Admin 4: `);   
    }
    if(args[0] === '5')
    {
        chat.send(player, `Admin 5: `);   
    }
    if(args[0] === '6')
    {
        chat.send(player, `Admin 6: /set `);   
    }
    if(args[0] >= '7') return chat.sendError(player, "Syntax: /ah < admin level 1-6 >");
});

chat.registerCmd('sstats',(player) => {
    chat.sendInfo(player, `Player Online:  ${alt.Player.all.length} | Vehicles Spawned: ${alt.Vehicle.all.length}`);
});