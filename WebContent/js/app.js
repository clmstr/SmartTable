var smarttableApp = angular.module('smarttableApp', [
  'ngRoute', 'ui.bootstrap', 'ngDragDrop'
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
                          when('/cuttleryquiz1',{
                        	  templateUrl: 'partials/cuttlery_quiz_1.html',
                        	  controller: 'CuttleryQuizCtrl'
                          }).
                          when('/etiquettequiz1',{
                        	  templateUrl: 'partials/etiquette_quiz_1.html',
                        	  controller: 'EtiquetteQuizCtrl'
                          }).
	                        otherwise({
	                          redirectTo: '/home'
	                        });
                    }]);