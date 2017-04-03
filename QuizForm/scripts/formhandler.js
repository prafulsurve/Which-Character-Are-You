(function(window){
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    // No need of selector
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

      remoteServer.getQuizName(function (data) {

          $('#quizname').html(data).css({"color": "white", "font-size": "200%", "font-family": "Serif", "font-style": "italic,oblique"});
      });

      // passing 0 to fetch quiz 1
      remoteServer.getQuestion(function(data) {
        fn(data);
      });
    });
  };

  FormHandler.prototype.addResetHandler = function(remoteServer,  fn){
    console.log('In Reset Handler');

  }

  FormHandler.prototype.addSubmitHandler = function(remoteServer, fn) {
      console.log('Setting submit handler for form');
      this.$formElement.on('submit', function(event) {
          event.preventDefault();
          var sum = new Array();
          var data = {};
          var score = new Array();
          $(this).serializeArray().forEach(function(item) {
              (item.value).split(',').forEach(function (num) {
                  score.push(parseInt(num));
              });
              if (sum.length === 0) {
                  for (var i = 0; i < score.length; i++) sum[i] = 0;
              }
              data[item.name] = score;
              sum = sum.map(function (num, idx) {
                  return num + score[idx];
              });
              console.log(item.name + ' is ' + score);
              score = [];
          });

          console.log(data);
          console.log(sum);

          var index = sum.indexOf(Math.max(...sum));
            remoteServer.getCharacters(function(data) {
            fn(data.charname[index], data.chardesc[index]);
          })


      });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
