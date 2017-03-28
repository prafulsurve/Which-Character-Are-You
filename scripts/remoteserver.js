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

  RemoteServer.prototype.getAll = function(cb){

      return $.get(this.serverUrl, function (serverResponse){
        if (cb) {
          console.log(serverResponse);
          cb(serverResponse);
        }
      });
    };

    RemoteServer.prototype.getQuestion = function(key, cb) {
      $.get(this.serverUrl + '/' + key, function (serverResponse) {
        var data = serverResponse.qa;
        if(cb) {
            cb(data);
        }
      });
    };

    RemoteServer.prototype.getAnswers = function(key, cb) {
      $.get(this.serverUrl + '/' + key, function (serverResponse) {
        var ans = [];
        for (var i = 0; i < serverResponse.qa.length; i++) {
            ans.push(serverResponse.qa[i].answers);
        }
        if(cb) {
            cb(ans);
        }
      });
    };
App.RemoteServer = RemoteServer;
window.App = App;
})(window);
