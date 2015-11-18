//  Extend the Backbone.Model prototype to build your own model here
var User = Backbone.Model.extend({
  defaults: function (){
    return {
      fullname: '',
      isAdmin: false,
      birthday: 1988
    };
  }
});

User.prototype.calculateAge = function () {
  this.attributes.age = new Date().getFullYear() - this.attributes.birthday;
};

User.prototype.makeAdmin = function () {
  this.attributes.isAdmin = true;
};
