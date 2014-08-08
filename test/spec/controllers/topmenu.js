'use strict';

describe('Controller: TopmenuCtrl', function () {

  // load the controller's module
  beforeEach(module('4envApp'));

  var TopmenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopmenuCtrl = $controller('TopmenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
