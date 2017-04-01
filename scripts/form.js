(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function Form(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find the matching selector' + selector);
        }
    }

    Form.prototype.addQuestions = function(data) {
        var rowElement = new Row(data);
        this.$element.append(rowElement.$element);
    };

    function Row(data) {
        console.log(data);
        var $div_form_group = $('<div></div>', {
            'data-quiz': 'div',
            'class': 'form-group'
        });

<<<<<<< HEAD


        var $button_groups =$('<div></div>', {
            'class': 'btn-toolbar'
        });
=======
>>>>>>> e74922f320d1ff70c0c554f6568b656e565128b4
        var $submit_button = $('<button></button>', {
            'class' : 'btn btn-primary',
            'id' : 'submit_btn'
        });
<<<<<<< HEAD
        var $reset_button = $('<button></button>', {
            'class' : 'btn btn-primary',
            'id' : 'reset_btn'
        });

        var $back_button = $('<button></button>', {
            'class' : 'btn btn-primary',
            'id' : 'back_btn'
        });


        $submit_button.html('Submit');
        $reset_button.html('Reset');
        $back_button.html('Back');
        $button_groups.append($submit_button, $reset_button,$back_button);
        //$button_groups.append($reset_button);
        //$button_groups.append($back_button);
=======
        $submit_button.html('Submit');
>>>>>>> e74922f320d1ff70c0c554f6568b656e565128b4
        var $label_questions = new Array();
        var $div_radio = new Array(); //2D
        var $label_answers = new Array() //2D
        var $radio = new Array(); //2D

        for (var i = 0; i < data.length; i++) {

            $label_questions[i] = $('<label></label>', {
<<<<<<< HEAD
                'class': 'form-check-label',
                'style': 'font-size : 20px'
                  });
=======
                'class': 'form-check-label'
            });
>>>>>>> e74922f320d1ff70c0c554f6568b656e565128b4
            $label_questions[i].text(data[i].question);
            $div_form_group.append($label_questions[i]);
            //2D def
            $div_radio[i] = new Array();
            $label_answers[i] = new Array();
            $radio[i] = new Array();

            for(var j = 0; j < data[i].answers.length; j++) {

                $div_radio[i][j] = $('<div></div>', {
<<<<<<< HEAD
                    'class': 'radio'
=======
                    'class': 'form-check'
>>>>>>> e74922f320d1ff70c0c554f6568b656e565128b4
                });
                $label_answers[i][j] = $('<label></label>', {
                    'class': 'form-check-label'
                });
                $radio[i][j] = $('<input></input>', {
                  type: 'radio',
                  name: 'answer' + i,
<<<<<<< HEAD
                  'class': 'form-check-input',
                  'style': 'margin:2.5px'
=======
                  'class': 'form-check-input'
>>>>>>> e74922f320d1ff70c0c554f6568b656e565128b4
                });
                $radio[i][j].prop('value',data[i].answers[j].charscore);
                $div_radio[i][j].append($radio[i][j]);
                $label_answers[i][j].text(data[i].answers[j].name);
                $div_radio[i][j].append($label_answers[i][j]);
                $div_form_group.append($div_radio[i][j]);
            }

        }
<<<<<<< HEAD
        $div_form_group.append($button_groups);
=======
        $div_form_group.append($submit_button);
>>>>>>> e74922f320d1ff70c0c554f6568b656e565128b4
        this.$element = $div_form_group;
    }
    App.Form = Form;
    window.App = App;

})(window);
