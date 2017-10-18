var side = 0;

var func1 = function() { <!-- Adding function for receiving user-inputted value and alerting it back to user-->
    $("#myTextArea1").keypress(function (e) {
        if(e.which == 13) {
            //submit form via ajax, this is not JS but server side scripting so not showing here
            alert("Side Length is "+$(this).val());
            side = $(this).val();
            e.preventDefault();
	    check();
        }
    });
}

var check = function(){<!-- Adding function for calculating the volume and alerting to the user-->
  if (side != 0)
   alert("The Volume of your Cube is " + side * side * side);
};