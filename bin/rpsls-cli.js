#!/usr/bin/env node

import minimist from 'minimist';

const args = minimist(process.argv.slice(2), {
    alias: {
        r: "rules"
    }
});

import { playRPSLS, helpRPSLS, rulesRPSLS } from "../lib/rpsls.js";

if (args.h || args.help) {
    helpRPSLS();
    process.exit();
} else if (args.r || args.rules) {
    rulesRPSLS();
    process.exit();
} else {
    var playerMove = args._[0];

    if (!playerMove) {
        var result = { "player": "rock" };
        console.log(JSON.stringify(result));
        process.exit();
    }

    playerMove = playerMove.toLowerCase();

    var result = playRPSLS(playerMove);
    
    if (!(typeof result == "undefined")) {
        console.log(JSON.stringify(result));
    }
    process.exit();
}