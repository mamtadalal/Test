console.log("1");
angular.module("Demo", []).controller("myCtrl", function($scope) {
    $scope.people = [
    {
      name: 'John Doe',
      city: 'New York City',
      state: 'New York'
    },
    {
      name: 'John Smith',
      city: 'Oklahoma City',
      state: 'Oklahoma'
    },
    {
      name: 'Henry Black',
      city: 'Topeka',
      state: 'Kansas'
    }
  ];
  $scope.addPerson = function () {
    $scope.people.push({
        name: $scope.person_name,
        city: $scope.person_city,
        state: $scope.person_state
    });
    $scope.person_name = '';
    $scope.person_city = '';
    $scope.person_state = '';
  }
});

/*
var App = angular.module('Test', []);
console.log("2");
App.controller('MainCtrl', function ($scope) {
  console.log("here");
  $scope.people = [
    {
      name: 'John Doe',
      city: 'New York City',
      state: 'New York'
    },
    {
      name: 'John Smith',
      city: 'Oklahoma City',
      state: 'Oklahoma'
    },
    {
      name: 'Henry Black',
      city: 'Topeka',
      state: 'Kansas'
    }
  ];
  $scope.addPerson = function () {
    console.log("here 2");
    $scope.people.push({
        name: $scope.person_name,
        city: $scope.person_city,
        state: $scope.person_state
    });
    $scope.person_name = '';
    $scope.person_city = '';
    $scope.person_state = '';
  }
}
*/
