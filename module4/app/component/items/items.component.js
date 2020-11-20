(function(){
  'use strict';
  angular
  .module('Data')
  .component('itemDetails',{
    templateUrl:'itemDetails.template.html',
    bindings:{
      itemDetail:'<'
    }
  });
}());
