(function(window){
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function QuizDisplayHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find the matching selector' + selector);
        }
  }
  QuizDisplayHandler.prototype.onPlayQuizLoadHandler= function(remoteServer, fn){
    console.log('In On Play Load Handler');
    $(document).ready(function(){
      // passing 0 to fetch quiz 1
      remoteServer.getAll(function(data) {
        fn(data);
      });
    });
  };

  App.QuizDisplayHandler = QuizDisplayHandler;
  window.App = App;
})(window);
