
$(function(){

	//js 호출시 바로 시작될 영역
	user.init();
});


//DB연동시 삭제
var users = [];
var currentTime = new Date();
users.push({
		email : '1',
		password : '1',
		name : '1',
		job : '1',
		joinDate : currentTime,
		updateDate : currentTime
});
users.push({
		email : '2',
		password : '2',
		name : '2',
		job : '2',
		joinDate : currentTime,
		updateDate : currentTime
});


var user = {

	$el : {},

	init : function(){

		this.$el = $('.container');

		this.$el.find('#btnSignUp').click(function(){
			user.showModal();
		});

		this.$el.find('#btnClose').click(function(){
			user.closeModal();
		});

		this.$el.find('#btnSubmit').click(function(){
			user.signUp();
		});

		this.$el.find('#btnLogin').click(function(){
			user.login();
		});
	},

	showModal : function(){
		this.resetModal();
		this.$el.find('#userModal').modal();
	},

	closeModal : function(){
		this.$el.find('#userModal').modal('hide');
	},

	resetModal : function(){
		this.$el.find('.signForms').val('');
	},

	signUp : function(){
		var email = this.$el.find('#inputEmail').val(),
			password = this.$el.find('#inputPassword').val(),
			passwordConfirm = this.$el.find('#inputPasswordConfirm').val(),
			name = this.$el.find('#inputName').val(),
			job = this.$el.find('#inputJob').val();

		// 1. 입력창에 빈칸은 없는가?
		// 빈칸이 있으면 해당 입력창에 강조효과 (empty 클래스) 추가
		// 
		// 저장, 실패 경고창
		
		if(!this.validate()){
			alert("모든 항목을 입력해주세요");
			return;
		}


		// 2. password와 passwordConfirm이 같은가? 다르면 패스워드 확인 경고창
		if(password !== passwordConfirm){
			alert("같은 패스워드를 입력해주세요");
			return;
		}


		// 3. 이미 등록된 사용자가 아닌가?
		// find 함수는 email 중복되는지 체크하고 같은 이메일이 있다면 true, 없다면 false
		
		this.save({
					email : email,
					password : password,
					name : name,
					job : job,
					joinDate : currentTime,
					updateDate : currentTime
		});
	},

	validate : function(){
		var $signForms = this.$el.find('.signForms'),
			result = true;

		$.each($signForms, function(index, signForm){
			var $signForm = $(signForm);	// jQuery 함수 사용을 위해 $가 필요

			if(!$signForm.val()){
				$signForm.addClass('empty');
				result = false;
			}else{
				$signForm.removeClass('empty');
			}
		});

		return result;
	},

	// DB 연동시 수정
	// 사용안함
	find : function(obj){
		var result;
		var _ = this;

		$.ajax({
			method: 'POST',
			url: 'email',
			data: obj,
			dataType: 'json',
			success: function(data){
				alert(data.status);

				if(!data.status){
					_.save(obj);
					_.closeModal();
				}else{
					alert('이미 가입된 사용자입니다.');
				}
			}

		});
	},
	
	// DB 연동시 수정
	save : function(obj){
		var _ = this;

		$.ajax({
			method : 'POST',
			url : 'user',
			data : obj,
			dataType : 'json',
			success : function(data){

				if(data.status){
					alert('등록 되었습니다.');
					_.closeModal();
				}else{
					alert('이미 가입된 사용자입니다.');
				}
			}
		});

	},

	// 입력창에 입력된 email과 password를 검사해서 일치하면 로그인 alert
	// 아니면 email & password 확인 alert
	login : function(){
		var email = this.$el.find('#loginEmail').val(),
			password = this.$el.find('#loginPassword').val();

		/*
			1. ajax로 email과 패스워드 전송
			2. 해당 회원이 존재 && 패스워드 일치 alert(성공)
			   - 없으면 alere(확인하라고)

		*/

		$.ajax({
			method : 'POST',
			url : 'login',
			data : {
				email : email,
				password : password
			},
			dataType : 'json',
			success : function(data){
				if(data.status){
					location.href=location.origin+"/board/list";
				}else{
					alert('이메일과 비밀번호를 확인해주세요.');
				}
			}
		});

	}

}