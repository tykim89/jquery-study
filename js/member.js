$(function(){

	member.init();

});
// QA 테스트 진행
var member = {

	$el : {},
	list : [],
	currentData : {},

	showModal : function(){
		$('#memberModal').modal();
	},

	closeModal : function(){
		$('#memberModal').modal('hide');
	},

	init : function(){
		this.list = (this.list.length > 0) ? this.list : this.generateMembers();
		this.makeTbody(this.list);
//		console.log(this.generateMembers());
		this.$el = $('#memberMain');
		

//		$('.member_info').click(function(){
//			var idx = $(this).attr('id').slice(7);
//			member.edit(member.find(idx));
//			member.showModal();
//		});


		this.$el.on('click', '.member_info', function(){	// 이벤트리스너 : member_info 클래스 영역에 클릭 이벤트를 on 항상 시킨다.
			var idx = $(this).attr('id').slice(7);
			member.edit(member.find(idx));
			member.showModal();
		});

	},

	generateMembers : function(){		// javascript 객체 타입
		var members = [
				{
					idx			: 1,
					email		: 'jojoldu@gamil.com',
					name		: '이동욱',
					job			: 'web developer',
					joinDate	: '2015-02-12',
					updateDate	: '2015-07-30'
				},
				{
					idx			: 2,
					email		: 'soultomind930@gamil.com',
					name		: '이바우',
					job			: 'web developer',
					joinDate	: '2015-02-12',
					updateDate	: '2015-07-30'
				},
				{
					idx			: 3,
					email		: 'jusaha1109@gamil.com',
					name		: '김태영',
					job			: 'web developer',
					joinDate	: '2015-02-12',
					updateDate	: '2015-07-30'
				},
				{
					idx			: 4,
					email		: 'usdrd90@gamil.com',
					name		: '전옥현',
					job			: 'web publisher',
					joinDate	: '2015-05-23',
					updateDate	: '2015-07-30'
				},
				{
					idx			: 5,
					email		: 'tlsdbsdk@gamil.com',
					name		: '신윤아',
					job			: 'web publisher',
					joinDate	: '2015-07-21',
					updateDate	: '2015-07-30'
				},
		];

		return members;	// JSON.stringify(member.generateMembers());	-- json string 형으로 변환
						// JSON.parse(JSON.stringify(member.generateMembers()));	-- 다시 object 형으로
	},

	makeTbody : function(members){
		var $table = $('#tMember'),
			$tbody = $(document.createElement('tbody'));

		$.each(members, function(index, member){
			var $tr = $(document.createElement('tr'));
			$tr.addClass('member_info');
			$tr.attr('id', 'member_' + member.idx);
			
			for(prop in member){
				var $td = $(document.createElement('td'));
//				$td.text(member['no']);
//				$td.text(member.no);

				$td.text(member[prop]);
//				$td.text(member.prop);
				$tr.append($td);
			}
			$tbody.append($tr);
		});

		$table.append($tbody);
	},

	find : function(idx){
		var members = this.list,
			res = null;

		$.each(members, function(index, member){
			if(member.idx == idx){
				res = member;
				return false;		// 제이쿼리 each 의 break문 기능
			}
		});

		return res;

	},

	edit : function(member){
		var member = member,
			$inputEmail = $('#inputEmail'),
			$inputName = $('#inputName'),
			$inputJob = $('#inputJob');

		this.currentData = member;
		$inputEmail.val(member.email);
		$inputName.val(member.name);
		$inputJob.val(member.job);

	}

}