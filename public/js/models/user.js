//  Extend the Backbone.Model prototype to build your own model here

var User = Backbone.Model.extend({
  defaults: function (){
    return {
      fullname: "J.K Rowling",
      firstName: 'J.K', 
      lastName: 'Rowling', 
      isAdmin: false,
      birthday: 1988,
      age: 0
    };
  },
  calculateAge: function(){
  	this.set({'age': new Date().getFullYear() - this.get('birthday')});
  	// return this.attributes.lastName; //this.get(birthday);
  },
  makeAdmin: function () {
  	this.set({'isAdmin': true});
  }
})