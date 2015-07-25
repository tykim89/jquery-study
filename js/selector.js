var myEmail = 'jojoldu@naver.com';
var myPassword = '1234';

$(function(){		// js파일 로딩시 바로 시작시킬 동작들

	$('#btnLogin').click(checkEmailAndPassword);
	$('font').hide();
});


function show(){
	alert('안녕하세요');
}

function showEmail(){
	var email = $('#inputEmail').val();
	var password = $('#inputPassword').val('');
	alert(email);
}

function checkIdAndPw(){

}

function checkEmailAndPassword(){
	
	var cEmail = checkEmail(),
		cPassword = checkPassword(),
		cPasswordConfirm = checkPasswordConfirm();

	if(cEmail && cPassword && cPasswordConfirm){
		alert('로그인!');
	}
}

function checkEmail(){
	var $inputEmail = $('#inputEmail');
//	var $parent = $inputEmail.closest('p');	// ($inputEmail) 부모들 중에 p 태그를 찾는다.
//	var $fontChild = $parent.find('font');	// ($parent) 자식들 중에 font 태그를 찾는다.
	var $fontChild = $inputEmail.closest('p').find('font');	// jQuery는 체이닝 가능

	//inputEmail is false
	if(!$inputEmail.val()){

		$fontChild.show();
		$inputEmail.addClass('empty');
		return false;
	}else{
		$fontChild.hide();
		$inputEmail.removeClass('empty');
	}

	return true;
}

function checkPassword(){
	var $inputPassword = $('#inputPassword');
	var $parent = $inputPassword.closest('p');
	var $fontChild = $parent.find('font');

	if(!$inputPassword.val()){

		$fontChild.show();
		$inputPassword.addClass('empty');
		return false;
	}else{
		$fontChild.hide();
		$inputPassword.removeClass('empty');
	}

	return true;

}

function checkPasswordConfirm(){
	var $inputPasswordConfirm = $('#inputPasswordConfirm');
	var $fontChild = $inputPasswordConfirm.closest('p').find('font');

	$fontChild.eq(1).show();
}