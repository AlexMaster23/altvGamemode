import * as alt from 'alt';
import SQL from '../../../database/database.mjs';
import * as chat from 'chat';
import * as utility from '../utility/utility.mjs';

console.log("Loaded server->login->login.mjs");

const db = new SQL();
alt.onClient('login:RegisterAccount', RegisterAccount);
alt.onClient('login:LoginAccount', LoginAccount);
var connected = false;
async function LoginAccount(player, passwordd) 
{
    console.log("Login....");
    console.log(`Trying to login in ${player.name} with password: ${passwordd}`);

    db.selectData('users', ['id', 'username', 'password', 'email', 'adminLevel', 'helperLevel', 'premium', 'premiumPoints', 'creation', 'lastlogin', 'playingtime', 'cash', 'faction', 'arrestTime', 'truckerSkill', 'truckerProgress', 'courierSkill', 'courierProgress', 'fisherSkill', 'fisherProgress', 'playermodel'], data => {
        if(data === undefined)
        {
            console.log("Account is not registered, please register first");
            chat.sendInfo(player, `Account is not registered, please register first`);
            return;
        }

        const account = data.find(acc => {
            if(acc.password === passwordd) return acc;
        });

        if(!account)
        {
            console.log("Password is wrong!");
            chat.sendError(player, `Password is wrong , please retry...`);
        }
        else
        {
            completesteps(player, account);

            alt.emitClient(player, 'login:close');
        }
    });
}

async function RegisterAccount(player, passwordd)
{
    console.log("Registering....");

    console.log(`Trying to register an account with username: ${player.name} and password: ${passwordd}`);

    db.selectData('users', ['username', 'password', 'email', 'adminLevel', 'helperLevel', 'premium', 'premiumPoints', 'creation', 'lastlogin', 'playingtime', 'cash', 'faction', 'arrestTime', 'truckerSkill', 'truckerProgress', 'courierSkill', 'courierProgress', 'fisherSkill', 'fisherProgress', 'playermodel'], data  => {
        if(data === undefined) {
                db.upsertData({ 
                    username: player.name, 
                    password: passwordd,
                    email: 'test@gmail.com',
                    adminLevel: 0,
                    helperLevel: 0,
                    premium: 0,
                    premiumPoint: 0,
                    creation: Date.now(),
                    lastlogin: Date.now(),
                    playingtime: 0,
                    cash: 500000,
                    faction: 0,
                    arrestTime: 0,
                    truckerSkill: 1,
                    truckerProgress: 0,
                    courierSkill: 1,
                    courierProgress: 0,
                    fisherSkill: 1,
                    fisherProgress: 0,
                    playermodel: 'a_m_y_skater_01'
                }, 'users', res => {
                    console.log(res);
                });
            return;
        }

        const account = data.find(acc => {
            if(acc.username === player.name) return acc;
        });

        if(!account)
        {
            console.log("Account already registered!");
            chat.sendError(player, `Account already registered!`);
        }
        else{
            console.log(`Successfully registered an account with username: ${player.name} and password: ${passwordd}`);
            chat.sendInfo(player, `You have been successfully registered!`);
            alt.emitClient(player, 'login:close');
            completesteps(player, account);
        }
    });
}

function completesteps(player, account)
{
    if(account.adminLevel >= 1)
    {
        chat.sendInfo(player, `You are Admin Level:  ${account.adminLevel}`);
    }
    if(account.helperLevel >= 1)
    {
        chat.sendInfo(player, `You are Helper Level:  ${account.helperLevel}`);
    }
    if(account.premium == 1)
    {
        chat.sendInfo(player, `You are a premium user`);
    }
    connected = true;
    chat.sendInfo(player, `Welcome back ${player.name}`);
    chat.sendInfo(player, `Your DB ID is: ${account.id}`);
    console.log("admin/helper " + account.adminLevel + "/" + account.helperLevel);
    console.log("Player skin " + account.playermodel);
    player.model = parseInt(account.playermodel);
    utility.loadModelForPlayers(player);
    player.spawn(-578, -996, 22, 1000);
    alt.emitClient(player, 'hud:updateCash', account.cash);
    alt.emitClient(player, 'hud:updateName', player.name);


    //DRAW TEXTS
    alt.emitClient(player, 'dmv:displayText');

    if(connected == true)
    {
        //UPDATE CLOCK
        alt.setTimeout(() => {
            alt.everyTick(() => {
                var ora = new Date();
                alt.emitClient(null, 'hud:updateClock', ora.getHours(), ora.getMinutes());
            });
        }, 1000);
        var date = new Date();
        //alt.emitClient(player, 'hud:updateDate', date.getDay(), date.getMonth(), date.getUTCFullYear());
        alt.emitClient(player, 'hud:updateDate', date.getDate(), date.getMonth(), date.getFullYear());
    }
}

/* 
username
password
email
adminLevel
helperLevel
premium
premiumPoints
creation
lastlogin
playingtime
cash
faction
arrestTime
truckerSkill
truckerProgress
courierSkill
courierProgress
fisherSkill
fisherProgress

*/