import * as alt from 'alt';
import * as native from 'natives';

alt.log("Loaded client->hud->hud.js");

let webview = new alt.WebView("http://resources/gamemode/client/html/hud/index.html");

alt.onServer('hud:updateCash', updateCash);
alt.onServer('hud:updateName', updateName);
alt.onServer('hud:updateClock', updateClock);
alt.onServer('hud:updateDate', updateDate);

function updateClock(hours,minutes)
{
    webview.emit('hud:updateClock', hours,minutes);
}

function updateDate(day,month,year)
{
    webview.emit('hud:updateDate', day,month,year);
}

function updateCash(value)
{
    alt.log(`Updated Cash: $${value}`);
    webview.emit('hud:setCash', value);
}

function updateName(value)
{
    alt.log(`Updated Name: ${value}`);
    webview.emit('hud:setName', `${value}`);
}