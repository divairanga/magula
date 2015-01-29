//'use strict';

var app=angular.module('app', ['ngAnimate','ui.bootstrap','uiMicrokernel','angularCharts']);

app.controller('ExampleController1', ['$scope', '$agent', '$auth', '$presence', function ($scope, $agent, $auth, $presence){

    $scope.templates =[ ];
  
    $scope.template = $scope.templates[0];
    $scope.selectedDropDownItem = null;

    $scope.ClusterInfo = [];
    $scope.displayInfo = [];
    $scope.contents = [];
   // $scope.parameters=[];
    
    $agent.onClusterInfo(function(e,data){
      $scope.ClusterInfo = data;
    });

    $agent.onDisplayInfo(function(e,data){
      $scope.displayInfo = data;
    });

    $presence.onStateChanged(function(e,data){
      $agent.getClusterInfo();
    });
    
    $auth.onLoginResult(function(e,data){
      $presence.setOnline();


    });
    $auth.forceLogin("divani","asdsdsdad","");

    $scope.menuSelected = function(obj){
      if (obj.displayType && obj.displayId){
        $agent.on(obj.displayId);
        $agent.getDisplayInfo(obj.displayType, obj.displayId)
      }else{
        alert ("no information to display");
           }
    };

    $scope.config = {
    title: '',
    tooltips: true,
    waitForHeightAndWidth :true, //*******without this cannot display chart inside the ng-repeat********
    labels: false,
    mouseover: function() {},
    mouseout: function() {},
    click: function() {},
    legend: {
      display: true,
      //could be 'left, right'
      position: 'right'
            }
    };

    $scope.parameters = {
    series: [''],
    data: [{x:[1], y:[5]},{x:[20], y:[20]},{x:[40], y:[10]},{x:[60], y:[40]},{x:[80], y:[5]},{x:[100], y:[60]}]
  };
   

}]);



