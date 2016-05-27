app.controller("ItemNewCtrl", function($scope, $location, itemStorage){
    $scope.newTask = {
        name: "",
        phone:"",
        email: "",
    };
      
    $scope.addNewItem = function(){
        itemStorage.postNewItem($scope.newTask)
            .then(function successCallback(response) {
                console.log(response);
                $location.url("/items/list");
            });
    };
});