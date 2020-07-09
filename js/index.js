$(document).ready(function(){

$(".distInput").keypress(function(event){
	var input = $(this).val();
	var keycode=(event.keycode ? event.keycode : event.which );
	if (keycode == 13){

		var value= $("<span></span>",{
		text:input });
		console.log(value);
		$(this).after(value);
		$(this).hide();

		/*$(this).next().append(value);
	/*	$("<span></span>",{
		text:input
	}).appendTo(".input-group"); */
	/*$(this).next().html(function(input){
		return value;
	})

		
	*/

	};
	
});




});

/*$("<span></span>",{
		text:input
	}).appendTo(); */

	/*$(this).next().html(function(input){
			return " "+input+" " ;
		}); */