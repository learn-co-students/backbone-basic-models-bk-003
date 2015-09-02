# Introduction to Backbone.js: Models

# Objectives
1. Understand the basics of Backbone Models
2. Learn how to create and instantiate a simple Backbone.js model

# Instructions
1. Type `learn -b` in your terminal to run the jasmine test suite for this lab in the browser
2. Write the code necessary to get the failing tests to pass
3. As you create directories/flies to hold your code, aim to get write code that passes passes failing test in sequential order


# Overview of Backbone.js
This lab begins with a brief discussion of Backbone.js and the responsibilities of its Model base class.
Backbone.js is a javascript library/framework that makes use of MV* patterns to construct easily maintable object oriented single web-page applications.

> _Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface_**<sup>[1](http://backbonejs.org/)</sup>**.

Backbone.js is more like Sinatra than Rails in the sense that we need to determine how to organize our code.  While this - determining how to load scripts and lay out your own development environment - might seem a bit daunting, it actually isn't.  Why?  Because we are going to apply everything we have learned thus far about building applications using Sinatra and Rails to organize the code for this lab.

##### Namespace
Using Backbone means we're going to create directories for models, collections and views. Therefore having a namespace for our app to keep them organized is a good practice.
> A namespace is an object-oriented concept which allows for organization of variables, functions, and other elements of a program. A namespace encapsulates code such that to access that code, you must first reference the namespace to which you are referring. The global namespace is one such default namespace -- all global variables are considered to be in the "global namespace." Programmers can create other namespaces, thus organizing code and reducing pollution of the global namespace.

We can do that by creating an app.js in the root of our application directory.The first test in this lab requires you to write the code require to set up a namespace this lab; read both requires.yml and spec/app.spec.js files to get a sense of what you need to do to define `app` and get the first test to pass.

##### Model(s) in Backbone.js
Backbone.js has a base class called `Model` that serves as the data layer in Backbone.
> _Backbone Models are the basic data object in the framework — frequently representing a row in a table in a database on your server. A discrete chunk of data and a bunch of useful, related methods for performing computations and transformations on that data_**<sup>[2](http://backbonejs.org/docs/backbone.html#section-50)</sup>**.

The functionality of Backbone.js' `Model` base class is similar to the functionality of `ActiveRecord::Base` module in Rails. Recall that `ActiveRecord::Base` serves as the base class - layer of the rails system responsible for representing business data and logic - which all the models in rails applications inherit from.

To create a model class in rails, we have model class inherit from `ActiveRecord::Base`. For example, a _Book Model_ would be represented like so:
```ruby
class Book < ActiveRecord::Base
  # ...
end
```

To create the same _Book Model_ in Backbone, we extend<sup>[1](http://backbonejs.org/#Model-extend)</sup> `Backbone.Model` like so:
```javascript
var Book = Backbone.Model.extend({
  // ...
});
```
The second test in this lab requires you to extend Backbone's base Model class to build your own model.


As in rails, a Backbone model class typically has attibutes that we are interested in setting, retriving, and manipulating. Backbone.js, being a client-side library, isn't directly connected to a database therefore its `Model class` serves as in memory (client-side/browser) representations of the data structures needed to build the **User Interface (UI)** of a web application.

Let's return to our example rails _Book Model_ and assume that it has an attribute `authorName` and a corresponding value `"J.K Rowling"`. To represent this scheme in the application UI, we add default values to Backbone.js Book model created above:
```javascript
var Book = Backbone.Model.extend({
  defaults: function (){
    return {
      authorName: "J.K Rowling"
    };
  },
})
```
The third test in this lab requires you to add defaults to the Backbone model you built earlier.

##### Adding custom methods
Now that we have worked through the basics, try to get add a custom method `calculateAge` to the user model in this app.

# Resources
+ [Namespacing in JavaScript](http://addyosmani.com/blog/essential-js-namespacing/)