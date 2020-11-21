(function(){
  'use strict';
  angular
  .module('Data')
  .component('itemDetails',{
    templateUrl:'app/component/categories/itemDetails.template.html',
    bindings:{
      items:'<'
    }
  });
}());
