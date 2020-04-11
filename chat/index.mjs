import alt from 'alt';

let cmdHandlers = {};

function invokeCmd(player, cmd, args) {
  const callback = cmdHandlers[cmd];

  if (callback) {
    callback(player, args);
  } else {
    sendError(player, `Unknown command [{FF2200}/${cmd}{FFFFFF}]`);
  }
}

alt.onClient('chatmessage', (player, msg) => {
  if (msg[0] === '/') {
    msg = msg.trim().slice(1);

    if (msg.length > 0) {
      alt.log('[chat:cmd] ' + player.name + ': /' + msg);

      let args = msg.split(' ');
      let cmd = args.shift();

      invokeCmd(player, cmd, args);
    }
  } else {
    msg = msg.trim();

    if (msg.length > 0) {
      alt.log('[chat:msg] ' + player.name + ': ' + msg);

      alt.emitClient(null, 'chatmessage', player.name, msg.replace(/</g, '&lt;').replace(/'/g, '&#39').replace(/"/g, '&#34'));
    }
  }
});

export function send(player, msg) {
  alt.emitClient(player, 'chatmessage', null, msg);
}

export function sendInfo(player, msg) {
  alt.emitClient(player, 'chatmessage', null, `{FFFFFF}({00FF48}Info{FFFFFF}) ` + msg);
}
export function sendGPS(player, msg) {
  alt.emitClient(player, 'chatmessage', null, `{FFFFFF}({ffc800}GPS{FFFFFF}) ` + msg);
}

export function sendError(player, msg) {
  alt.emitClient(player, 'chatmessage', null, `{FFFFFF}({FF2200}Error{FFFFFF}) ` + msg);
}

export function sendAdmin(player, msg) {
  alt.emitClient(player, 'chatmessage', null, `{FFFFFF}({784000}Admin{FFFFFF}) ` + msg);
}

export function sendJob(player, msg) {
  alt.emitClient(player, 'chatmessage', null, `{FFFFFF}({0087FF}Job{FFFFFF}) ` + msg);
}

export function broadcast(msg) {
  send(null, msg);
}

export function registerCmd(cmd, callback) {
  if (cmdHandlers[cmd] !== undefined) {
    alt.logError(`Failed to register command /${cmd}, already registered`);
  } else {
    cmdHandlers[cmd] = callback;
  }
}

export default { send, broadcast, registerCmd, sendInfo, sendError, sendAdmin };
