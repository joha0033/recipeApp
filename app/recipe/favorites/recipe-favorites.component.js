(function () {

  angular
    .module('RecipeApp')
    .component('recipeFavorites', {
      controller: 'RecipeFavoritesController',
      templateUrl: 'app/recipe/favorites/recipe-favorites.html'
    });

})();
