$(function(){
	print();
});

var print = function(){
	$('#target').keyup(function(){
		$('#printArea').text($('#target').val());
	});
}