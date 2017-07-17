// Main script & template
'use strict';

var app = angular.module('app.Main', []);

app.controller('MainCtrl', ['$scope', 'globalVar', function($scope, globalVar){
	

}]);

app.directive('loadingBar', function () {
      
    var controller = ['$scope', function ($scope) {

          function init() {
              $log.debug('init');
          }

          init();

          $scope.addItem = function () {
          	$log.debug('addItem', globalVar.getIPAddress());
          };
      }],
        
      template = '<button ng-click="addItem()">Add Item</button><ul>' +
                 '<li ng-repeat="item in items">{{ ::item.name }}</li></ul>';
      
      return {
          restrict: 'EA', //Default in 1.3+
          scope: {
              datasource: '=',
              add: '&',
          },
          controller: controller,
          template: template
      };
});