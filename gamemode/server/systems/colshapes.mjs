import * as alt from 'alt';

console.log("Loaded server->systems->colshapes.mjs");

var dmvShape = new alt.ColshapeCylinder(240, -1379, 33, 3, 4);
dmvShape.name = "DMV";
var truckerGetJob = new alt.ColshapeCylinder(-66, -2437, 7, 3, 4);
truckerGetJob.name = "Trucker";
var fisherGetJob = new alt.ColshapeCylinder(-1845, -1196, 19, 3, 4); //-1845.085693359375 / y: -1196.21533203125 / z:19.169921875
fisherGetJob.name = "Fisher";
var fisherFish = new alt.ColshapeCylinder(-1859, -1242, 8, 3, 4); //-1845.085693359375 / y: -1196.21533203125 / z:19.169921875
fisherFish.name = "FisherFish";
var fisherFish = new alt.ColshapeCylinder(-1223, -907, 12, 3, 4);//-1223 -907 12
fisherFish.name = "sellFish";