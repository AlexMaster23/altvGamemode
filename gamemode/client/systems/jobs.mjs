import * as alt from 'alt';
import * as native from 'natives';
alt.log("Loaded client->systems->jobs.mjs");

alt.onServer('job:SetPlayerInTheCar', (car) => {
    alt.setTimeout(() => { 
        native.setPedIntoVehicle(alt.Player.local.scriptID, car.scriptID, -1); 
    }, 500);
});

alt.onServer('job:attachTrailer', (truck, trailer, radius) => {
    alt.setTimeout(() => { 
        native.attachVehicleToTrailer(truck.scriptID, trailer.scriptID, radius);
        alt.log(`Attach trailer to truck!(${truck} / ${trailer} / ${radius})`);
    }, 500);
});