
(function() {

  angular
    .module('RecipeApp')
    .controller('RecipeListController', RecipeListController)

    function RecipeListController(RecipeService, $http){
      const vm = this

      vm.addFavorite = addFavorite
      vm.removeFavorite = removeFavorite
      vm.service = RecipeService

      console.log('heller from the list controller.')
      console.log('Hello from list + RecipeService:', RecipeService.message);


      $http.get('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=cheese&p=3 ')
        .then(result => {
          //console.log(result);
          vm.recipes = result.data.results
        })

      function addFavorite(recipe){
        console.log(recipe);
        RecipeService.addFavorite(recipe)
      }

      function removeFavorite(favorite){
        RecipeService.removeFavorite(favorite)

      }

    }

}());
