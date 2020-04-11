import * as alt from 'alt';
import * as chat from 'chat';
import * as locations from './locations.mjs';
import SQL from '../../../database/database.mjs';
import { truckerTrailer } from './locations.mjs';

console.log("Loaded server->systems->job.mjs");
const db = new SQL();

//playerstats
var checkpointActive = false;
export var working = false;
var jobTruck;
var Trailer;
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

chat.registerCmd('getjob',(player) => {
    db.selectData('users', ['id', 'username', 'job'], data  => {
        var info = data.find(dbinfo => {
            return dbinfo;
        });
        if(locations.truckerGetJob == true)
        {
            if(info.job == 0)
            {
                chat.sendJob(player, `Acum muncesti la job-ul Trucker!`);
                db.updatePartialData(info.id, {job: 1}, 'users', res => {});
            }
            if(info.job == 1)
            {
                return chat.sendError(player, `Ai deja job-ul de Trucker!`);
            }
            if(info.job > 1)
            {
                return chat.sendError(player, `Ai deja un job , trebuie sa dai /quitjob Prima data!`);
            }
        }
    });
});

chat.registerCmd('quitjob',(player) => {
    db.selectData('users', ['id', 'username', 'job'], data  => {
        var info = data.find(dbinfo => {
            return dbinfo;
        });
        if(info.job <= 0)
        {
            return chat.sendError(player, `Nu ai un job!`);
        }
        if(working == true)
        {
            jobTruck.destroy();
            if(Trailer != undefined)
            {
                Trailer.destroy();
            }
            working = false;
        }
        else{
            db.updatePartialData(info.id, {job: 0}, 'users', res => {});
            chat.sendJob(player, `Ai demisionat de la job-ul pe care il aveai!`);
        }
    });
});

chat.registerCmd('work',(player) => {
    db.selectData('users', ['id', 'username', 'job'], data  => {
        var info = data.find(dbinfo => {
            return dbinfo;
        });
        if(working == true) return chat.sendError(player, `Deja lucrezi la un job! Tasteaza [/quitjob] pentru a anula!`);
        if(working == false)
        {
            if(info.job == 1)
            {
                if(locations.truckerWork == false)
                {
                    chat.sendJob(player, `Ti-am pus un checkpoint la locul deunde trebuie sa incepi munca!`);
                    //alt.emitClient(player, 'job:WorkCheckpoint', {x:-31, y:-2412, z:5});
                    alt.emit('cp:createCheckpoint', player, 45, -31, -2412, 5, 5, 240, 0, 0, 255, 4, 8, false, 128, 6, 'Work Place', 'TruckerWork');
                }
                else{
                    chat.sendJob(player, `Esti deja la locul deunde trebuie sa incepi munca!`);
                }
            }
            else
            {
                return;
            }
        } 
    });
});

chat.registerCmd('getTruck',(player) => {
    db.selectData('users', ['id', 'username', 'job'], data  => {
        var info = data.find(dbinfo => {
            return dbinfo;
        });
        if(working == true) return chat.sendError(player, `Deja lucrezi la un job! Tasteaza [/quitjob] pentru a anula!`);
        if(working == false)
        {
            if(info.job == 1)
            {
                if(locations.truckerWork == true)
                {
                    chat.sendJob(player, `Du-te la urmatorul checkpoint pentru a selecta cursa si a primii remorca!`);
                    jobTruck = new alt.Vehicle("phantom", player.pos.x, player.pos.y, player.pos.z, player.rot.x, player.rot.y, player.rot.z);
                    alt.emitClient(player, 'job:SetPlayerInTheCar', jobTruck);

                    alt.setTimeout(() => {
                        alt.emit('cp:createCheckpoint', player, 45, -137, -2417, 5, 5, 240, 0, 0, 255, 4, 8, false, 128, 6, 'Get Trailer', 'TruckerTrailer');
                    }, 1000);
                    working = true;
                }
            }
            else
            {
                return;
            }
        } 
    });
});

chat.registerCmd('test',(player) => {
    alt.emit('cp:createCheckpoint', player, 45, -137, -2417, 5, 5, 240, 0, 0, 255, 4, 8, false, 128, 6, 'Get Trailer', 'TruckerTrailer');
    working = true;
});

//CREATE THINGS FOR JOBS


//-------TRUCKER---------
/*
chat.registerCmd('getTrailer',(player) => {
    if(locations.truckerTrailer == true)
    {
        var Trailer = new alt.Vehicle("tvtrailer", -137, -2408, 5, 0, 0, 2);
        alt.emitClient(player, 'job:attachTrailer', jobTruck, Trailer, 100);
        console.log("Trailer Spawned!");
    }
});

*/
alt.onClient('trucker:mazeBank', (player) => {
    Trailer = new alt.Vehicle("tr4", -137, -2408, 5, 0, 0, 2);
    alt.emitClient(player, 'job:attachTrailer', jobTruck, Trailer, 5);
    alt.emit('cp:createCheckpoint', player, 45, -387, -1875, 20, 5, 240, 0, 0, 255, 4, 8, false, 128, 6, 'Delivery Destination', 'MazeBankCol');
    console.log("Trailer Spawned!");
});

alt.onClient('trucker:chamHills', (player) => {
    var Trailer = new alt.Vehicle("trailers2", -137, -2408, 5, 0, 0, 2);
    alt.emitClient(player, 'job:attachTrailer', jobTruck, Trailer, 100);
    console.log("Trailer Spawned!");
});
alt.onClient('trucker:arriveDestination', (player, name) => {
    var sumaprimita;
    if(name === 'MazeBank')
    {
        db.selectData('users', ['id', 'username', 'cash'], data  => {
            var info = data.find(dbinfo => {
                return dbinfo;
            });
            sumaprimita = randomIntFromInterval(25000, 70000);
            Trailer.destroy();
            //parseInt(info.cash, 10) + parseInt(value, 10);
            chat.sendJob(player, `Ai primit $${sumaprimita} pentru aceasta cursa!`);
            chat.sendJob(player, `Du-te inapoi pentru a alege o alta cursa!`);
            alt.emitClient(player, 'job:truckerTrailerCheck', {x:-137, y:-2417, z:5});
            var bani = parseInt(info.cash, 10) + parseInt(sumaprimita, 10);
            db.updatePartialData(info.id, {cash: bani}, 'users', res => {});
        });
    }
});

/*
var getjobCol = new alt.ColshapeCircle(-66, -2437, 2);
getjobCol.name = "getjobTrucker";


x: -387.9560546875 / y: -1875.3231201171875 / z:20.5179443359375
rotx: 0 / roty: 0 / z: -1.2863215208053589

TRUCKER JOB POSTIONS

//GETJOB
x: -66.96263122558594 / y: -2437.173583984375 / z:7.223388671875
rotx: 0 / roty: 0 / z: -2.4736950397491455

//GET TRUCK
x: -31.450550079345703 / y: -2412.698974609375 / z:5.993408203125
rotx: 0 / roty: 0 / z: 0.692634642124176

//GET REMORCA
x: -137.6835174560547 / y: -2417.076904296875 / z:5.993408203125
rotx: 0 / roty: 0 / z: -2.8694863319396973


//SPAWN REMORCA 
x: -141.6791229248047 / y: -2394.1318359375 / z:5.993408203125

*/
//-------/TRUCKER---------