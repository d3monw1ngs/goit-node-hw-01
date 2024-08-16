import { listContacts, removeContact, getContactById, addContact } from './contacts';
import { Command } from 'commander';

const program = new Command();

program
    .option('-a, --action <type>', 'choose action')
   l .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allContacts = await listContacts();
            console.table(allContacts);
            break;
        
        case 'get':
            const contact = await getContactById(id);
            console.log(contact);
            break;
    
        case 'add':
            const newContact = await addContact(name, email, phone);
            console.log(newContact);
            break;
        
        case 'remove':
            const updatedContacts = await removeContact(id);
            console.log(updatedContacts);
            break;
        
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv);