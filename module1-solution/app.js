(function () {
	'use strict';
	angular.module('Shopping',[])
	.controller('ShoppingController', ShoppingController);
	LunchCheckController.$inject = ['$scope'];
	function ShoppingController ($scope) {
    $scope.foodItems = ""
    $scope.message = "";
    $scope.checkItems = function() {
      $scope.items = $scope.items.trim();

      if ($scope.items === "") {
        $scope.message = "Please enter data first.";
        $scope.noticeType = "danger";
      }
      else {
        var $ItemsArray = $scope.items.split(",");
        var $length = $ItemsArray.length;
        if ( ($length <= 3) || ($length == 4 && $ItemsArray[3].trim() === "") ) {
          $scope.message = "Enjoy!";
          $scope.noticeType = "success";
        }
        else {
          $scope.message = "Too much!";
          $scope.noticeType = "warning";
        }
      }
    };
  }
})();