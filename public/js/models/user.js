//  Extend the Backbone.Model prototype to build your own model here

  var User = Backbone.Model.extend({
     defaults: {
      firstName: 'LL',
      lastName: 'COOL J',
      fullname: " ",
      isAdmin: false,
      birthday: 1988
    
   },
   calculateAge: function() {
     var d = new Date();
      var n = d.getFullYear() - this.get('birthday') ;
       this.set({ age: n }) ;
    

   },
   makeAdmin: function () {
    
     this.set({isAdmin: true});
  

   }
 });

