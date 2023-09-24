
EMAIL
$(document).ready(function() {
	$(".subscribe__form").validate({
	  rules: {
		 email: {
			required: true,
			email: true
		 }
	  },
	  messages: {
		 email: {
			required: "Please enter your email address",
			email: "Please enter a valid email address"
		 }
	  },
	  errorPlacement: function(error, element) {
		 error.insertAfter(element);
		 $(element).addClass(".error"); 
	  },
	  submitHandler: function(form) {
		 alert("Form submitted");
	  }
	});
 });
