
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

		/////* if 분기문으로 */////
/*
		var $email = this.$el.find('#inputEmail'),
			$password = this.$el.find('#inputPassword'),
			$passwordConfirm = this.$el.find('#inputPasswordConfirm'),
			$name = this.$el.find('#inputName'),
			$job = this.$el.find('#inputJob');

		if(!$email.val() || !$password.val() || !$passwordConfirm.val() || !$name.val() || !$job.val()){
			alert("필수 항목을 모두 입력해주세요.");

			if(!$email.val()){
				$email.addClass('empty');
			}else{
				$email.removeClass('empty');
			}

			if(!$password.val()){
				$password.addClass('empty');
			}else{
				$password.removeClass('empty');
			}

			if(!$passwordConfirm.val()){
				$passwordConfirm.addClass('empty');
			}else{
				$passwordConfirm.removeClass('empty');
			}

			if(!$name.val()){
				$name.addClass('empty');
			}else{
				$name.removeClass('empty');
			}

			if(!$job.val()){
				$job.addClass('empty');
			}else{
				$job.removeClass('empty');
			}

		}
*/
		
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
		if(this.find(email)){
			alert("이미 가입된 email입니다");
			return;
		}

		// 4. 위 검증이 끝나면 회원 가입
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
	find : function(email){
			result = false;

		$.each(users, function(index, user){

			if(email === user.email){
				result = true;
				return;
			}
		});

		return result;
	},
	

	save : function(obj){
		users.push(obj);

		alert('등록 되었습니다');
		this.closeModal();
	},

	// 입력창에 입력된 email과 password를 검사해서 일치하면 로그인 alert
	// 아니면 email & password 확인 alert
	login : function(){
		var email = this.$el.find('#loginEmail').val(),
			password = this.$el.find('#loginPassword').val(),
			result;

		// login과 signUp을 많이 다르게 갈 경우, 각각의 모듈
		$.each(users, function(index, value){

			if(email === value.email && password === value.password){
				result = true;
				return;
			}
		});

		if(result){
			alert('로그인 성공');
		}else{
			alert('email과 password를 확인해주세요');
		}
		

		// login과 signUp의 공통 부분을 활용할 경우, 공통 모듈 사용


	}




}