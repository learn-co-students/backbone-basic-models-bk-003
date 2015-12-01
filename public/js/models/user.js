//  Extend the Backbone.Model prototype to build your own model here


  
var User = Backbone.Model.extend ({ /* User Model should exist*/
 /*has default properties for firstName, lastName, isAdmin and birthday should exist*/
  defaults: function (){  

    return {
      firstName: 'Bruna',
      lastName: 'Netto',
      fullname: 'BrunaNetto',
      isAdmin: false,
      birthday: 1988
    };
  },
  	calculateAge: function(){ /*has a custom method called calculateAge*/ 
      this.set({age: 2015 - this.get('birthday')})/*sets the user age after calculateAge is called*/
    },
  

    makeAdmin: function(){  /*sets isAdmin default to true after makeAdmin is called*/
      this.set({isAdmin: true})
    },
  

}); 










// User because it's a class. Backbone.Model.extend is both a function and an object so that's why theres both a () {}



// method vs function js CLARIFY

//methods are inside the object (a.k. class) this.function <-- is a method 