(function () {
'use strict';

angular.module('LunchCheckerApp', [])

.controller('LunchCheckerController', LunchCheckerController);
LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController ($scope){
  $scope.Message= "";
  $scope.CreateDisplayMessage = function () {
    var msg = $scope.LunchList;
    if (msg.length == 0)
        $scope.Message = "Please enter data first";
    else {
          var items = msg.split(",");
          if (items.length>3)
            $scope.Message = "Too much";
          else
            $scope.Message = "Enjoy!"

        }
    return msg;
  };
};

})();
