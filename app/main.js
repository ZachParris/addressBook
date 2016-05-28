var app = angular.module("addressBook", ["ngRoute"])
.constant("firebaseURL", "https://addressbook-zp.firebaseio.com/");

app.config(function($routeProvider){
	$routeProvider.
	  when("/items/list", {
	  	templateUrl: "partials/contact-list.html",
	  	controller: "ItemListCtrl"
	  }).
	  when("/items/new", {
	  	templateUrl: "partials/contact-new.html",
	  	controller: "ItemNewCtrl"
	  }).
	  when("/items/:itemId/edit", {
	  	templateUrl: "partials/contact-new.html",
	  	controller: "ItemEditCtrl"
	  }).
	  when("/items/:itemId", {
	  	templateUrl: "partials/contact-details.html",
	  	controller: "ItemViewCtrl"
	  }).
	  otherwise("/items/list");
});
