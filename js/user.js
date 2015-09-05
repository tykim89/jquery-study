
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
	}
}