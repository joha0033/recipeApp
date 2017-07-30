
(function() {

  angular
    .module('RecipeApp')
    .controller('RecipeListController', RecipeListController)

    function RecipeListController(RecipeService){
      const vm = this

      console.log('heller from the list controller.')
      console.log('Hello from list + RecipeService:', RecipeService.message);

      vm.service = RecipeService

      vm.updateMessage = updateMessage

      function updateMessage(){
        vm.service.message = vm.message
      }
    }

}());
