# Node.js CLI Application

This homework is a simple CLI application that allows you to manage contacts using Node.js.

## Command Execution Screenshots

1. **List of All Contacts in table format**
![List Contacts] (<a href="https://ibb.co/G9zpMC0"><img src="https://i.ibb.co/G9zpMC0/ss-action-list.jpg" alt="ss-action-list" border="0"></a>)

2. **Get Contact by ID**
![Get Contact by ID] (<a href="https://ibb.co/N3FBt2d"><img src="https://i.ibb.co/N3FBt2d/ss-action-get.jpg" alt="ss-action-get" border="0"></a>)

3. **Add a Contact**
![Add contact] (<a href="https://ibb.co/pRBrBT4"><img src="https://i.ibb.co/pRBrBT4/ss-action-add.jpg" alt="ss-action-add" border="0"></a>)

4. **Remove a Contact** 
![Remove Contact] (<a href="https://ibb.co/dfhwzc8"><img src="https://i.ibb.co/dfhwzc8/Ss-action-remove.jpg" alt="Ss-action-remove" border="0"></a>)

## How to Run the Application
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Use the following commands to interact with the application:
    - `node index.js --action list`
    - `node index.js --action get --id <contact-id>`
    - `node index.js --action add --name <name> --email <email> --phone <phone>`
    - `node index.js --action remove --id <contact-id>`