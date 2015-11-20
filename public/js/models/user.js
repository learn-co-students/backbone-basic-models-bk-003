//  Extend the Backbone.Model prototype to build your own model here
var User = Backbone.Model.extend({
	defaults: function(){
		return{
			fullname: "",
      		isAdmin: false,
      		birthday: 0 
      	}
	},
	calculateAge: function(){
		this.set({age: (new Date().getFullYear()) - this.get('birthday')})
	},
	makeAdmin: function(){
		this.set({isAdmin: true})
		
	}

	
});