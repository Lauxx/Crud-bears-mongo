console.log("hello there lois");




var deleteBear = function(event){
	event.preventDefault();
	$(event.target).closest('tr').remove();
}
$('.deleteBear').on('click', deleteBear);