import express from 'express';
import { generateNewContactId ,saveContacts } from '../services.js';
import { query } from '../db.js';
const router = express.Router();
const contactList = [];
router.get('/list', async function (req, res, next) {
    const contactListDb = await query('SELECT * FROM contacts');
    res.json(contactListDb.rows);
});

router.post('/new',async function (req, res, next) {
    // console.log(req.body);
    const { firstName, lastName } = req.body;
    const  id =  await generateNewContactId(contactList);
    const newContact = {
        id: id,
        firstName,
        lastName
    };
    contactList.push(newContact);
    await saveContacts(contactList);
    res.send(`the contact ${firstName} ${lastName} has been created}`);
});

router.put('/:id', async function (req, res, next) {
    const contactListIndex = contactList.findIndex(({ id }) => id === Number(req.params.id));
    const { firstname, lastname } = req.body;
    const contact = contactList[contactListIndex];
    console.log(contactListIndex.length);
    if (contactListIndex) {
        console.log(contactListIndex,contactList);
        console.log(firstname, lastname);
        const updatedContactList = {
            ...contactList[contactListIndex],
            firstname:firstname||contact.firstName,
            lastname:lastname||contact.lastName
        }
        console.log(updatedContactList,3);
    }
    console.log(4);
});
export default router;