import * as alt from 'alt';
import * as chat from 'chat';
import * as locations from '../systems/locations.mjs';
import {working} from '../systems/job.mjs';
import SQL from '../../../database/database.mjs';

console.log("Loaded server->utility->events.mjs");
const db = new SQL();

// Called on Serverside
alt.on('playerConnect', (player) => {
    chat.sendInfo(player, `Welcome to the server ${player.name},please login or register`);
    alt.emitClient(player, 'playerConnected', player.name);
});

alt.on('playerDisconnect', (player) => {
    console.log(`${player.name} s-a deconectat!`);
});

alt.on('playerDeath', (player) => {
    //chat.sendInfo(player, `Ai murit :(`);
    alt.setTimeout(() => {
        player.spawn(-578, -996, 22, 1000);
    }, 100000);
});

alt.on('entityEnterColshape', (colshape, entity) => {
    db.selectData('users', ['id','job'],data => {
        var stat = data.find(info => {
            return info;
        });
        if (!entity) { return; }
        const isPlayer = entity.constructor.name === 'Player';
        const isVehicle = entity.constructor.name === 'Vehicle';

        if(isPlayer)
        {
            const player = entity;
            if(colshape.name === 'DMV')
            {
                locations.update(true);
                chat.sendInfo(entity, `Bun venit la DMV. Comenzi disponibile [/exam]!`);
                alt.emitClient(entity, 'gps:removeCheck');
            }
            if(colshape.name === 'Trucker')
            {
                chat.sendJob(entity, `Bun venit la job-ul Trucker!`);
                chat.sendJob(entity, `Comenzi disponibile: [/getjob],[/work]`);
                locations.updateTrucker(true);
            }
            if(colshape.name === 'Fisher')
            {
                chat.sendJob(entity, `Bun venit la job-ul Fisher!`);
                chat.sendJob(entity, `Comenzi disponibile: [/getjob],[/work],[/fish]`);
                locations.updateFisher(true);
            }
            if(colshape.name === 'TruckerWork')
            {
                if(stat.job == 1)
                {
                    chat.sendJob(entity, `Pentru a incepe munca scrie /getTruck`);
                    locations.updateTruckerWork(true);
                    alt.emit('cp:deleteCheckpoint', player);
                }
            }
            if(colshape.name === 'FisherFish2')
            {
                if(stat.job == 2)
                {
                    chat.sendJob(entity, `Pentru a incepe munca scrie /fish`);
                    locations.updateFisherFish(true);
                    alt.emit('cp:deleteCheckpoint', player);
                }
            }
            if(colshape.name === 'FisherFish')
            {
                if(stat.job == 2)
                {
                    chat.sendJob(entity, `Pentru a incepe munca scrie /fish`);
                    locations.updateFisherFish(true);
                    
                }
            }
            if(colshape.name === 'sellFish')
            {
                chat.sendInfo(entity, `Comenzi disponibile: [/buy],[/sellfish]`);
                locations.updateSellFish(true);
            }
            if(colshape.name === 'Dealership')
            {
                chat.sendInfo(entity, `Bun venit la DealerShip.`);
                chat.sendInfo(entity, `Comenzi disponibile: [/buycar],[/sellcar]`);
                locations.updateDealership(true);
            }
            if(colshape.name === 'TruckerTrailer')
            {
                if(stat.job == 1)
                {
                    alt.emitClient(entity, 'trucker:ShowTrailerDialog');
                    locations.updateTruckerTrailer(true);
                    alt.emit('cp:deleteCheckpoint', player);
                }
            }
            if(colshape.name === 'MazeBankCol')
            {
                if(working === true)
                {
                    alt.emit('trucker:arriveDestination',player, 'MazeBank');
                    alt.emit('cp:deleteCheckpoint', player);
                }
                else
                {
                    return;
                }
            }
            if(colshape.name === 'CheckpointColshape')
            {
                chat.sendInfo(entity, `Ai ajuns la checkpoint!`);
                alt.emit('cp:deleteCheckpoint', player);
            }
            if(colshape.name === 'GPS Location')
            {
                alt.emit('cp:deleteCheckpoint', player);
            }
        }
    });
});

alt.on('entityLeaveColshape', (colshape, entity) => 
{

    const isPlayer = entity.constructor.name === 'Player';
    const isVehicle = entity.constructor.name === 'Vehicle';
    if(isPlayer)
    {
        if(colshape.name === 'DMV')
        {
            console.log("Leaving DMV Colshape!");
            locations.update(false);
        }
        if(colshape.name === 'Trucker')
        {
            locations.updateTrucker(false);
        }
        if(colshape.name === 'Fisher')
        {
            locations.updateFisher(false);
        }
        if(colshape.name === 'FisherFish' || colshape.name === 'FisherFish2')
        {
            locations.updateFisherFish(false);
        }
        if(colshape.name === 'sellFish')
        {
            locations.updateSellFish(false);
        }
        if(colshape.name === 'Dealership')
        {
            locations.updateDealership(false);
        }
        if(colshape.name === 'TruckerTrailer')
        {
            alt.emitClient(entity, 'trucker:CloseTrailerDialog');
            locations.updateTruckerTrailer(false);
        }
    }

});

alt.on('playerEnteredVehicle', (player, vehicle, seat) => {
    alt.emitClient(player, 'speedo:playerEnterVehicle', vehicle, seat);
    console.log("Player Entered Vehicle (" + seat + ")");
});
  
alt.on('playerLeftVehicle', (player, vehicle, seat) => {
    alt.emitClient(player, 'speedo:playerLeftVehicle', seat);
});

alt.on('playerChangedVehicleSeat', (player, vehicle, oldSeat, newSeat) => {
    alt.emitClient(player, 'speedo:playerChangedVehicleSeat', vehicle, newSeat);
});