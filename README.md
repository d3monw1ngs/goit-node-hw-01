# Node.js CLI Application

This homework is a simple CLI application that allows you to manage contacts using Node.js.

## Command Execution Screenshots

1. **List of All Contacts in table format**
![List Contacts](https://ibb.co/G9zpMC0)

2. **Get Contact by ID**
![Get Contact by ID](https://ibb.co/N3FBt2d)

3. **Add a Contact**
![Add contact](https://ibb.co/pRBrBT4)

4. **Remove a Contact** 
![Remove Contact] (https://ibb.co/dfhwzc8)

## How to Run the Application
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Use the following commands to interact with the application:
    - `node index.js --action list`
    - `node index.js --action get --id <contact-id>`
    - `node index.js --action add --name <name> --email <email> --phone <phone>`
    - `node index.js --action remove --id <contact-id>`