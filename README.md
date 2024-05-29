## Key Learning Points of This Repo

1.  **Created a Basic Web Server**

-  Using Node.js

-  Using Bun (Optional)

2.  **Express.js**

-  **Package Management:**

-  The `npm init` command helps you create a `package.json` file, which manages project dependencies.

-  **Starting the Server:**

-  The `npm run start` command (assuming it's defined in your `package.json`) is a convenient way to kick off your server.

-  **Code Organization:**

-  Express.js offers flexibility in code structure. You can either write everything in a single file (`app.js`) or adopt a modular approach for better organization.

-  **Module Types:**

-  Modern JavaScript projects typically use the `module` type, which provides features like import/export statements for clear dependency management.

-  **Installation:**

-  Add Express.js to your project's dependencies using `npm install express`.

**Boilerplate Code:**

```javascript

import  express  from  "express";

const  app  =  express(); // Create an Express application instance

/* Define port */

const  port  =  3000;

app.get("/", (req, res) =>  {

// Define a route handler for GET requests to "/"

res.send("Hello world!"); // Send the response "Hello world!"

});

app.listen(port, () =>  {

// Start listening for incoming connections

console.log(`Server is running on port ${port}...`);

});

```

**Development with Nodemon**

- During development, when you make changes to your code, you typically need to manually restart the server for those changes to take effect. This can be tedious. To automate this process, we can install `nodemon` as a development dependency using:

`npm install -D nodemon`

- Also add this in your npm

`"dev": "nodemon index.js"`

- there is middleweare configuration in node js that any type of json data will accept it for this there is a configuration

`app.use(express.json())`
