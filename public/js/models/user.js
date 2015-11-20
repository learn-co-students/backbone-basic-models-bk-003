//  Extend the Backbone.Model prototype to build your own model here
var User = Backbone.Model.extend({
	defaults : function() {
		return {
			fullname: ' ',
			firstName: ' ',
			lastName: ' ',
			isAdmin: false,
			birthday: 1988,
			age: null
		};
	},

	calculateAge : function() {
		var date = new Date();
		var year = date.getFullYear();
		var bday = this.get('birthday');
		var age = (year - bday);
		this.set('age', age);
		return age;
	},

	makeAdmin : function() {
		this.set('isAdmin', true);
	},
});

