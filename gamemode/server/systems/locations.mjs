/*dmv = { x: 240, y:-1379, z: 33 }
spawm = { x: -578, y:-996, z: 22 } //-578, -996, 22,*/
import * as alt from 'alt';
import * as chat from 'chat';
console.log("Loaded server->systems->locations.mjs");

//vars
export var langadmv = false;
export var truckerGetJob = false;
export var truckerWork = false;
export var truckerTrailer = false;
export var fisherFish = false;
export var fisherGetJob = false;
export var sellFish = false;
export var atDealership = false;

export function update(value)
{
    langadmv = value;
}

export function updateTrucker(value)
{
    truckerGetJob = value;
}

export function updateTruckerWork(value)
{
    truckerWork = value;
}

export function updateFisher(value)
{
    fisherGetJob = value;
}

export function updateFisherFish(value)
{
    fisherFish = value;
}

export function updateDealership(value)
{
    atDealership = value;
}

export function updateSellFish(value)
{
    sellFish = value;
}

export function updateTruckerTrailer(value)
{
    truckerTrailer = value;
}

/*
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


*/