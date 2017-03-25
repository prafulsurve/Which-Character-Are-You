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
        ///rowElement.css();
        this.$element.append(rowElement.$element);
    };

    function Row(questionnaire, answers) {
        // Constructor code will go here
        var $div = $('<div></div>', {
            'quiz-questions': 'label',
            'class': 'label'
        });
        //var $label =
        for (var i = 0; i < questionnaire.length; i++) {
            var $label = $('<label>' + questionnaire[i] + '</label> <br>');
            $div.append($label);
        }
        this.$element = $div;
    }
    App.Form = Form;
    window.App = App;

})(window);
