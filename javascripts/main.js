var app = angular.module("addressBook", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.
	  when("/contact/list", {
	  	templateUrl: "partials/contact-list.html",
	  	controller: "itemListCtrl"
	  }).
	  when("/contact/new", {
	  	templateUrl: "partials/contact-new.html",
	  	controller: "itemNewCtrl"
	  }).
	  when("/contact/details", {
	  	templateUrl: "partials/contact-details.html",
	  	controller: "itemViewCtrl"
	  }).
	  otherwise("/contact/list");
});