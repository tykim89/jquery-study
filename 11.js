$(function(){
	print();
});

var print = function(){
	$('#target').keypress(function(e){
		$('#printArea').text(e.keyVCode);
	});
}