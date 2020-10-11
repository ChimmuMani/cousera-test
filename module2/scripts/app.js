(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyShoppingController',ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
  ToBuyShoppingController.$inject=['ShoppingListCheckOffService']
  function ToBuyShoppingController(ShoppingListCheckOffService)
  {
      var ShoppingList=this;
      ShoppingList.items=ShoppingListCheckOffService.buyListItems();
      ShoppingList.buyItem=function(index){
        console.log("Helloooo");
      ShoppingListCheckOffService.buyItems(index);
      }
  }
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
   var boughtList = this;

   boughtList.items = ShoppingListCheckOffService.boughtListItems();   
 }
  function ShoppingListCheckOffService(){
    var service=this;
    var buyList=[
      {name:"Milk",quantity:10},
      {name:"Chocolate",quantity:8},
      {name:"Chips",quantity:5},
      {name:"Muffins",quantity:4},
      {name:"Juice",quantity:10},
      {name:"Donuts",quantity:3},
      {name:"Coke",quantity:7},
      {name:"Cookie",quantity:6},
      {name:"Bread",quantity:1},
      {name:"cake",quantity:2},
  ];
  var boughtList=[];
    service.buyListItems = function () {
       return buyList;
     };
     service.boughtListItems=function(){
       return boughtList;
     };
     service.buyItems=function(index){
       var item=buyList[index];
       buyList.splice(index,1);
       boughtList.push(item);
     };


  }
})();
