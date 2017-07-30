(function() {

  angular
    .module('RecipeApp')
    .controller('RecipeFavoritesController', RecipeFavoritesController)

    function RecipeFavoritesController(RecipeService){
      const vm = this
      console.log('heller from the favorites controller.');
      console.log('Hello from favorites + RecipeService:', RecipeService.message);
      vm.service = RecipeService
    }

}());
