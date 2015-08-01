$(function(){

	member.init();

});

var member = {

	init : function(){
		this.makeTbody(this.generateMembers());
//		console.log(this.generateMembers());
	},

	generateMembers : function(){		// javascript 객체 타입
		var members = [
				{
					no			: 1,
					email		: 'jojoldu@hamil.com',
					name		: '이동욱',
					job			: 'web developer',
					joinDate	: '2015-02-12',
					updateDate	: '2015-07-30'
				},
				{
					no			: 2,
					email		: 'soultomind930@hamil.com',
					name		: '이바우',
					job			: 'web developer',
					joinDate	: '2015-02-12',
					updateDate	: '2015-07-30'
				},
				{
					no			: 3,
					email		: 'jusaha1109@hamil.com',
					name		: '김태영',
					job			: 'web developer',
					joinDate	: '2015-02-12',
					updateDate	: '2015-07-30'
				},
				{
					no			: 4,
					email		: 'usdrd90@hamil.com',
					name		: '전옥현',
					job			: 'web publisher',
					joinDate	: '2015-05-23',
					updateDate	: '2015-07-30'
				},
				{
					no			: 5,
					email		: 'tlsdbsdk@hamil.com',
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
	}
}