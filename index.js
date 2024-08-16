import { listContacts, getContactById, removeContact, addContact } from './contacts.js';
import { Command } from 'commander';

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "contact id")
  .option("-n, --name <type>", "contact name")
  .option("-e, --email <type>", "contact email")
  .option("-p, --phone <type>", "contact phone");

  program.parse(process.argv);
  const argv = program.opts();

  export const invokeAction = async ({ action, id, name, email, phone }) => {
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
  };

  invokeAction(argv);