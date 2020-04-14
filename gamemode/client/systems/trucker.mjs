import * as alt from 'alt';
import * as native from 'natives';

console.log("Loaded client->systems->trucker.mjs");
let webview;
let url = 'http://resource/client/html/trucker/index.html';

alt.onServer('trucker:ShowTrailerDialog', () => {
    webview = new alt.WebView(url);
    webview.on('trucker:close', close);
    webview.on('trucker:mazeBank', mazeBank);
    webview.on(`trucker:MarfaMag`, MarfaMag);
    webview.on(`trucker:Benzina`, Benzina);
    webview.focus();
    alt.showCursor(true);
});

alt.onServer('trucker:CloseTrailerDialog', () => {
    if(!webview) return;
    webview.destroy();
    alt.showCursor(false);
});
var c1;
var blip1;
alt.onServer('trucker:createDestination', (pos) => {
    c1 = native.createCheckpoint(45, pos.x, pos.y, pos.z, pos.x, pos.y, pos.z, 5, 240, 0, 0, 255, 0);
    native.setCheckpointCylinderHeight(c1, 5, 10, 5);
    blip1 = new alt.PointBlip(
        pos.x, pos.y, pos.z
    );
    blip1.shortRange = false;
    blip1.sprite = 128;
    blip1.color = 6;
    blip1.name = 'Delivery Destination';
});
alt.onServer('trucker:abandon', () => {
    native.deleteCheckpoint(c1);
    blip1.destroy();
});

function close()
{
    if(!webview) return;
    webview.destroy();
    alt.showCursor(false);
}

function mazeBank()
{
    alt.emitServer('trucker:mazeBank');
    close();
}

function MarfaMag()
{
    alt.emitServer('trucker:MarfaMag');
    close();
}

function Benzina()
{
    alt.emitServer('trucker:Benzina');
    close();
}
