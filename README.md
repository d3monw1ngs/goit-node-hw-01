# Node.js CLI Application

This homework is a simple CLI application that allows you to manage contacts using Node.js.

## Command Execution Screenshots

1. **List of All Contacts in table format**
![List Contacts] 
<img src="https://i.ibb.co/BG036Tt/ss-action-list.jpg" alt="ss-action-list" border="0">

2. **Get Contact by ID**
![Get Contact by ID] 
<img src="https://i.ibb.co/591HGhg/ss-action-get.jpg" alt="ss-action-get" border="0">

3. **Add a Contact**
![Add contact] 
<img src="https://i.ibb.co/0FRVRLY/ss-action-add.jpg" alt="ss-action-add" border="0">

4. **Remove a Contact** 
![Remove Contact] 
<img src="https://i.ibb.co/VLKcPNf/Ss-action-remove.jpg" alt="Ss_action-remove" border="0">

## How to Run the Application
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Use the following commands to interact with the application:
    - `node index.js --action list`
    - `node index.js --action get --id <contact-id>`
    - `node index.js --action add --name <name> --email <email> --phone <phone>`
    - `node index.js --action remove --id <contact-id>`