(function(window){
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find the matching selector' + selector);
        }
  }
  FormHandler.prototype.onLoadHandler= function(remoteServer, fn){
    console.log('In On Load Handler');
    $(document).ready(function(){
      // passing 0 to fetch quiz 1
      remoteServer.getQuestion(0, function(data) {
        fn(data);
      });
    });

  }

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
