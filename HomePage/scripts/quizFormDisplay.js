(function(window){
  'use strict';
  var App = window.App || {};
  var $ = window .jQuery;

  function QuizFormDisplay(selector){
    if(!selector){
      throw new Error('No Selector Provided');
    }
    this.$element= $(selector);
    if(this.$element.length === 0){
      throw new Error('Could not find the matching selector' + selector);
    }
  }

  QuizFormDisplay.prototype.getQuiz = function(quizList, remoteServer) {
      var addElement = new AddQuizList(quizList, remoteServer);
      this.$element.append(addElement.$element);
  };

  function AddQuizList(quizList, remoteServer){
    console.log('In AddQuizList' + quizList);
    var $div_group = $('<div></div>', {
        'data-quizNames': 'div',
        'class': 'form-group'
    });
var $list_quiz = new Array();
var $list_quizurl = new Array();

    for(var i= 0; i< quizList.length; i++){
      var $list_quiz = $ ('<li></li>',{
        'data-filter-text' : 'li',

      });

      $list_quizurl[i] = $('<a href="http://localhost:3005/'+ quizList[i].id+'">'+ quizList[i].quizName+'</a>');
      $list_quiz.append($list_quizurl[i]);
      $div_group.append($list_quiz);
    }
this.$element= $div_group;
  }

  App.QuizFormDisplay = QuizFormDisplay;
  window.App = App;
})(window);
