(function () {
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController ($scope) {
    $scope.foodItems = ""
    $scope.message = "";
    $scope.checkItems = function() {
      $scope.items = $scope.items.trim();

      if ($scope.items === "") {
        $scope.message = "Please enter data first.";
      }
      else {
        var $ItemsArray = $scope.items.split(",");
        var $length = $ItemsArray.length;
        if ( ($length <= 3) || ($length == 4 && $ItemsArray[3].trim() === "") ) {
          $scope.message = "Enjoy!";
        }
        else {
          $scope.message = "Too much!";
        }
      }
    };
  }
})();