# Recipe Book App

A full-stack web application to help users add, edit, delete, and view their favorite recipes with a clean and user-friendly interface.

# Table of Contents

* Overview
* Features
* Screenshots & Demo
* Tech Stack
* Setup Instructions
* Usage
* Contributing
* License

# Overview

Recipe Book is a CRUD-based web app built with the MERN stack. It allows users to manage their recipes by adding, editing, deleting, and viewing them easily. The app features a modular structure, clean UI, and MongoDB integration for persistent data storage.

# Features

* Add Recipe: Add new recipes with name, ingredients, and preparation steps
* View Recipes: Browse all your saved recipes in one place
* Edit/Delete: Modify or remove recipes with ease
* Responsive UI: Works smoothly on both desktop and mobile
* MongoDB Integration: Recipes are saved securely in a MongoDB database
* Modular Backend: Built using Express and Mongoose for clean structure
* Planned Feature: User authentication and recipe image uploads

# Screenshots 

<img width="2992" height="1622" alt="image" src="https://github.com/user-attachments/assets/cfb70f86-0ab8-4d6d-8c49-d401bb74f576" />
<br>
<img width="1296" height="1616" alt="image" src="https://github.com/user-attachments/assets/299750c5-90f4-40f4-ae22-d2a99160951e" />



# Tech Stack

* Frontend: React.js
* Backend: Node.js, Express.js
* Database: MongoDB
* Languages: JavaScript
* Tools: Axios, Nodemon, Mongoose

# Setup Instructions

* Clone the Repository: <br>
  bash  <br>
  git clone [https://github.com/aishwarya-41/recipe_book.git](https://github.com/aishwarya-41/recipe_book.git)  <br>
  cd recipe_book  <br>

* Install Dependencies:  <br>
  bash  <br>
  cd backend  <br>
  npm install  <br>
  cd ../frontend  <br>
  npm install  <br>

* Configure Environment Variables:  <br>
  Create a `.env` file inside the `backend` folder and add your MongoDB connection string as:  <br>
  MONGO_URI=your_mongodb_connection_string

* Start the App:  <br>
  bash  <br>

* In one terminal <br>
  cd backend  <br>
  npm run dev  <br><br>
* In another terminal <br>
  cd frontend  <br>
  npm run dev  <br>

* The app will be available at:  <br>
  http://localhost:5173 (default)

# Usage

* Open the app in your browser
* Add new recipes using the form
* Edit or delete recipes as needed
* All data will persist in MongoDB

# Contributing

Contributions, suggestions, and bug fixes are welcome! Please open an issue or submit a pull request.

# License

Distributed under the MIT License.


