<a id="ancora"></a>

# <center> User and Event Management API </center>

<img src="https://example.com/compassUOL.jpg" alt="Compass Uol" width=900 height=380>

<a id="ancora0"></a>
<a name="Table of Content"></a>

## 🗂️ Table of contents

1. [About the project](#ancora1)
2. [Technologies](#ancora2)
3. [Features](#ancora3)
4. [How to run the project](#ancora4)
5. [API EndPoints](#ancora5)
6. [Authors](#ancora6)

<a id="ancora1"></a>

## 🔎 About the project

Time to design your third challenge of the scholarship program! You must create a CRUD of Users and Events, do proper token authentication of Users, and store the information in a database.

<a id="ancora2"></a>

## 🛠️ Technologies

<font size="15"> <p align="center"> These are the technologies we have used in this project : <h1>

</p>  </font> <br />

<p align="center">
<img src="https://example.com/typescript.png" alt="TypeScript" width=80 height=40/>
<img src="https://example.com/expressJs.png" alt="ExpressJS" width=100 height=35/>
<img src="https://example.com/mongoDB.jpg" alt="MongoDB" width=80 height=35/>
<img src="https://example.com/node.jpg" alt="Node.JS" width=90 height=35/>
<img src="https://example.com/swagger.png" alt="Swagger" width=90 height=35/>
</p>
</br>

<font size="2"> <p align="center"> [TypeScript](https://www.typescriptlang.org/)</font>
<font size="2">- [ExpressJS](https://expressjs.com/)
<font size="2"> - [MongoDB](https://www.mongodb.com/atlas/database)
<font size="2"> - [Node.js](https://nodejs.org/en/)
<font size="2">- [Swagger](https://swagger.io/)

<a id="ancora3"></a>

## ✨ Features

These are some of the main features supported by our API:

### User Management:

- Users can sign up by creating a new account.
- Users can sign in using their credentials.
- API handles validation errors, unauthorized access, and server errors.

### Event Management:

- Users can create an event.
- Users can get a list of events.
- Users can delete events from a specific day of the week.
- Users can get details of a specific event by its ID.
- Users can delete a specific event by its ID.

### [⬆️ Go back to the table of content](#ancora0)

---

<a id="ancora4"></a>

## 🚀 Let's get started!

These are the steps for you to copy and run the project on your local machine:

## 1️⃣ Clone this repository:

     git clone https://github.com/Williansouzh/Challenge-3---Node-AWS

## 2️⃣ Install the dependencies:

       npm install

## 3️⃣ Change the server settings:

- Change the name of the `.env.example` file to `.env`
- Edit the file by updating the variables.
- Optionally, you can use your localhost database! 😉

## 4️⃣ Now, convert your TypeScript files to JavaScript:

    tsc -w

## 5️⃣ To run the project:

    npm run start

## 6️⃣ To run the test suite:

    npm run test

### [⬆️ Go back to the table of content](#ancora0)

---

<a id="ancora5"></a>

## 🔴 API EndPoints

### User Routes

- POST: /user/sign-up ➡️ To create up a new user.
- POST: /user/sign-in ➡️ To sign-in a new user.

### Events Routes

- POST: /events ➡️ To create a new event.
- GET: /events ➡️ To get all events.
- GET: /events:id ➡️ To get a event by id.
- DELETE: /events:id ➡️ To delete a event by id.
- DELETE: /events ➡️ To delete events of a week.

### [⬆️ Go back to the table of content](#ancora0)

---

<a id="ancora6"></a>

## 👨‍💻 Author

- [Willian Souza](https://github.com/Williansouzh)

---

### [⬆️ Go back to the top](#ancora)
