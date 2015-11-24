var User = Backbone.Model.extend ({
  defaults: function(){
    return {
    fullName: "Randy Castro",
    firstName: "Randy", 
    lastName: "Castro",
    isAdmin: false,  
    birthday: 1988
    };
  },
  calculateAge: function(){
    var age = 2015 - this.get("birthday") 
    this.set({age: age})
    return this.get("age");
  },
  makeAdmin: function(){
    this.set({isAdmin: true})
  }  
});