#!/usr/bin/env node

import chalk from 'chalk';

const command = process.argv[2];
const argument = process.argv[3];

switch(command)
{
    case 'add':
        console.log(chalk.blue("Entry added: "+argument));
        break;

    case 'delete':
        console.log("Entry deleted: "+ argument);
        break;

    default:
        console.log("wrong command");
}