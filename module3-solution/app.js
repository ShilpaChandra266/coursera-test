(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems',FoundItems)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  


  
  function FoundItems() {
  var ddo = {
    templateUrl: 'menu.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.found=[];
  menu.getMatchedMenuItems = function () {
  	menu.found=[]
  	if(menu.searchTerm){
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    promise.then(function (response) {
      menu.found=response;
    })
    .catch(function (error) {
      console.log(error);
    })
  };
}
  menu.removeItem = function (index) {
    menu.found.splice(index, 1);
    if (menu.found.length == 0) {
        menu.error = "Nothing found";
      }
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
      }).then(function (result) {

        var items = result.data.menu_items;
        var foundItems = []
        for (var index = 0; index < items.length; index++) {
          if (items[index].description.indexOf(searchTerm) != -1) {
            foundItems.push(items[index]);
          }
        }
        return foundItems;
      });
    };

  };

})();