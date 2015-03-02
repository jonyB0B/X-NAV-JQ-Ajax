$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "text.txt",
		success: function(data){
			$("#text").html(data);
		}
	});


$("button").click(function(){
		$.ajax({
			type: "GET",
			url: "text2.txt",
			success: function(data){
				$("#textb").html(data);
			}
		});
	});
});
