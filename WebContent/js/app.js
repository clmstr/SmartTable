var smarttableApp = angular.module('smarttableApp', [
  'ngRoute', 'ui.bootstrap'
]);

smarttableApp.config(['$routeProvider',
                    function($routeProvider) {
                      $routeProvider.
                        when('/home', {
                          templateUrl: 'partials/home.html',
                          controller: 'HomeCtrl'
                        }).
                        when('/etiquette', {
                            templateUrl: 'partials/etiquette.html',
                            controller: 'EtiquetteCtrl'
                          }).
                          when('/begin', {
                              templateUrl: 'partials/01_game_begin.html',
                              controller: 'BeginTheGameCtrl'
                            }).
                          when('/slideshow',{
                        	  templateUrl: 'partials/slide_show.html',
                        	  controller: 'SlideShowCtrl'
                          }).
	                        otherwise({
	                          redirectTo: '/home'
	                        });
                    }]);