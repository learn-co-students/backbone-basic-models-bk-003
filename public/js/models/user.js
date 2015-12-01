//  Extend the Backbone.Model prototype to build your own model here

var User = Backbone.Model.extend({
	defaults: {
		firstName: "Lemuel",
		lastName: "Uhuru",
		fullname: "Lemuel Uhuru",
		isAdmin: false,
		birthday: 1988,
		age: 0
	},

	calculateAge: function() {
		this.set({age: (new Date().getFullYear() - this.get('birthday'))});
	},

	makeAdmin: function() {
		this.set({ isAdmin: true });
	}
});