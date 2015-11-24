//  Extend the Backbone.Model prototype to build your own model here
var User = Backbone.Model.extend({
  defaults () {
    return {
      fullname: 'Henry Paulino',
      firstName: 'Henry',
      lastName: 'Paulino',
      birthday: 1995,
      isAdmin: false
    }
  },
  calculateAge () {
    var year = new Date().getFullYear();
    this.set({'age': year - this.get('birthday')});
    return this.get('age');
  },
  makeAdmin () {
    this.set({'isAdmin': true});
  }
});
