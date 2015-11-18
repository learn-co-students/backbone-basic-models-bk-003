//  Extend the Backbone.Model prototype to build your own model here
var User = Backbone.Model.extend({
    defaults: function() {
        return {
            firstName: ' ',
            lastName: ' ',
            fullname: ' ',
            isAdmin: false,
            birthday: 1988,
            age: 0
        };
    },
    calculateAge: function(){

      this.set({age: 2015 - this.get("birthday")});
       
      
    },
    makeAdmin: function(){
      this.set({isAdmin: true})
    },

});

// User = Backbone.Model.extend({
//    calculateAge: function(){

//   },

// })
