//  Extend the Backbone.Model prototype to build your own model here

var User = Backbone.Model.extend({
	defaults: function (){
	    return {
	    	fullname: " ",
	    	isAdmin: false,
	    	birthday: 1988
	    };
  	},

  	calculateAge: function(){
  		date = new Date;
  		current_year = date.getYear()+1900;
  		age = current_year - this.get("birthday");
  		this.set("age", age);
  	},

  	makeAdmin: function(){
  		this.set("isAdmin", true)
  	}
});