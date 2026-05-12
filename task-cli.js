const command = process.argv[2];
const argument = process.argv[3];

switch(command)
{
    case 'add':
        console.log("Entry added: "+argument);
        break;

    case 'delete':
        console.log("Entry deleted: "+ argument);
        break;
}