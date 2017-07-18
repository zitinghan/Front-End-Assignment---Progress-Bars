// Main script & template
'use strict';

var app = angular.module('app.Main', []);

app.controller('MainCtrl', ['$scope', function($scope){
  
  $scope.endPoint = { //init data
    "buttons": [ // control button, edit here to add, remove or change control
        10,
        38,
        70,
        -13,
        -18
        -50
    ],
    "bars": [ //total progress bar, add, remove progress bar or change init progress
        62,
        45,
        50,
        200
    ],
    "limit": 230 //limit to reach 100%
  };

  // Control bar action
  $scope.controller = {
    changeProgress: function(value){
      
      var barSelected = $scope.progressBarSelected;
      var currentBarsProgress = $scope.endPoint.bars[barSelected];

      var afterClickValue = currentBarsProgress+value;
      if(afterClickValue < 0){ // make sure no negative
        $scope.endPoint.bars[barSelected] = 0;
      }else{
        $scope.endPoint.bars[barSelected] = currentBarsProgress+value;
      }
      
    }
  }

  


}]);

//Progress bar directive
app.directive('loadingBar', function () {
      
  function link(scope, element, attrs){
    scope.progress = {
      state: convertPercentageFromLimit(scope.currentstate),
      convertPercentageFromLimit: function(progress){ //change depends on limit to 100%
        var limit = scope.limit;
        var eachPercentage = limit/100;
        return Math.round(progress/eachPercentage); 
      }
    }

    scope.$watch('currentstate', function(newVal, oldVal){
      if(newVal!=oldVal){
        animationMove(scope.progressIndex, scope.progress.convertPercentageFromLimit(oldVal), scope.progress.convertPercentageFromLimit(newVal))
      }
    });

    function convertPercentageFromLimit(progress){
      var limit = scope.limit;
      var eachPercentage = limit/100;
      return Math.round(progress/eachPercentage); 
    }

    function animationMove(progressBarID, fromValue, toValue) {
      var element = document.getElementById("progress_"+progressBarID).getElementsByClassName("progressBackground");   
      var state = fromValue;
      var interval = setInterval(move, 10);
      
      function move() {
        if (state == toValue) {
          clearInterval(interval);
        }else if(toValue > fromValue) {
          state++; 
          scope.progress.state++;
          element[0].style.width = state + '%'; 
        }else if(toValue < fromValue){
          state--; 
          scope.progress.state--;
          element[0].style.width = state + '%'; 
        }
      }
    }

  }

  
      
  return {
      restrict: 'EA', 
      scope: {
        currentstate: '=',
        limit: '=',
        progressIndex: '='
      },
      templateUrl: 'app/Main/progressTemplate.html',
      link: link
  };
});