var User = Backbone.Model.extend({
  defaults: {
    fullname: " ",
    isAdmin: false,
    birthday: 1988,
  },
  calculateAge: function(){
    var date = new Date();
    var age = date.getFullYear() - this.get('birthday');
    this.set("age", age)
  },
  makeAdmin: function(){
    this.set("isAdmin", true)
  }
});
