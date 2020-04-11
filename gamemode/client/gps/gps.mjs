import * as alt from 'alt';
import * as natives from 'natives';
alt.log('Loaded: client->gps->gps.mjs');

let url = 'http://resource/client/html/gps/index.html';
let webview;

alt.onServer('gps:open', () => {
    webview = new alt.WebView(url);
    webview.on('gps:close', close);
    //webview.on('gps:gotoDMV', )
    webview.on('gps:gotoDMV', gotoDMV);
    webview.focus();
    alt.showCursor(true);
    alt.log("GPS ar trebuii sa se deschida!");
});
function close()
{
    if(!webview) return;
    webview.destroy();
    alt.log("GPS ar trebuii sa se inchida!");
    alt.showCursor(false);
}

function gotoDMV()
{
    alt.emitServer(`gps:gotoDMV`);
    alt.log("gps:gotoDMV triggered");
    close();
}