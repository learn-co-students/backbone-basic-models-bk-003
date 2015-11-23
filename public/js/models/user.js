var User = Backbone.Model.extend({
  defaults: function () {
    return {
      fullname: "Gil Velez",
	    firstName: "Gil",
	    lastName: "Velez",
	    isAdmin: false,
	    birthday: 1993
	  };
  },
  calculateAge: function () {
  	var today = (new Date).getFullYear()
	  this.set({'age': today - this.get('birthday')});
	  return this.get('age');
  },
  makeAdmin: function(){
  	this.set({'isAdmin': true})
  }
});
