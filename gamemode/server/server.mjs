import * as alt from 'alt';
import chat from 'chat';
import SQL from '../../database/database.mjs';
import { Users } from './entities/entities.mjs';

console.log("Loaded server.mjs!");
const db = new SQL('mysql', '127.0.0.1', 3306, 'root', 'alex123', 'onerace', [Users]);

alt.on('ConnectionComplete', () => {
    import('./login/login.mjs');
    import('./utility/commands/player.mjs');
    import('./utility/commands/admin.mjs');
    import('./utility/commands/sandbox.mjs');
    import('./utility/events.mjs');
    import('./systems/gps.mjs');
    import('./systems/dmv.mjs');
    import('./systems/locations.mjs');
    import('./utility/spawnveh.mjs');
    import('./systems/player.mjs');
    import('./systems/job.mjs');
    import('./systems/colshapes.mjs');
    import('./systems/checkpoints.mjs');
    console.log("Server Connected to database")
});