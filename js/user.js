
$(function(){

	//js 호출시 바로 시작될 영역
	user.init();
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

		if(password != passwordConfirm){
			alert("같은 패스워드를 입력해주세요");
		}


		// 3. 이미 등록된 사용자가 아닌가?

		// 4. 위 검증이 끝나면 회원 가입

	},

	validate : function(){
		var $signForms = this.$el.find('.signForms'),
			result = true;

		$.each($signForms, function(index, signForm){
			var $signForm = $(signForm);

			if(!$signForm.val()){
				$signForm.addClass('empty');
				result = false;
			}else{
				$signForm.removeClass('empty');
			}
		});

		return result;
	}






}