import * as alt from 'alt';
import * as native from 'natives';

console.log("Loaded client->login->login.mjs");

let webview;
alt.on('connectionComplete', () => {
    webview = new alt.WebView('http://resource/client/html/login/index.html');
   //webview.on('login:Discord', loginDiscord);
    webview.on('login:RegisterAccount', RegisterAccount);
    webview.on('login:LoginAccount', LoginAccount);
    webview.focus();
    alt.showCursor(true);
});

function LoginAccount(password) {
    alt.emitServer('login:LoginAccount', password);
}

function RegisterAccount(password) {
    alt.emitServer('login:RegisterAccount', password);
}

alt.onServer('login:close', () => {
    if(!webview) return;
    alt.showCursor(false);
    webview.destroy();
});