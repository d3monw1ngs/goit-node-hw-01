const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// TODO: document each function

async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading contacts:', error);
    }
}

async function getContactById(contactId) {
    try {
        const data = await fs.readFile(contactsPath, 'utf8');
        console.log('File data:', data);
        const contacts = JSON.parse(data);
        console.log('Contacts:', contacts);
        const contact = contacts.find(contact => contact.id === contactId);
        console.log('Found contact:', contact);
        return contact;
    } catch (error) {
        console.error('Error getting contact:', error);
        throw error;
    }
}

async function removeContact(contactId) {
    try {
        const contacts = await listContacts();
        console.log('All contacts before removal:', contacts);
        const newContacts = contacts.filter(contact => contact.id !== contactId);
        console.log('Contacts after removal:', newContacts);
        await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
        return newContacts;
    } catch (error) {
        console.error('Error removing contact:', error);
        throw error;
    }
}

async function addContact(name, email, phone) {
    try {
        const contacts = await listContacts();
        const newContact = {
            id: Date.now().toString(),
            name,
            email,
            phone,
        };
        contacts.push(newContact);
        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        return newContact;
    } catch (error) {
        console.error('Error adding contact:', error);
    }
}

// Export functions
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};