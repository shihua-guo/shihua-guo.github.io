
$(document).ready(function(){
	$("#maCleft-bottom-Chlid1").click(function(){
		 allSetConcel();
		 $(this).addClass("on");
		 $("#maCright1").show();
		 });
	$("#maCleft-bottom-Chlid2").click(function(){
		 allSetConcel();
		 $(this).addClass("on");
		 $("#maCright2").show();
		 });
	$("#maCleft-bottom-Chlid3").click(function(){
		 allSetConcel();
		 $(this).addClass("on");
		 $("#maCright3").show();
		 });
	$("#maCleft-bottom-Chlid4").click(function(){
		 allSetConcel();
		 $(this).addClass("on");
		 $("#maCright4").show();
		 });
	});

function allSetConcel(){
	  $("#maCleft-bottom-Chlid1,#maCleft-bottom-Chlid2,#maCleft-bottom-Chlid3,#maCleft-bottom-Chlid4").removeClass("on");
	  $("#maCright1,#maCright2,#maCright3,#maCright4").hide();
	}