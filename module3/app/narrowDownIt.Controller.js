(function(){
  'use strict';
  angular.module('myApp')
  .controller('narrowDownItController',narrowDownItController);
  narrowDownItController.$inject=['MenuSearchService']
  function narrowDownItController(MenuSearchService){
    var vm=this;
    vm.found=[];
    vm.RemoveMenuItem=RemoveMenuItem;
    vm.SearchMenuItem=SearchMenuItem;
    vm.searchTerm='';


    function SearchMenuItem(){
      vm.loading=true;
      vm.message='';
      return MenuSearchService.getMatchedMenuItems(vm.searchTerm)
         .then(function(data) {
           vm.found = data;

           vm.loading = false;
           if (vm.found.length == 0) {
             vm.message = 'Nothing found!';
           }
         })
    .catch(function(error){
      console.log(
          'Failed loading information. Error Code: %s, Error Message: %s',
          error.status,
          error.statusText
        );

        vm.loading = false;
        vm.message = 'Error loading information';
  });
    }
 function RemoveMenuItem(index){
   vm.found.splice(index,1);
 }

  }
})();
