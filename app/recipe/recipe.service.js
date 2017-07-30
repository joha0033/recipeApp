(function() {

    angular
      .module('RecipeApp')
      .factory('RecipeService', RecipeService)

      // function RecipeService(){
      //   const serviceMessage = {
      //     message: 'Hello from the service!'
      //   }
      //
      //   return serviceMessage
      // }

      function RecipeService(){
        const favorites = []

        return{
          getFavorites(){
            return favorites
          },
          addFavorite(favorite) {
            favorites.push(favorite)
          },
          removeFavorite(recipe){
            const remove = favorites.indexOf(recipe)
            favorites.splice(remove, 1)
          },
          isFavorite(recipe){
            return favorites.some(favorite => favorite === recipe)
          }
        }
      }

}());
