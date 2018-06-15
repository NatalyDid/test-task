function setValidator(id) {
    id.validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            firstname: "required",
            phone: {
                required: true,
                digits: true
            }
        },
        messages: {
            email: {
                required: "This field must be filled",
                email: "The entered data are not correct"
            },
            firstname: "This field must be filled",
            phone: {
                required: "This field must be filled",
                digits: "The entered data are not correct"
            }
        }
    });
}

$(document).ready(function () {
    setValidator($('#access-form'));
});