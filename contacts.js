import { promises as fs } from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

export const listContacts = async () => {
    try {
        const data = await fs.readFile(contactsPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading contacts:', error.message);
    }
}

export const getContactById = async (contactId) => {
    try {
        const contacts = await listContacts();
        const result = contacts.find((contact) => contact.id === contactId);
        return result || null;
    } catch (error) {
        console.error('Error getting contacts:', error.message);
    }
}

export const removeContact = async (contactId)  => {
    try {
        const contacts = await listContacts();
        const index = contacts.findIndex((item) => item.id === contactId);
        if (index === -1) {
            return null;
        }
        const deletedContact = contacts.splice(index, 1);
        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        return deletedContact;
    } catch (error) {
        console.error('Error removing contact:', error.message);
    }
}

export const addContact = async ({ name, email, phone }) => {
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
        console.error('Error adding contact:', error.message);
    }
}
