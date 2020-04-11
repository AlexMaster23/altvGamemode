import * as alt from 'alt';
import * as native from 'natives';
console.log("Loaded client->stats->stats.mjs");
let webview;
let url = 'http://resource/client/html/stats/index.html';

alt.onServer('stats:open', () => {
    webview = new alt.WebView(url);
    webview.on('stats:close', close);
    webview.focus();
    alt.showCursor(true);
    alt.log("Stats trbuie sa se deschida!");
});
function close()
{
    if(!webview) return;
    webview.destroy();
    alt.log("Stats trbuie sa se inchida!");
    alt.showCursor(false);
}
alt.onServer('stats:update', (playername, ph, cash) => {
    alt.log(`stats:update (${playername} / ${ph} / ${cash})`)
    webview.emit('stats:updateName', playername);
    webview.emit('stats:updatePH', ph);
    webview.emit('stats:updateCash', cash);
});