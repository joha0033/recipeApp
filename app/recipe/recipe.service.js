(function() {

    angular
      .module('RecipeApp')
      .factory('RecipeService', RecipeService)

      function RecipeService(){
        const serviceMessage = {
          message: 'Hello from the service!'
        }

        return serviceMessage
      }

}());
