
  // Defining a function to display error message
  function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }

  // Defining a function to validate form
  function validateForm() {
    // Retrieving the values of form elements
    // var file = document.contactForm.file.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var text = document.contactForm.text.value;


    // Defining error variables with a default value
    var fileErr = emailErr = mobileErr = textErr = true;

    // Validate name
    if (file == "") {
      printError("fileErr", "Upload a file");
    } else {
      printError("fileErr", "");
      fileErr = false;
    }

    // Validate email address
    /*if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }*/

    // Validate mobile number
    if (mobile == "") {
      printError("mobileErr", "Please enter your mobile number");
    } else {
      var regex = /^[1-9]\d{9}$/;
      if (regex.test(mobile) === false) {
        printError("mobileErr", "Please enter a valid 10 digit mobile number");
      } else {
        printError("mobileErr", "");
        mobileErr = false;
      }
    }

    if (text == "") {
      printError("textErr", "Write something");
    } else {
      printError("textErr", "");
      textErr = false;
    }

  // Prevent the form from being submitted if there are any errors
  if ((fileErr || emailErr || mobileErr || textErr) == true)
   {
    return false;
   }
};
