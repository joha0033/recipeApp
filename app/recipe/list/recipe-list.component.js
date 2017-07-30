(function () {

  angular
    .module('RecipeApp')
    .component('recipeList', {
      controller: 'RecipeListController',
      templateUrl: 'app/recipe/list/recipe-list.html'
    });

})();
