import * as alt from 'alt';
import * as native from 'natives';

alt.log('Loaded client.mjs!');

import * as hud from '/client/hud/hud.mjs';
import * as clientEvents from './utility/events.mjs'
import * as login from '/client/login/login.mjs';
import * as stats from '/client/stats/stats.mjs';
import * as blips from '/client/blips/blips.mjs';
import * as gps from '/client/gps/gps.mjs';
import * as checkpoints from '/client/checkpoints/checkpoints.mjs';
import * as dmv from '/client/systems/dmv.mjs';
import * as texts from '/client/utility/texts.mjs';
import * as serverLocations from '/client/systems/serverLocations.mjs';
import * as jobs from '/client/systems/jobs.mjs';
import * as trucker from '/client/systems/trucker.mjs';
import * as checkpointsvdoi from '/client/systems/checkpoints.mjs';
import * as speedo from '/client/speedo/speedo.mjs';