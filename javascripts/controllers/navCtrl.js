app.controller("NavCtrl", function($scope){
	$scope.navItems = [
	{
		name: "Logout",
		url: "#/logout"
	},
	{
		name: "Contacts",
		url: "#/contact/list"
	},
	{
		name: "New Contact",
		url: "#/contact/new"
	}
	];
});