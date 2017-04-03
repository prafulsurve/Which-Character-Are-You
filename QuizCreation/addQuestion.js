
var q_length = 1;
var counter = 2;
var limit = 5;
var anslen = 2;
localStorage.setItem('q_length',q_length);
//localStorage.setItem('ans_length',2);
function storeDB() {
  var RemoteServer = App.RemoteServer;
  var remoteServer = new RemoteServer('http://localhost:3002/quiz');
    var character = [];
    var char_desc = [];
    var quizName =  localStorage.getItem('quizName');
    var charcount = parseInt(localStorage.getItem('char_count'));
    for (var i = 0; i < charcount; i++) {
        character[i] = localStorage.getItem('char'+(i+1));
        char_desc[i] = localStorage.getItem('char_desc' + (i+1));
    }

    var qa = [];    // qa is quiz array which holds question and answers nad character score

    var qlength = parseInt(localStorage.getItem('q_length'));
    for (var i = 0; i < qlength; i++) { //for loop to iterate through the length of the question
        qa[i] = {
            'question' : localStorage.getItem('qstn' + (i + 1)),
            'answers' : []
        }
        ans_length = parseInt(localStorage.getItem('ans'+(i+1) + '_length'));
        for (var j = 0; j < anslen; j++) {
            qa[i].answers.push({ 'name' : localStorage.getItem('ans' + (i + 1) + '_' + (j + 1)) });
            qa[i].answers[j].charscore = (localStorage.getItem('charscore' + (i + 1) + '_' + (j + 1))).split(",").map(function(x){return parseInt(x)});
        }
    }
    var quiz = {};
    quiz.quizName = quizName;
    quiz.characters = character;
    quiz.char_desc = char_desc;
    quiz.qa = qa;
    remoteServer.add(quiz);
  localStorage.clear();//clearing localStorage after values has been pushed to db.json
}

function addQuestion(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div',{
            'class':'form-group','id':''
          });
          newdiv.innerHTML = " <label for='field"+ counter  +"'> Enter your Question "+counter+"</label>"
          +"<input type='text' class='form-control' id='field"+ counter+"'  "+" name='qstn"+counter+"' value='' placeholder='Enter your question here'><br>"
          +"<div class='form-group form-inline'><input type='text' id='left-input"+ counter + "' name='ans"+ counter+ "_1' class='form-control'placeholder='Answer choice 1' > "
          +"<input type='text' id='middle-input"+counter+"'name='ans"+ counter+ "_2' class='form-control' placeholder='Answer choice 2'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
          q_length=counter-1; //saving number of questions

     }
     console.log('no.of questions:'+q_length);
     localStorage.setItem('q_length',q_length);
     localStorage.setItem('char_count', 3);
}

// add Character start here
function addCharacter(div_name) {
  var counter1 = 4;
  var newoutcome = document.createElement('fieldset');
  newoutcome.innerHTML = "<div class='form-group'><input class='form-control' type='text' name='char" + counter1+"'placeholder='Outcome title'> " +
  "</div> <div class='form-group'> <textarea class='form-control' name='char_desc"+counter1+" ' placeholder='Outcome description'></textarea></div>";
  document.getElementById(div_name).appendChild(newoutcome);
  counter1++;
  localStorage.setItem('char_count', (counter1 - 1));
}

// add character end here
$(document).ready(function () {
  $('#next-btn1').on('click',function () {
    $('.questions').hide('slow');
    $('.outcomes').show('slow');
  });

});

$(document).ready(function () {
  $('#next-btn2').on('click',function () {
    $('.outcomes').hide('slow');
    $('.character_mappings').show('slow');
  });
});


//here

window.onload = function () {
   $('#next-btn1').click(function () {
     var data = $('#questions_form').serializeArray();
     //console.log(data);
     $.each(data,function (i,obj) {
       console.log(i,obj);
       localStorage.setItem(obj.name,obj.value);
     });
   });

   $('#next-btn2').click(function () {
     var data = $('#outcomes_form').serializeArray();
     //console.log(data);
     $.each(data,function (i,obj) {
       console.log(i,obj);
       localStorage.setItem(obj.name,obj.value);
     });
     loadQuestions();
   });

   $('#create_quiz_btn').click(function () {
     var data = $('#char_map').serializeArray();
     //console.log(data);
     $.each(data,function (i,obj) {
       console.log(i,obj);
       localStorage.setItem(obj.name,obj.value);
     });
     storeDB();
     alert("Your Quiz is Created!");
   });

};

// for third section

  function loadQuestions() {

  var $main_div = $('.answers_mappings');
  var qlen = localStorage.getItem('q_length');
  var $wrap_div = [];
  var $lbl = [];
  var $ans_label = [];
  var $text_input = [];
  for (var i = 0; i < qlen ; i++) {
    $wrap_div[i] = $('<div></div>', {
      'class' : 'quest'+(i+1) +' form-group'
    });
    $lbl[i] = $('<label></label>', {
      //for attr
    });
    $lbl[i].text('Question ' + (i+1) + ': ' +localStorage.getItem('qstn' + (i + 1)));
    $wrap_div[i].append($lbl[i]);
    $ans_label[i] = [];
    $text_input[i] = [];
    for (var j = 0; j < 2; j++) {
      $ans_label[i][j] = $('<br><p></p>', {
      });
      $text_input[i][j] = $('<input></input>', {
        'type' : 'text',
        'name' : 'charscore' + (i + 1) + ('_') + (j + 1),
        'class' : 'form-control'
      });
      $ans_label[i][j].text('Character Score for ' + localStorage.getItem('ans' + (i + 1) + '_' + (j + 1)));
      $wrap_div[i].append($ans_label[i][j]);
      $wrap_div[i].append($text_input[i][j]);
    }

    $main_div.append($wrap_div[i]);
  }



  };
