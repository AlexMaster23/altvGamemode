import * as alt from 'alt';
import * as native from 'natives';

let webview;
let url = "http://resource/client/html/speedo/index.html";

let speedoShown = false;

let playerVehicle = false;


alt.setInterval(() => {
    if(!playerVehicle) return;
    if (speedoShown) {
        webview.emit('speedo:UpdateSpeed', playerVehicle.speed);
    }
}, 1);
alt.onServer('speedo:playerEnterVehicle', (vehicle, seat) => {
    playerVehicle = vehicle;
    alt.log("speedo:playerentervehicle");
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
    else{
        webview.destroy();
        speedoShown = false;
    }
});