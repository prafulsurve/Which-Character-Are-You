(function(window) {
    'use strict';
    var FORM_SELECTOR = '[quiz-questions="form"]';
    var ROW_SELECTOR = '[data-quiz-question="div"]';
    var SERVER_URL = 'http://localhost:3002/quiz';
    var App = window.App;
    var RemoteServer = App.RemoteServer;
    var remoteServer = new RemoteServer(SERVER_URL);
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);
    var Form = App.Form;
    var form = new Form(ROW_SELECTOR);

     formHandler.onLoadHandler(remoteServer, function(data){
       form.addQuestions(data);
     });
})(window);
