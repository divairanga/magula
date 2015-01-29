

var app = angular.module("ui.bootstrap.demo" ,["ngDropdowns"]);


app.controller("AppCtrl", function ($scope) {
  $scope.ddSelectOptions = [
    {
      text: 'Option1',
      value: 'one',
      iconCls: 'someicon'
    }, {
      text: 'Option2',
      someprop: 'somevalue'
    }, {
      divider: true
    }, {
      text: 'Option4',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddSelectSelected = {
    text: "Select an Option"
  };
});


