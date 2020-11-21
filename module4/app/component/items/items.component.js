(function(){
  'use strict';
  angular
  .module('Data')
  .component('itemDetails',{
    templateUrl:'app/component/items/itemDetails.template.html',
    bindings:{
      items:'<'
    }
  });
}());
