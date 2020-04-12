import * as alt from 'alt';
import * as native from 'natives';
let url = "http://resource/client/html/speedo/index.html";
let webview;
let speedoShown = false;
let playerVehicle = false;

alt.everyTick(() => {
    if(!playerVehicle) return;
    if(!webview) return;
       
    //var speed = playerVehicle.speed;
       var speed = native.getEntitySpeed(playerVehicle.scriptID);
       var kmh = (speed * 3.6).toFixed(0);
       webview.emit('updateSpeed', kmh);
});


alt.onServer('speedo:playerEnterVehicle', (vehicle, seat) => {
    playerVehicle = vehicle;
    if(seat == 1)
    {
        if(!speedoShown)
        {
            webview = new alt.WebView(url);
            speedoShown = true;
            alt.log("Speedo Shown");
        }
    }
});

alt.onServer("speedo:playerLeftVehicle", (seat) => {
    playerVehicle = false;
    if (seat == 1) { //driver
        if (speedoShown) {
            webview.destroy();
            speedoShown = false;
        }
    }
});

alt.onServer("speedo:playerChangedVehicleSeat", (vehicle, seat) => {
    playerVehicle = vehicle;
    if (seat == 1) { //driver
        if (!speedoShown) {
            webview = new alt.WebView(url);
            speedoShown = true;
        }
    }
    else 
    {
        webview.destroy();
        speedoShown = false;
    }
});