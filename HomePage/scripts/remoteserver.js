(function(window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteServer(url){
    if (!url) {
            throw new Error('No remote url supplied.');
        }
        this.serverUrl = url;
  }

  RemoteServer.prototype.add = function (val) {

      $.ajax({
          type: "POST",
          url: this.serverUrl,
          data: JSON.stringify(val),
          contentType: "application/json"
      });
  };

  RemoteServer.prototype.getAll = function(cb){

      return $.get(this.serverUrl, function (serverResponse){
        if (cb) {
          console.log(serverResponse);
          cb(serverResponse);
        }
      });
    };

    RemoteServer.prototype.getQuizName = function(cb){
      $.get(this.serverUrl, function(serverResponse){
        var quizList= serverResponse.quizName;
        if(cb){
          cb(quizList);
        }
      });
    };

    RemoteServer.prototype.getQuestion = function(cb) {
      $.get(this.serverUrl, function (serverResponse) {
        var data = serverResponse.qa;
        if(cb) {
            cb(data);
        }
      });
    };

    RemoteServer.prototype.getCharacters = function(cb) {
      $.get(this.serverUrl, function (serverResponse) {
        var data = {
          'charname' : serverResponse.characters,
          'chardesc' : serverResponse.char_desc
        };
        if(cb) {
            cb(data);
        }
      });
    };

App.RemoteServer = RemoteServer;
window.App = App;
})(window);
