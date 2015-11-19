//  Extend the Backbone.Model prototype to build your own model here
var User = Backbone.Model.extend({
	  defaults: {
	    "firstName":  "caesar salad",
	    "lastName":     "ravioli",
	    "fullname": "lololol blblblbl",
	    "birthday":   1988,
	    "isAdmin":    false
	  },
	  calculateAge: function () {
	  	this.set('age',new Date().getFullYear() - this.get('birthday'));
	  },
	  makeAdmin : function() {
	  	this.set("isAdmin",true);
	  }
});