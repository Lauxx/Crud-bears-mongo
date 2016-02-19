console.log("hello there lois");




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
	var age = $('#age').val();
	var gender = $('#gender').val();

	var $table = $('#bearTable');

	var bear = {};
	bear.name = name;
	bear.age = age;
	bear.gender = gender;

	$.ajax({
		url: 'api/bears/', 
		method: 'POST',
		data: bear, 
	}).done(function(data){
		console.log('I posted a bear!', data);

		$table.append('<tr id=' + data._id + '>\
			<td>' + data.name + '</td>\
			<td>' + data.age +'</td>\
			<td>' + data.gender +'</td>\
			<td><button class="btn btn-danger deleteBear">Delete</button></td>\
			</tr>'
					);
		$('.deleteBear').on('click', deleteBear);

	});

	$('#name').val('');//clears input fields
	$('#age').val('');
	$('#gender').val('');

}

$('#addBear').on('click', addBear);



