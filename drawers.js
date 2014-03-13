$(document).ready(
	function() {

	   $("#education_drawer").hide();	
		$("#career_drawer").hide();
	   $("#contact_drawer").hide();
      
		$("#button_about_me").click(
			function() {
				$("#about_me_drawer").siblings(":visible").hide("slide", { direction: "left" }, 1000);
   	  		$("#about_me_drawer").delay(1000).show("slide",	{ direction: "left" }, 1000);
     		}
  		);	
   	$("#button_education").click(
	   	function() {
	      	$("#education_drawer").siblings(":visible").hide("slide", { direction: "left" }, 1000);
	      	$("#education_drawer").delay(1000).show("slide", { direction: "left" }, 1000);
      	}
   	);
   	$("#button_career").click(
	   	function() {
        		$("#career_drawer").siblings(":visible").hide("slide", { direction: "left" }, 1000);
        		$("#career_drawer").delay(1000).show("slide", { direction: "left" },	1000);
      	}
   	);
  		$("#button_contact").click(
	  		function() {
	      	$("#contact_drawer").siblings(":visible").hide("slide", { direction: "left" }, 1000);
        		$("#contact_drawer").delay(1000).show("slide", { direction: "left" },	1000);
     		}
   	);	
	}
)
