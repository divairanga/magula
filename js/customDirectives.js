CustomDirectives= angular.module('CustomDirectives', []);
CustomDirectives.directive('customTabs', function () {
    return {
        require: '?ngModel',
        scope:{
            ngModel: '='
        },
        restrict: 'A',
        template: '\
            <ul class="nav nav-tabs">\
                <li ng-class="{active: item.active}" ng-repeat="item in ngModel"><a href="#{{contentBaseId}}-{{$index}}" ng-click="toggleActive($index)">{{item.title}}</a></li>\
            </ul>\
            <div class="tab-content">\
              <div class="tab-pane" ng-class="{active: item.active}" id="{{contentBaseId}}-{{$index}}" ng-repeat="item in ngModel">{{item.content}}</div>\
            </div>',
        link: function(scope, el, attrs){
            scope.contentBaseId = attrs.tabsBaseId;
        
            scope.toggleActive = function(ind){
                angular.forEach(scope.ngModel, function(value, key){
                    if (key == ind)
                    {
                        scope.ngModel[key].active = !scope.ngModel[key].active;
                        $("#" + scope.panelBaseId + "-" + ind).tab('show');
                    }
                    else
                        scope.ngModel[key].active = false;
                });
            }
        }
    };
});

angular.module('CustomComponents', ['CustomDirectives']);
function CustomDirectivesController($scope, $http)
{
    getTabs = function(data)
    {
        $scope.tabsData = data.tabs;
    };
    
    $scope.loadTabs = function(num)
    {
        $http.jsonp("http://subliminalsources.com/wp-content/uploads/2014/02/tabs" + num + ".js");
    }
    
    $scope.tabsData = [];
}