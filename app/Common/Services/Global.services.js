// Global script & template
'use strict';

angular.module('app.globalVar', [])

// 
.factory('globalVar', function() {
    var IP_ADDRESS = '123';

    return {
        getIPAddress: function() {
            return IP_ADDRESS;
        },
        
    }
});