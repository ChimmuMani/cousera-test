(function(){
  'use strict';
  angular
  .module('Data')
  .component('categoriesList',{
    templateUrl:'categories.template.html',
    bindings:{
      items:'<'
    }
  });
}());
