/*
/tpxyz 235 -1390 30
dmv = { x: 240, y:-1379, z: 33 }
spawm = { x: -578, y:-996, z: 22 } //-578, -996, 22,*/
import * as alt from 'alt';
import * as chat from 'chat';
import SQL from '../../../database/database.mjs';
import * as locations from './locations.mjs';
import * as playerFunc from './player.mjs';
console.log("Loaded server->systems->dmv.mjs");
const db = new SQL();

var checkpointID = 0;

chat.registerCmd('exam',(player) => {
    if(locations.langadmv == false) return chat.sendError(player, "Nu esti la DMV!");

    if(locations.langadmv == true)
    {
        db.selectData('users', ['level', 'driverlicence', 'driverhours'], data  => {
            const info = data.find(info => {
                return info;
            });
            console.log(`Licenta: ${info.driverlicence}`);
            if(info.level < 1) return chat.sendError(player, `Nu ai levelul necesar pentru a lua licenta!`);
            if(info.driverlicence == 1) return chat.sendError(player, `Ai deja licenta de condus!`);
            playerFunc.removeCash(player, 250000, 'DMV');
            startExam(player);
        });
    }
});
const vehiclePool = [
    'tailgater',
    'surge',
    'stratum',
    'primo',
    'emperor',
    'asterope',
    'asea',
    'premier',
    'ingot',
    'glendale'
];
let randomVehicle = vehiclePool[Math.floor(Math.random() * vehiclePool.length)];
var tempVeh;
function startExam(player)
{
    console.log("DMV exam started!");
    chat.sendInfo(player, `Du-te la masina pentru a incepe examenul auto!`);
    chat.sendInfo(player, `Urmeaza cercurile rosii pentru a completa examenul`);
    tempVeh = new alt.Vehicle(randomVehicle ,224, -1378, 30, 0, 0, 3.5);
    alt.emitClient(player, 'dmv:startExam', player, checkpointID);
    nextCheckpoint(player);
}
var check1col;
var check2col;
var check3col;
var check4col;
var check5col;
var check6col;
var check7col;
var check8col;
var check9col;
var check10col;
var check11col;
var check12col;
var check13col;
var check14col;
var check15col;

function nextCheckpoint(player)
{
    alt.emitClient(player, 'dmv:nextCheck', player, checkpointID);
    //chat.sendError(player, checkpointID);

    if(checkpointID == 0)
    {
        console.log("Checkpoint1");
        
        check1col = new alt.ColshapeCircle(224, -1401, 4);
        check1col.name = "Checkpoint";
    }
    else if(checkpointID == 1)
    {
        console.log("checkpoint2");
        check1col.destroy();
        check2col = new alt.ColshapeCircle(225, -1428, 4);
        check2col.name = "Checkpoint";
    }
    else if(checkpointID == 2)
    {
        console.log("checkpoint3");
        check2col.destroy();
        check3col = new alt.ColshapeCircle(301, -1491, 4);
        check3col.name = "Checkpoint";
    }
    else if(checkpointID == 3)
    {
        console.log("checkpoint4");
        check3col.destroy();
        check4col = new alt.ColshapeCircle(436.58, -1457.94, 4);
        check4col.name = "Checkpoint";
    }
    
    else if(checkpointID == 4)
    {
        console.log("checkpoint5");
        check4col.destroy();
        check5col = new alt.ColshapeCircle(539, -1406, 4);
        check5col.name = "Checkpoint";
    }
    else if(checkpointID == 5)
    {
        console.log("checkpoint6");
        check5col.destroy();
        check6col = new alt.ColshapeCircle(518, -1324, 4);
        check6col.name = "Checkpoint";
    }
    else if(checkpointID == 6)
    {
        console.log("checkpoint7");
        check6col.destroy();
        check7col = new alt.ColshapeCircle(481, -1255, 4);
        check7col.name = "Checkpoint";
    }
    else if(checkpointID == 7)
    {
        console.log("checkpoint8");
        check7col.destroy();
        check8col = new alt.ColshapeCircle(385, -1269, 4);
        check8col.name = "Checkpoint";
    }
    else if(checkpointID == 8)
    {
        console.log("checkpoint9");
        check8col.destroy();
        check9col = new alt.ColshapeCircle(320, -1307, 4);
        check9col.name = "Checkpoint";
    }
    else if(checkpointID == 9)
    {
        console.log("checkpoint10");
        check9col.destroy();
        check10col = new alt.ColshapeCircle(249, -1299, 4);
        check10col.name = "Checkpoint";
    }
    else if(checkpointID == 10)
    {
        console.log("checkpoint11");
        check10col.destroy();
        check11col = new alt.ColshapeCircle(185, -1344, 4);
        check11col.name = "Checkpoint";
    }
    else if(checkpointID == 11)
    {
        console.log("checkpoint12");
        check11col.destroy();
        check12col = new alt.ColshapeCircle(191, -1421, 4);
        check12col.name = "Checkpoint";
    }
    else if(checkpointID == 12)
    {
        console.log("checkpoint13");
        check12col.destroy();
        check13col = new alt.ColshapeCircle(228, -1406, 4);
        check13col.name = "Checkpoint";
    }
    else if(checkpointID == 13)
    {
        console.log("checkpoint14");
        check13col.destroy();
        check14col = new alt.ColshapeCircle(264, -1388, 4);
        check14col.name = "Checkpoint";
    }
    else if(checkpointID == 14)
    {
        console.log("checkpoint15");
        check14col.destroy();
        check15col = new alt.ColshapeCircle(278, -1351, 4);
        check15col.name = "Checkpoint";
    }
    else if(checkpointID == 15)
    {
        console.log("Finished Exam");
        check15col.destroy();
        finishExam(player);
    }
}

alt.on('entityEnterColshape', (colshape,entity) => {
    if(colshape.name == undefined) return;
    if(colshape.name == 'Checkpoint')
    {
        if(entity.constructor.name == "Player")
        {
            chat.send(entity, `Checkpoint Reached ({00FF48}${checkpointID + 1}{FFFFFF}/15)!`);
            checkpointID = checkpointID + 1;
            //console.log("Checkpoint Reached!");
            nextCheckpoint(entity);
        }
    }
});

function finishExam(player)
{
    chat.sendInfo(player, `Ai terminat examenul auto!`);
    tempVeh.destroy();
    chat.sendInfo(player, `Pentru ca ai terminat examenul auto ai primit licenta auto pentru {00FF48}50{FFFFFF} ore`);
    //set licence
    db.selectData('users', ['id', 'driverlicence','driverhours'], data  => {
        var pdata = data.find(info => { return info; });
        db.updatePartialData(pdata.id, {driverlicence: 1, driverhours: 50}, 'users', res => {});
    });
}