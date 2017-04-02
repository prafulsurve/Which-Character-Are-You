(function(window) {
    'use strict';
    var QUIZ_SELECTOR = '[data-quizlist="form"]';
    var SERVER_URL= 'http://localhost:3002/quiz';
    var $ = window.jQuery;
    var App = window.App;
    var RemoteServer = App.RemoteServer;
    var remoteServer = new RemoteServer(SERVER_URL);
    var QuizDisplayHandler = App.QuizDisplayHandler;
    var quizDisplayHandler = new QuizDisplayHandler(QUIZ_SELECTOR);
    var QuizFormDisplay = App.QuizFormDisplay;
    var quizformDisplay= new QuizFormDisplay(QUIZ_SELECTOR);
    quizDisplayHandler.onPlayQuizLoadHandler(remoteServer, function(data){
      quizformDisplay.getQuiz(data, remoteServer);
    });

  })(window);
