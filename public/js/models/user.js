//  Extend the Backbone.Model prototype to build your own model here
var User = Backbone.Model.extend({
  defaults: {
    firstName: "Damian",
    lastName: "Lajara",
    fullname: "Damian Lajara",
    isAdmin: false,
    birthday: 1993,
    age: 0
  },
  calculateAge: function() {
    this.set({ age: (new Date().getFullYear()) - this.get("birthday") });
  },
  makeAdmin: function() {
    this.set({ isAdmin: true });
  }
});
