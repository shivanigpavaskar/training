function validate() {


    var email = document.getElementById("email").value;
    var email = /([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,10})(.[a-z]{2,10})?/;
    var password = document.getElementById("password");


    if (email == "")
     {
        alert("Enter the email id");
        return false;
    }
    else if (email.test(email) == false) {
        alert("Please enter valid Email Id");
        return false;

    }
    else if (password == "") {
        alert("ENTER PASSWORD");
        return false;
    }
    else if ((password.trim().length < 6) ||
        (password.trim().length > 10)) {
        alert("Password size must be 6 to 8 characteristics");
        return false;
    }
    else if (password.search(/[A-Z]/) == -1) {
        alert("Password must contain atleast one uppercase alphabet");
        return false;
    }
    else if (password.search(/[a-z]/) == -1) {
        alert("Password must contain atleast one lowercase alphabet");
        return false;
    }
    else if (password.search(/[0-9]/) == -1) {
        alert("Password must contain atleast one number");
        return false;
    }
    else if (password.search(/[\!\@\#\$\&\:\<\>\?]/) == -1) {
        alert("Password must contain atleast one special character");
        return false;
    }
    else {
        return true;
    }
}

