import * as alt from 'alt';
import * as native from 'natives';

console.log("Loaded client->systems->dmv.mjs");

alt.onServer('dmv:startExam', (player, checknum) => {
    alt.log("dmv:startExam triggered");
});
var c1;
var c2;
var c3;
var c4;
var c5;
var c6;
var c7;
var c8;
var c9;
var c10;
var c11;
var c12;
var c13;
var c14;
var c15;
var blip1;
var blip2;
var blip3;
var blip4;
var blip5;
var blip6;
var blip7;
var blip8;
var blip9;
var blip10;
var blip11;
var blip12;
var blip13;
var blip14;
var blip15;
alt.onServer('dmv:nextCheck', (player, checknum) => {
    alt.log(`Checkpoint: `+ checknum);
    if(checknum == 0)
    {
        alt.log("Created first checkpoint!");
        
        c1 = native.createCheckpoint(45, 224.39, -1401.29, 29, 225, -1428, 28, 5, 240, 0, 0, 255, 0);
        //native.setCheckpointCylinderHeight(c, 2, 2, 6);
        //native.createCheckpoint(type_number, posX1_number, posY1_number, posZ1_number, posX2_number, posY2_number, posZ2_number, radius_number, red_number, green_number, blue_number, alpha_number, reserved_number);
        native.setCheckpointCylinderHeight(c1, 5, 10, 5);
        blip1 = new alt.PointBlip(
            224.39, 
            -1401.29, 
            30
        );
        blip1.shortRange = false;
        blip1.sprite = 128;
        blip1.color = 6;
        blip1.name = 'Checkpoint';
    }
    if(checknum == 1)
    {
        alt.log("Created second checkpoint!");
        native.deleteCheckpoint(c1);
        blip1.destroy();
        c2 = native.createCheckpoint(45, 225, -1428, 29, 301, -1491, 28, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c2, 5, 10, 5);
        blip2 = new alt.PointBlip(
            225, 
            -1428, 
            28
        );
        blip2.shortRange = false;
        blip2.sprite = 128;
        blip2.color = 6;
        blip2.name = 'Checkpoint';
    }
    if(checknum == 2)
    {
        alt.log("Created third checkpoint!");
        native.deleteCheckpoint(c2);
        blip2.destroy();
        c3 = native.createCheckpoint(45, 301, -1491, 28, 437, -1456, 28, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c3, 5, 10, 5);
        blip3 = new alt.PointBlip(
            301, 
            -1491, 
            28
        );
        blip3.shortRange = false;
        blip3.sprite = 128;
        blip3.color = 6;
        blip3.name = 'Checkpoint';
    }
    if(checknum == 3)
    {
        const coords = {x: 436.58, y: -1457.94, z: 28.19}; //436.58, -1457.94
        alt.log("Created checkpoint 4!");
        native.deleteCheckpoint(c3);
        blip3.destroy();
        c4 = native.createCheckpoint(45, coords.x, coords.y, coords.z, 539, -1406, 28, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c4, 5, 10, 5);
        blip4 = new alt.PointBlip(
            coords.x, 
            coords.y, 
            coords.z
        );
        blip4.shortRange = false;
        blip4.sprite = 128;
        blip4.color = 6;
        blip4.name = 'Checkpoint';
    }
    
    if(checknum == 4)
    {
        const coords = {x: 539, y: -1406, z:28}; //539 -1406 28
        alt.log("Created checkpoint 5!");
        native.deleteCheckpoint(c4);
        blip4.destroy();
        c5 = native.createCheckpoint(45, coords.x, coords.y, coords.z, 518, -1324, 28, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c5, 5, 10, 5);
        blip5 = new alt.PointBlip(
            coords.x, 
            coords.y, 
            coords.z
        );
        blip5.shortRange = false;
        blip5.sprite = 128;
        blip5.color = 6;
        blip5.name = 'Checkpoint';
    }
    if(checknum == 5)
    {
        const coords = {x: 518, y: -1324, z:28}; 
        alt.log("Created checkpoint 6!");
        native.deleteCheckpoint(c5);
        blip5.destroy();
        c6 = native.createCheckpoint(45, coords.x, coords.y, coords.z, 481, -1255, 28, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c6, 5, 10, 5);
        blip6 = new alt.PointBlip(
            coords.x, 
            coords.y, 
            coords.z
        );
        blip6.shortRange = false;
        blip6.sprite = 128;
        blip6.color = 6;
        blip6.name = 'Checkpoint';
    }
    if(checknum == 6)
    {
        const coords = {x: 481, y: -1255, z:28};
        alt.log("Created checkpoint 7!");
        native.deleteCheckpoint(c6);
        blip6.destroy();
        c7 = native.createCheckpoint(45, coords.x, coords.y, coords.z, 385, -1269, 31, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c7, 5, 10, 5);
        blip7 = new alt.PointBlip(
            coords.x, 
            coords.y, 
            coords.z
        );
        blip7.shortRange = false;
        blip7.sprite = 128;
        blip7.color = 6;
        blip7.name = 'Checkpoint';
    }
    if(checknum == 7)
    {
        const coords = {x: 385, y: -1269, z:31};
        alt.log("Created checkpoint 8!");
        native.deleteCheckpoint(c7);
        blip7.destroy();
        c8 = native.createCheckpoint(45, coords.x, coords.y, coords.z, 320, -1307, 31, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c8, 5, 10, 5);
        blip8 = new alt.PointBlip(
            coords.x, 
            coords.y, 
            coords.z
        );
        blip8.shortRange = false;
        blip8.sprite = 128;
        blip8.color = 6;
        blip8.name = 'Checkpoint';
    }
    if(checknum == 8)
    {
        const coords = {x: 320, y: -1307, z:31};
        alt.log("Created checkpoint 9!");
        native.deleteCheckpoint(c8);
        blip8.destroy();
        c9 = native.createCheckpoint(45, coords.x, coords.y, coords.z, 249, -1299, 28, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c9, 5, 10, 5);
        blip9 = new alt.PointBlip(
            coords.x, 
            coords.y, 
            coords.z
        );
        blip9.shortRange = false;
        blip9.sprite = 128;
        blip9.color = 6;
        blip9.name = 'Checkpoint';
    }
    if(checknum == 9)
    {
        const coords = {x: 249, y: -1299, z:28};
        alt.log("Created checkpoint 10!");
        native.deleteCheckpoint(c9);
        blip9.destroy();
        c10 = native.createCheckpoint(45, coords.x, coords.y, coords.z, 185, -1344, 28, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c10, 5, 10, 5);
        blip10 = new alt.PointBlip(
            coords.x, 
            coords.y, 
            coords.z
        );
        blip10.shortRange = false;
        blip10.sprite = 128;
        blip10.color = 6;
        blip10.name = 'Checkpoint';
    }
    if(checknum == 10)
    {
        const coords = {x: 185, y: -1344, z:28};
        alt.log("Created checkpoint 11!");
        native.deleteCheckpoint(c10);
        blip10.destroy();
        c11 = native.createCheckpoint(45, coords.x, coords.y, coords.z, 191, -1421, 28, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c11, 5, 10, 5);
        blip11 = new alt.PointBlip(
            coords.x, 
            coords.y, 
            coords.z
        );
        blip11.shortRange = false;
        blip11.sprite = 128;
        blip11.color = 6;
        blip11.name = 'Checkpoint';
    }
    if(checknum == 11)
    {
        const coords = {x: 191, y: -1421, z:28};
        alt.log("Created checkpoint 12!");
        native.deleteCheckpoint(c11);
        blip11.destroy();
        c12 = native.createCheckpoint(45, coords.x, coords.y, coords.z, 228, -1406, 29, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c12, 5, 10, 5);
        blip12 = new alt.PointBlip(
            coords.x, 
            coords.y, 
            coords.z
        );
        blip12.shortRange = false;
        blip12.sprite = 128;
        blip12.color = 6;
        blip12.name = 'Checkpoint';
    }
    if(checknum == 12)
    {
        const coords = {x: 228, y: -1406, z:29};
        alt.log("Created checkpoint 13!");
        native.deleteCheckpoint(c12);
        blip12.destroy();
        c13 = native.createCheckpoint(45, coords.x, coords.y, coords.z, 264, -1388, 30, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c13, 5, 10, 5);
        blip13 = new alt.PointBlip(
            coords.x, 
            coords.y, 
            coords.z
        );
        blip13.shortRange = false;
        blip13.sprite = 128;
        blip13.color = 6;
        blip13.name = 'Checkpoint';
    }
    if(checknum == 13)
    {
        const coords = {x: 264, y: -1388, z:30};
        alt.log("Created checkpoint 14!");
        native.deleteCheckpoint(c13);
        blip13.destroy();
        c14 = native.createCheckpoint(45, coords.x, coords.y, coords.z, 278, -1351, 31, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c14, 5, 10, 5);
        blip14 = new alt.PointBlip(
            coords.x, 
            coords.y, 
            coords.z
        );
        blip14.shortRange = false;
        blip14.sprite = 128;
        blip14.color = 6;
        blip14.name = 'Checkpoint';
    }
    if(checknum == 14)
    {
        const coords = {x: 278, y: -1351, z:31};
        alt.log("Created checkpoint 14!");
        native.deleteCheckpoint(c14);
        blip14.destroy();
        c15 = native.createCheckpoint(45, coords.x, coords.y, coords.z, 278, -1351, 31, 5, 240, 0, 0, 255, 0);
        native.setCheckpointCylinderHeight(c15, 5, 10, 5);
        blip15 = new alt.PointBlip(
            coords.x, 
            coords.y, 
            coords.z
        );
        blip15.shortRange = false;
        blip15.sprite = 128;
        blip15.color = 6;
        blip15.name = 'Checkpoint';
    }
    if(checknum == 15)
    {
        //const coords = {x: 278, y: -1351, z:31};
        alt.log("Finished the exam");
        native.deleteCheckpoint(c15);
        blip15.destroy();
    }
});