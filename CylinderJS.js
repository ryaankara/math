var rad = 0, height = 0; /* initializing variables to calculate volume */

var func5 = function() {
    $("#myTextArea1").keypress(function (e) {<!-- Adding function for receiving user-inputted value and alerting it back to user-->
        if(e.which == 13) {
            //submit form via ajax, this is not JS but server side scripting so not showing here
            alert("Radius is "+$(this).val());
            rad = $(this).val();
            e.preventDefault();
	    check();
        }
    });
};

var func6 = function() {
    $("#myTextArea2").keypress(function (e) {<!-- Adding function for receiving user-inputted value and alerting it back to user-->
        if(e.which == 13) {
            //submit form via ajax, this is not JS but server side scripting so not showing here
            alert("Height is "+$(this).val());
	    height = $(this).val();
            e.preventDefault();
	    check();
        }
    });
};

var check = function(){/*Adding function for calculating the volume and alerting to the user */
  if (rad != 0 && height != 0)
   alert("The Volume of your Cylinder is approximately " + rad * rad * height * Math.PI);
};