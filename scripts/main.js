(function(window) {
    'use strict';
    var socket = io.connect('http://localhost:3000');
    //var SERVER_URL = App.SERVER_URL;
    //SERVER_URL = 'http://localhost:3002/quiz';
    //App.SERVER_URL = SERVER_URL;
    var SERVER_URL  = "";
    let myPromise = new Promise((resolve, reject) => {
      socket.on('setquizid', function(data) {
          SERVER_URL = data.quizurl;
          resolve("Success!");
      });
    });



  myPromise.then((successMessage) => {
    var FORM_SELECTOR = '[data-quiz="form"]';
    var $ = window.jQuery;
    var App = window.App;
    var RemoteServer = App.RemoteServer;
    var remoteServer = new RemoteServer(SERVER_URL);
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);
    var Form = App.Form;
    var form = new Form(FORM_SELECTOR);

     formHandler.onLoadHandler(remoteServer, function(data) {
       form.addQuestions(data);
     });

     formHandler.addSubmitHandler(remoteServer, function(data) {
          console.log(data);
          $('#myModal .modal-title').text('You are ' + data);
          $('#myModal .modal-body').text('Char Desc');
          $('#myModal').modal('show');
      });
    });
})(window);
