import path from 'path';
import fs from 'fs/promises';

export const CONTACTS_LIST_FILE_PATH = './data/contactsList.json';

export async function generateNewContactId(contactList) {
    const lastContact = contactList[contactList.length - 1];
    const id = lastContact ? lastContact.id + 1 : 0;
    return id;
}

export async function saveContacts(contactList) {
    try {
        console.log(contactList);
        const contactsListJSON = JSON.stringify(contactList);
        console.log(contactsListJSON);
        await fs.writeFile(CONTACTS_LIST_FILE_PATH, contactsListJSON);

        // await fs.writeFile(path.resolve(CONTACTS_LIST_FILE_PATH), contactsListJSON);
    } catch (error) {
        console.log(error);
        throw error;
    }
}
