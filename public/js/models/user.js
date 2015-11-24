//  Extend the Backbone.Model prototype to build your own model here

var User = Backbone.Model.extend({
  defaults: function(){
    return {
      fullName: "Samuel Joli",
      isAdmin: false,
      birthday: 1988,
      age: 0
    };
  },


  calculateAge: function(){
    var date = new Date().getFullYear();
    this.set({age: date - this.get('birthday')});
    return this.get('age')
  },

  makeAdmin: function(){
    return this.set({isAdmin: true});
  }

});