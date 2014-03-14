$(document).ready(
    function() {

		$("#education_drawer").hide();	
	 	$("#career_drawer").hide();
	    $("#contact_drawer").hide();
      
		$("#button_about_me").click(
			function() {
   	  			run("#about_me_drawer");
     		}
  		);	
   		$("#button_education").click(
	   		function() {
	      		run("#education_drawer");
      		}
   		);
   		$("#button_career").click(
	   		function() {
				run("#career_drawer");        	
        	}
   		);
  		$("#button_contact").click(
	  		function() {
	  			run("#contact_drawer");
     		}
   		);	
	}
);


function run(drawer) {
	$(drawer).siblings(":visible").hide("slide", { direction: "left" }, 1000);
   	$(drawer).delay(1000).show("slide", { direction: "left" },	1000);
}
