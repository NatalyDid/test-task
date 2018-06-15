function setValidator(id) {
    id.validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            firstname: {
                required: true,
                name_pattern: true
            },
            phone: {
                required: true,
                digits: true
            }
        },
        messages: {
            email: {
                required: "This field must be filled",
                email: "The entered data is not correct"
            },
            firstname: {
                required: "This field must be filled",
                name_pattern: "The username must contain only Latin letters"
            },
            phone: {
                required: "This field must be filled",
                digits: "The entered data are is not correct"
            }
        }
    });
}

$(function () {
    $.validator.addMethod("name_pattern", function (value, element) {
        return this.optional(element) || /(?=.*[a-zA-Z])/.test(value);
    });
});

$(document).ready(function () {
    setValidator($('#access-form'));
});