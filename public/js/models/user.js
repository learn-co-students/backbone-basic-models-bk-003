var User = Backbone.Model.extend({
  
  defaults: function(){
    return {
      fullname: '',
      isAdmin: false,
      birthday: 1988,
    }
  },
  calculateAge: function(){
    this.set({ age: new Date().getFullYear() - this.defaults().birthday})
    
  },
  makeAdmin: function(){
    this.set({isAdmin: true})
  }
})
