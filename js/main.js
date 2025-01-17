/**
* Main AngularJS Web Application
*/

var app = angular.module('tutorialWebApp', ['ngRoute']);

/** 
* Configure the Routes 
*/

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	//home
	.when("/", {templateUrl: "partials/home.html", controller: PageCtrl})
	//pages
	.when("/about", {templateUrl: "partials/about.html", controller: PageCtrl})
	.when("/services", {templateUrl: "partials/services.html", controller: PageCtrl})
	.when("/pricing", {templateUrl: "partials/pricing.html", controller: PageCtrl})
	// Blog
	.when("/blog", {templateUrl: "partials/blog.html", controller: BlogCtrl})
	.when("/blog/post", {templateUrl: "partials/blog_item.html", controller: BlogCtrl})
	// else 404
	.otherwise("/404", {templateUrl: "partials/404.html", controller: PageCtrl})
}]);


/**
* Controls the blog
*/

app.controller('BlogCtrl', function($scope, $location, $http){
	console.log("Blog Controller reporting for duty.");
});
/** 
* Controls all other Pages
*/

app.controller('PageCtrl', function($scope, $location, $http){
	console.log("Page Controller reporting for duty.");

	// Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
