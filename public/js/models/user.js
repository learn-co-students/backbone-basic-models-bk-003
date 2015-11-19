//  Extend the Backbone.Model prototype to build your own model here
var User = Backbone.Model.extend ({
    defaults: function(){
        return {
            firstName: '',
            lastName: '',
            isAdmin: false,
            birthday: 1988
        };
    },

    calculateAge: function(){
        {
            this.set({age: (new Date().getFullYear()) - this.get('birthday')})
        };
    },

    makeAdmin: function(){
        {
            this.set({isAdmin: true})
        };
    }
})
    
    //i was returning the setters. You dont need to return a setter, thats what the getter function do.
    //this is like the model itself. Its equivalent of self in ruby.