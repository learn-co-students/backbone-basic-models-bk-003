"use strict";

describe("User Model", function() {

  var user;

  // setup and instantiate the custom backbone model
  beforeEach(function() {
    user = new User({
      firstName: ' ',
      lastName: ' ',
      isAdmin: false,
      birthday: 1988
    });
  });

  it("should exist", function() {
    expect(User).toBeDefined();
  });

  it('has default properties for firstName, lastName, isAdmin and birthday', function() {
    expect(user.defaults).toBeDefined();
    expect(user.get('firstName')).toBeDefined();
    expect(user.get('lastName')).toBeDefined();
    expect(user.get('isAdmin')).toEqual(false);
    expect(user.get('birthday')).toEqual(1988)
  });

  it('has a custom method called calculateAge', function() {
    expect(user.calculateAge).toBeDefined();
  });

  it('sets the user age after calculateAge is called', function() {
    user.calculateAge();
    expect(user.get('age')).toBeDefined();
    expect(user.get('age')).toEqual((new Date().getFullYear()) - user.get('birthday'));
  });

  it('sets isAdmin default to true after makeAdmin is called', function() {
    user.makeAdmin();
    expect(user.get('isAdmin')).toEqual(true);
  });
});