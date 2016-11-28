'use strict'

// validation rules 
var nameReg = /^([A-Za-z]{1,})?$/ ;
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ ;
var ignoredEmails = ["interia.pl","google.com","wp.pl"];

var validationRules = {
    firstname: {
        validate: function(v) {
            return v.length > 1 && nameReg.test(v);
        },
        message: "Plase input your name, must be at least 2 characters long"
    },
    lastname: {
        validate: function(v) {
            return v.length > 1 && nameReg.test(v);
        },
        message: "Plase input your last name, must be at least 2 characters long"
    },
    email: {
        validate: function(v) {
            var condition1 = emailReg.test(v);
            var condition2 = !ignoredEmails.includes(v.split("@")[1]);
            return v.length > 1 && condition1 && condition2;
        },
        message: "Plase input a proper e-mail address, excluding google, wp and interia"
    }
}

function validate(e) {
    var valid = true;
    var fields = document.querySelectorAll("#form input");

    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (!validationRules[field.name].validate(field.value)) {
            valid = false;
            field.nextElementSibling.innerHTML = validationRules[field.name].message;
        } else {
          field.nextElementSibling.innerHTML = "";
        }
    }
    
        if (!valid) e.preventDefault();
}


document.querySelector("#form").addEventListener("submit", validate);