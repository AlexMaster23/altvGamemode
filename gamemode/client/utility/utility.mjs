import * as alt from 'alt';
import * as native from 'natives';

alt.log("Loaded client->utility->utility.mjs");

alt.onServer('utility:putPlayerInVehicle', (car) => {
    alt.setTimeout(() => { 
        native.setPedIntoVehicle(alt.Player.local.scriptID, car.scriptID, -1); 
    }, 500);
});



//utility:putPlayerInVehicle