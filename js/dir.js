var app = angular.module("ui.bootstrap.demo", ["ui.bootstrap"]);

app.controller("AccordionDemoCtrl", function ($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
          title: 'Details',
          content: 'Dynamic Group Body'
      },
      {
          title: 'Dockers',
          content: 'Dynamic Group Body'
      }
    ];
});

app.controller('TabsDemoCtrl', function ($scope, $window) {
    $scope.tabs = [
      { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
      { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function () {
        setTimeout(function () {
            $window.alert('You\'ve selected the alert tab!');
        });
    };
});

app.controller('DropdownCtrl', function ($scope, $log) {
    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function (open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
});