# Which Character Are You

Users can create and play their own Which Character Are You quiz.

## Installation and Execution

##### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

##### Prerequisites

Install npm packages -
```
npm install express
npm install socket.io
npm install -g json-server
npm install -g browser-sync
```

##### Running the Application
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

## Technical Details
#### Purpose: Create or play a Which Character Are You? Quiz.
##### I.	Functionality:
* Users can create a quiz by providing quiz title, question and related answers, the possible characters and their descriptions. The user also need to provide the score of each character associated to each question which will help to calculate their score to identify the character.
* Users can also play the quiz created and the existing quizzes.

##### II.	JSON database structure:
*	The db.json consist of an array of quiz objects as “quiz” with following attributes:
1.	“id”: this is used as a unique identifier of a quiz.
2.	“quizname”: It is the title for the quiz.
3.	“characters”: This is an array which consist of the character’s name.
4.	“char_desc”: It is an array which consist of the description for each character.
5.	“qa”: It is an array which hold the entire question and answers of the quiz.
6.	“question”: It is a sub attribute of “qa” which holds the question.
7.	“answers”: It is a sub attribute of “qa” which holds the answer choices to the questions.
8.	“name”: It is a sub attribute of “answers” which holds the choices for questions.
9.	“charscore”: It a sub attribute of “answers” which holds the score for each answer option for a character.


##### IV.	Server Side code:
1.	Browser-Sync server:
*	This server is used to host the home page and quiz creation form.
*	The submit from quiz creation posts a request on json server and stores the quiz in the db.json.
*	The quiz is accessible on http://localhost:3005/[quizid], this url redirects to GET request to express server.
2.	Express server
*	This server listens on port 3005 and is used for hosting the actual quiz. 
*	The quiz is accessible using GET method by quiz id.
*	GET/quizid – gets the quiz id and appends it to the json server url and sends to client using socket io.

3.	Json server

*	We use json server for the backend, json server is listening to port 3002. 
*	In order to access the quiz following url is used http://localhost/3002/quiz/[quizid].
*	POST/quiz – quiz here is the javascript object following the same structure as stored in the db.json. We stringify the quiz object and POST it to json server.
V.	Client side code:
###	Home page
*	When we run browser-sync our website is hosted locally which is designed using HTML and CSS. As part of background clouds are individually defined with the delay and speed with which it must move. 
*	A GIF is added to the start creating div to provide additional effects.
###	Create quiz

When ‘Create Quiz’ button is clicked, it redirects to the page  **add_form.html**.The form in the page is divided into three sections.The first section provides input fields wherein an user can provide questions and answer choices. Once all the questions and answer choices are provided, when the ‘Next’ button is clicked all the data provided in the input text fields are collected as objects with ‘name and value’ pairs using `serializeArray()` method. Then the collected data is saved in browser's **localStorage** using `localStorage.setItem()` method. The code shown below explains the same:

```javascript
var data = $('#questions_form').serializeArray();
     $.each(data,function (i,obj) {
       console.log(i,obj);
       localStorage.setItem(obj.name,obj.value);
     });
```
Once the 'Next' button is clicked, the questions section is hidden and the section section- **Outcomes** is displayed and the user has to provide all the possible outcomes (characters) and their respective descriptions. The same concept is used where all the provided data is saved in **localStorage** using `localStorage.setItem()` method.The same applies to the third section where user has to provide the character scores for each question to map each answer choice.

*Pushing the data from localStorage to db.json file*
After all the user-provided data is stored in the **localStorage**, we created a function `storeDB()`which can be found in the **addQuestion.js** file. This function retrieves the stored data from **localStorage** using `localStorage.getItem()` method. `storeDB()` function creates an object `quiz{}` and adds all the data in the form of attributes and values that is similar to the db.json file format. At last, the `quiz{}`object is added to the `remoteServer`.

###	Quiz form

*	When the user clicks on the quiz url the quiz id is sent as GET method. The GET request is handled by express server, the express server appends the quiz id to json server url and sends back to client using socket.emit().   
```javascript
socket.emit('setquizid', {
quizurl: SERVER_URL
       });
 ```
The above code sends a socket msseage to client java script which is captured in main.js
``` javascript
let myPromise = new Promise((resolve, reject) => {
      socket.on('setquizid', function(data) {
          SERVER_URL = data.quizurl;
          resolve("Success!");
      });
    });
```
The socket message is captured by client by using socket.on() method which is wrapped by promises. On resolving the  promise we use then() method to initiate remote server object with the actual json server url.
```javascript
  myPromise.then((successMessage) => {
var remoteServer = new RemoteServer(SERVER_URL);
 
     });
```
In main.js we have created a handler on formload that will dynamically add dom elements using jquery.
We have written submit handler that accepts the character scores which are mapped to answer choices that are selected by the users. All the individual character scores are added together and which ever array index has maximum score resembles the index of the character from character array. 


## User Manual

  Step1:
- Launch the web page. The webpage will look like the screen shot below.
- This page has the following functionalities
- The Home tab is for the shown main page.
- The About tab routes you to the page where you get to meet our team.
- The Contact tab lets you to provide feed back or send queries to the team.
- The Start Creating! Button  takes you to step2.
- The Play quiz button takes you to step3.

![fig1](https://cloud.githubusercontent.com/assets/25421655/24848263/c26aaec6-1d7a-11e7-85c2-f1445ec48043.gif)
![fig2](https://cloud.githubusercontent.com/assets/25421655/24848260/c268dfe2-1d7a-11e7-9761-62dc1ed12e32.gif)
![fig3](https://cloud.githubusercontent.com/assets/25421655/24848261/c268effa-1d7a-11e7-9d54-d8c7e09e86b9.gif)

Step 2: Create your own quiz.
- Once you click on Start creating! Button the following webpage will be displayed.
- You can enter the quiz title, questions and their respective answer options. You can add any number of questions you want by clicking on Add Questions button.
- Once done with entering with the questions you can click on “Next” button.

![fig4](https://cloud.githubusercontent.com/assets/25421655/24848259/c2685e50-1d7a-11e7-8e5a-daefabd0455b.gif)

- In the below shown webpage you can enter the possible outcomes i.e. the names of the characters and their description.
- You can add more outcomes by clicking on “Add Outcome” button.
- Once done with adding the outcomes you can click on “Next”.

![fig5](https://cloud.githubusercontent.com/assets/25421655/24848264/c27eb1e6-1d7a-11e7-9007-ffb52495af4f.gif)

- In the below webpage, you can add the character score for each option of a question which will uniquely identify a character based on the question provided.
- The format to be used for specifying the score is you assign value 1 to the character if that character has the quality mentioned in the question and value 0 when character does not have that quality.
- For example,In below question: Do you spell magic correctly?
For answer choice, yes: the character score given is 0,0,1 for Harry, Ron, Hermione respectively. Which means only Hermione spell the magic correctly.
For answer choice, no: the character score given is 1,1,0 for Harry, Ron, Hermione respectively. Which means Harry and Ron cannot spell the magic correctly. (It is the reverse of the score of answer choice Yes).

![fig6](https://cloud.githubusercontent.com/assets/25421655/24848266/c285229c-1d7a-11e7-8c89-ca09b77ddb26.gif)

- Once you click on the create quiz button it will create the quiz and store it in database.

![fig7](https://cloud.githubusercontent.com/assets/25421655/24848265/c284750e-1d7a-11e7-9910-98e8fdb2baa9.gif)

Step 3: Playing Quiz
- After you click on Play Quiz! Button the below page will be displayed.
- This page displays the list of all the quizzes available in the database and the one you created.
- You can select any quiz you would like to play.

![fig8](https://cloud.githubusercontent.com/assets/25421655/24848267/c2855f1e-1d7a-11e7-848c-67a69356272e.gif)


- After selecting the quiz below page will be displayed and you can answer the questions. Once you submit the quiz a message with which character you resemble will displayed.

![fig9](https://cloud.githubusercontent.com/assets/25421655/24848268/c2858156-1d7a-11e7-9026-31a1f21febf5.gif)



