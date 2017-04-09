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
npm install -g browser-sync
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

## Technical Documentation
This documentation will give you a detailed information about the technical background for Which-Character-Are-You

### Create A Quiz

# User Manual

  Step1:
- Launch the web page. The webpage will look like the screen shot below.
- This page has the following functionalities
- The Home tab is for the shown main page.
- The About tab routes you to the page where you get to meet our team.
- The Contact tab lets you to provide feed back or send queries to the team.
- The Start Creating! Button  takes you to step2.
- The Play quiz button takes you to step3.

![Screenshot] (Fig1.jpg)
![Screenshot] (Fig2.jpg)
![Screenshot] (Fig3.jpg)
Step 2: Create your own quiz.
- Once you click on Start creating! Button the following webpage will be displayed.
- You can enter the quiz title, questions and their respective answer options. You can add any number of questions you want by clicking on Add Questions button.
- Once done with entering with the questions you can click on “Next” button.

![Screenshot] (Fig4.jpg)

- In the below shown webpage you can enter the possible outcomes i.e. the names of the characters and their description.
- You can add more outcomes by clicking on “Add Outcome” button.
- Once done with adding the outcomes you can click on “Next”.

![Screenshot] (Fig5.jpg)

- In the below webpage, you can add the character score for each option of a question which will uniquely identify a character based on the question provided.
- The format to be used for specifying the score is you assign value 1 to the character if that character has the quality mentioned in the question and value 0 when character does not have that quality.
- For example,In below question: Do you spell magic correctly?
For answer choice, yes: the character score given is 0,0,1 for Harry, Ron, Hermione respectively. Which means only Hermione spell the magic correctly.
For answer choice, no: the character score given is 1,1,0 for Harry, Ron, Hermione respectively. Which means Harry and Ron cannot spell the magic correctly. (It is the reverse of the score of answer choice Yes).

![Screenshot] (Fig6.jpg)

- Once you click on the create quiz button it will create the quiz and store it in database.

![Screenshot] (Fig7.jpg)

Step 3: Playing Quiz
- After you click on Play Quiz! Button the below page will be displayed.
- This page displays the list of all the quizzes available in the database and the one you created.
- You can select any quiz you would like to play.

![Screenshot] (Fig8.jpg)


- After selecting the quiz below page will be displayed and you can answer the questions. Once you submit the quiz a message with which character you resemble will displayed.

![Screenshot] (Fig9.jpg)
