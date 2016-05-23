app.controller("itemNewCtrl", function($scope){
	$scope.newContact = {};
	$scope.showListView = true;
	$scope.items = [
	{
		id: 0,
		name: "John Smith",
		email: "johnjsmith@gmail.com",
		phone: "615-555-5555",
	},
	{
		id: 1,
		name: "Tommy Knuckles",
		email: "t-nucks@gmail.com",
		phone: "615-615-5555",
	},
	{
		id: 2,
		name: "Joey Baggadonuts",
		email: "joey-b-nutz@gmail.com",
		phone: "615-555-6155",
	}
	];
	$scope.newItem =function(){
		$scope.showListView = false;
	};
	$scope.allItem = function(){
		$scope.showListView = true;
	};

	$scope.addNewContact = function(){
		$scope.newContact.id = $scope.items.length;
		$scope.items.push($scope.newContact);
		$scope.newContact="";
	};
});