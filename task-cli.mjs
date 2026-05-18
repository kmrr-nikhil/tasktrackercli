#!/usr/bin/env node

import fs from 'fs';
import { Command } from 'commander';

const program = new Command();

const FilePath = 'tasks.json';

function getAlltasks()
{
    const fileExit = fs.existsSync(FilePath);
    if(!fileExit)
    {
        return [];
    }

    const filecontent = fs.readFileSync(FilePath,'utf-8');

    const task= JSON.parse(filecontent);

    return task;
}

function saveTask(file)
{
    const data = JSON.stringify(file);
    fs.writeFileSync(FilePath, data,'utf-8');
}

program
.command('add <task>')
.description('add todo to the list')
.action((task)=>{
    const alltasks = getAlltasks();

    const newtask={
        id: Date.now(),
        todo:task
    };

    alltasks.push(newtask);

    saveTask(alltasks);

    console.log(`Tasks added successfully : ${task}`);
}
);

program
.command('list')
.description('Shows all todo list')
.action(() =>{
 const taskname= getAlltasks();

 for(let i=0;i<taskname.length;i++)
 {
    console.log(taskname[i].todo);
 }
    
});


program.parse(process.argv);

