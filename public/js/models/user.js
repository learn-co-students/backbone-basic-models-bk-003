//  Extend the Backbone.Model prototype to build your own model here

var User = Backbone.Model.extend({
  defaults: function (){
    return {
      fullname: "Giancarlo Martinez",
	  firstName: "Giancarlo",
	  lastName: "Martinez",
	  isAdmin: false,
	  birthday: 1991
	};
  },
  calculateAge: function (){
  	var today = (new Date).getFullYear()
	this.set({'age': today - this.get('birthday')});
	return this.get('age')
  },
  makeAdmin: function(){
  	this.set({'isAdmin': true})
  }
});


