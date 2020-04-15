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
import * as utility from '/client/utility/utility.mjs';
import * as interiors from '/client/utility/interiors.mjs';
import * as carDemolisher from '/client/systems/carDemolisher.mjs';
import * as sandbox from '/client/utility/sandbox.mjs';

//DISABLE CITY AMBIENT SOUNDS
native.startAudioScene("FBI_HEIST_H5_MUTE_AMBIENCE_SCENE"); // Used to stop police sound in town
native.cancelCurrentPoliceReport(); // Used to stop default police radio around/In police vehicle
native.clearAmbientZoneState("AZ_COUNTRYSIDE_PRISON_01_ANNOUNCER_GENERAL", 1, 0); // Turn off prison sound
native.clearAmbientZoneState("AZ_COUNTRYSIDE_PRISON_01_ANNOUNCER_WARNING", 1, 0); // Turn off prison sound
native.clearAmbientZoneState("AZ_COUNTRYSIDE_PRISON_01_ANNOUNCER_ALARM", 1, 0); // Turn off prison sound
native.setAmbientZoneState(0, 0, 0); // Set ambiant sound to 0,0,0
native.clearAmbientZoneState("AZ_DISTANT_SASQUATCH", 0, 0);
native.setAudioFlag("LoadMPData", true);
native.setAudioFlag("DisableFlightMusic", true);
