# Which Character Are You?

This app provides the user to create their own 'Which Character Are You' quiz and they can even play the quiz 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Install npm packages -
```
npm install express
npm install socket.io
npm install -g json-server
```

## Running the Application
Run the project by using following commands -
```
cd QuizForm
node server.js
```
Open another terminal for running the backend and use following command - 
```
json-server --port=3002 --watch db.json
```
Open another terminal and use following commands - 
```
cd HomePage
browser-sync start --server
```
If testing on localhost machine the web server will be up and running on -
```
http://localhost:3000
```
