$(function(){		// js파일 로딩시 바로 시작시킬 동작들

//	$('#btnLogin').click(show);

	$('#btnLogin').click(showEmail);
});


function show(){
	alert('안녕하세요');
}

function showEmail(){
	var email = $('#inputEmail').val();
	var password = $('#inputPassword').val('');
	alert(email);
}