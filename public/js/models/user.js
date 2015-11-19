//  Extend the Backbone.Model prototype to build your own model here
var User = Backbone.Model.extend({
  defaults : function (){
    return {
      fullname: " "
    };
  },
  calculateAge : function (){
  	var age = (2015 - this.get('birthday'));
  	this.set("age", age);
  },
  makeAdmin : function (){
  	this.set("isAdmin", true);
  }
});