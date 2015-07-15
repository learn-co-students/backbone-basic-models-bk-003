"use strict";

describe("User Model", function() {

  var user;

  // setup and instantiate the custom backbone model
  beforeEach(function() {
    user = new UserModel({
      name: ' ',
      isAdmin: false,
      birthday: 1988
    });
  });

  it("should exist", function() {
    expect(UserModel).toBeDefined();
  });

  it('can have default properties such as name and birthday', function() {
    expect(user.defaults).toBeDefined();
  });

  it('has a custom method called calculateAge', function() {
    expect(user.calculateAge).toBeDefined();
  });

  it('sets the user age after calculateAge is called', function() {
    user.calculateAge();
    expect(user.get('age')).toBeDefined();
    expect(user.get('age')).toEqual((new Date().getFullYear()) - user.get('birthday'));
  });
});