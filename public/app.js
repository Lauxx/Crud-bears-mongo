console.log("hello there lois");

$('#addBear').on('click', addBear)


var deleteBear = function(){
	var bear = $(event.target).closest('tr');
	var id = $(event.target).closest('tr').attr('id');
	

	$.ajax({
		url: 'api/bears/' + id,
		method:"DELETE",

	}).done(function(){
		console.log('bear deleted complete')
		bear.remove();
	})
}


var addBear = function(){
	event.preventDefault();

	var name = $('#name').val();
	
	alert("You entered " + name);
}
$('#addBear').on('click', addBear);
$('.deleteBear').on('click', deleteBear);