//  Extend the Backbone.Model prototype to build your own model here
var User = Backbone.Model.extend({
  defaults: {
      firstName: "Isaac",
      lastName: "Lapides",
      fullname: "Isaac Lapides",
      isAdmin: false,
      birthday: 1988,
      age: 0
  },

  calculateAge: function(){
    this.set({'age': (new Date().getFullYear() - this.get('birthday'))});
  },

  makeAdmin: function(){
    this.set({'isAdmin': true});
  }
});