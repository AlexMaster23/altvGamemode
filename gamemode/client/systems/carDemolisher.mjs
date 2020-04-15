import * as alt from 'alt';
import * as native from 'natives';

var camera;
let ped;
alt.onServer('cardem:setupJobCinematic', (player) => {
    alt.log("Create jobCinematic camera!");
    camera = native.createCam('DEFAULT_SCRIPTED_CAMERA', false);
    native.setCamCoord(camera, -443, -1669, 22);
    native.setCamFov(camera, 90);
    native.setCamActive(camera, true);
    native.pointCamAtCoord(camera, -441, -1673, 19);
    native.renderScriptCams(true, true, 1000, true, false, false);
    //NPC
    let model = native.getHashKey('a_m_m_farmer_01');
    native.requestModel(model);
    ped = native.createPed(1, model, -441, -1674, 18, 0, false, false);
    native.setBlockingOfNonTemporaryEvents(ped, true);
    native.taskSetBlockingOfNonTemporaryEvents(ped, true);
    native.setEntityInvincible(ped, true);
    native.freezeEntityPosition(ped, true);
    native.setPedFleeAttributes(ped, 15, false);
    alt.log(`${ped} with hash model ${model}`);
    /*
    let npcModel = native.getHashKey('a_m_m_farmer_01');
    native.requestModel(npcModel);

    //Change posX, posY, posZ ...
    let npcID = native.createPed(1, npcModel, posX, posY, posZ, heading, false, false);
    native.setBlockingOfNonTemporaryEvents(npcID, true);
    native.taskSetBlockingOfNonTemporaryEvents(npcID, true);
    native.setEntityInvincible(npcID, true);
    native.setPedFleeAttributes(npcID, 15, false);
    native.freezeEntityPosition(npcID, true);
    */
});

alt.onServer('cardem:removeJobCinematic', (player) => {
    alt.log("Destroyed jobCinematic camera");
    native.destroyAllCams(true);
    native.renderScriptCams(false, false, 0, false, false);
    native.deletePed(ped);
});


/*
x: -443.5780334472656 / y: -1669.134033203125 / z:19.018310546875
rotx: 0 / roty: 0 / z: 2.820012331008911
*/

/*
PASII pentru car dem

/startDemolish -> Seteaza pozitia camerei -> Seteaza pozitia jucatorului -> creeaza actor -> dialog -> sterge camera -> sterge

//CAR DEM ACTOR POS
x: -441.8901062011719 / y: -1673.98681640625 / z:19.018310546875
rotx: 0 / roty: 0 / z: -0.3957912027835846
//CAR DEM PLAYER POS
x: -442.5362548828125 / y: -1672.5098876953125 / z:19.018310546875
rotx: 0 / roty: 0 / z: 2.622116804122925
*/