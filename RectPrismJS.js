var length = 0, width = 0, height=0;

var func2 = function() { /* alert function to confirm value with user */
    $("#myTextArea1").keypress(function (e) { /* Adding function for receiving user-inputted value and alerting it back to user */
        if(e.which == 13) {
            //submit form via ajax, this is not JS but server side scripting so not showing here
            alert("Length is "+$(this).val());
            length = $(this).val();
            e.preventDefault();
	    check();
        }
    });
};

var func3 = function() { /* alert function to confirm value with user */
    $("#myTextArea2").keypress(function (e) {/* Adding function for receiving user-inputted value and alerting it back to user */
        if(e.which == 13) {
            //submit form via ajax, this is not JS but server side scripting so not showing here
            alert("Width is "+$(this).val());
	    width = $(this).val();
            e.preventDefault();
	    check();
        }
    });
};

var func4 = function() { /* alert function to confirm value with user */
    $("#myTextArea3").keypress(function (e) { /* Adding function for receiving user-inputted value and alerting it back to user */
        if(e.which == 13) {
            //submit form via ajax, this is not JS but server side scripting so not showing here
            alert("Height is "+$(this).val());
	    height = $(this).val();
            e.preventDefault();
	    check();
        }
    });
};

var check = function(){<!-- Adding function for calculating the volume and alerting to the user-->
  if (length != 0 && width != 0 && height != 0)
   alert("The Volume of your Rectangular Prism is " + length * width * height);
/* alert function to send value of volume to user */
};