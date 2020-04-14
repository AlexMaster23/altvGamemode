import * as alt from 'alt';
import * as chat from 'chat';
import SQL from '../../../database/database.mjs';
console.log("Loaded server->systems->player.mjs");

const db = new SQL();

//stats
export var working = false;
export var atTruckerJob = false;
export var checkpointActive = false;

//Adauga bani in mana la player
export function addCash(player, value)
{
    db.selectData('users', ['id', 'username', 'cash'], data  => {
        const info = data.find(info => {
            return info;
        });
        //value
        var total = parseInt(info.cash, 10) + parseInt(value, 10);
        console.log("Player Cash: " + parseInt(info.cash, 10) + " +Value: " + parseInt(value, 10) + " Total: "+ total);
        db.updatePartialData(info.id, {cash: total}, 'users', res => {});
        //chat.sendInfo(player, `Ti-au fost adaugati $${total} in mana`);
        alt.emitClient(player, 'hud:updateCash', total);
    });
}
//Adauga bani in banca la player
export function addBank(player, value)
{
    db.selectData('users', ['id', 'username', 'bank'], data  => {
        const info = data.find(info => {
            return info;
        });
        var valoare = info.bank + value;
        //chat.sendInfo(player, `Ti-au fost adaugati $${value} in banca`);
        db.updatePartialData(info.id, {bank: valoare}, 'users', res => {});
    });
}
//Retrage bani din mana la player
export function removeCash(player, value, motiv)
{
    db.selectData('users', ['id', 'username', 'cash'], data  => {
        const info = data.find(info => {
            return info;
        });

        var valoare = info.cash - value;
        //chat.sendInfo(player, `Ti-au fost luati $${value} din mana pe motiv ${motiv}`);
        db.updatePartialData(info.id, {cash: valoare}, 'users', res => {});
        alt.emitClient(player, 'hud:updateCash', valoare);
    });
}
//Retrage bani din banca la player
export function removeBank(player, value)
{
    db.selectData('users', ['id', 'username', 'bank'], data  => {
        const info = data.find(info => {
            return info;
        });

        var valoare = info.cash - value;

        db.updatePartialData(info.id, {bank: valoare}, 'users', res => {});
        //chat.sendInfo(player, `Ti-au fost luati $${value} din banca`);
        alt.emitClient(player, 'hud:updateCash', info.cash);
    });
}
//Seteaza suma detinuta in mana va devenii suma aleasa
export function setCash(player, value)
{
    db.selectData('users', ['id', 'username', 'cash'], data  => {
        const info = data.find(info => {
            return info;
        });

        db.updatePartialData(info.id, {cash: value}, 'users', res => {});
        //chat.sendInfo(player, `Ti-au fost setati $${value} in mana`);
        alt.emitClient(player, 'hud:updateCash', info.cash);
    });
}