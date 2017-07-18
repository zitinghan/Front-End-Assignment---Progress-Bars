// Main script & template
'use strict';

var app = angular.module('app.Main', []);

app.controller('MainCtrl', ['$scope', function($scope){
  
  $scope.endPoint = { //init data
    "buttons": [ // control button, edit here to add, remove or change control
        10,
        38,
        -13,
        -18
    ],
    "bars": [ //total progress bar, add, remove progress bar or change init progress
        62,
        45,
        62
    ],
    "limit": 230 //limit to reach 100%
  };

  // Control bar action
  $scope.controller = {
    changeProgress: function(value){
      
      var barSelected = $scope.progressBarSelected;
      var currentBarsProgress = $scope.endPoint.bars[barSelected];
      console.log(barSelected,currentBarsProgress, value);
      $scope.endPoint.bars[barSelected] = currentBarsProgress+value;
    }
  }

}]);

//Progress bar directive
app.directive('loadingBar', function () {
      
    var controller = ['$scope', function ($scope) {
      console.log($scope);
      $scope.progress = {

      }

      function convertPercentageFromLimit(){
        var limit = $scope.limit;

      }
          /*function init() {
              $log.debug('init');
          }

          init();

          $scope.addItem = function () {
            $log.debug('addItem', globalVar.getIPAddress());
          };*/
    }]
        
      
    return {
        restrict: 'EA', 
        scope: {
          currentstate: '=',
          limit: '=',
          progressIndex: '='
        },
        controller: controller,
        templateUrl: 'app/Main/progressTemplate.html'
    };
});