import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

export const listContacts = async () => {
    try {
        const data = await fs.readFile(contactsPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading contacts:', error);
    }
};

export const getContactById = async (contactId) => {
    try {
        const contacts = await listContacts();
        return contacts.find(contact => contact.id === contactId);
    } catch (error) {
        console.error('Error getting contact:', error);
    }
};

export const removeContact = async (contactId) => {
    try {
        const contacts = await listContacts();
        const newContacts = contacts.filter(contact => contact.id !== contactId)
        await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
        return newContacts;
    } catch (error) {
        console.error('Error removing contact:', error);
    }
};

export const addContact = async (name, email, phone) => {
    try {
        const contacts = await listContacts();
        const newContact = {
            id: nanoid(),
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
};