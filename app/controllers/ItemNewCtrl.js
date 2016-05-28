app.controller("ItemNewCtrl", function($scope, $location, itemStorage){
	$scope.title = "New Guy";
	$scope.submitButtonText = "Add New Item";
    $scope.newContact = {
        name: "",
        phone:"",
        email: "",
        favorites: false
    };
      
    $scope.addNewContact = function(){
        itemStorage.postNewItem($scope.newContact)
            .then(function successCallback(response) {
                console.log(response);
                $location.url("/items/list");
            })
    };
});