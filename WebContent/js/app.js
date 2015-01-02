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
                          when('/cuttleryquiz1',{
                        	  templateUrl: 'partials/cuttlery_quiz_1.html',
                        	  controller: 'CuttleryQuizCtrl'
                          }).
                          when('/cuttleryquiz2',{
                        	  templateUrl: 'partials/cuttlery_quiz_2.html',
                        	  controller: 'CuttleryQuizCtrl'
                          }).
                          when('/slideshow',{
                        	  templateUrl: 'partials/slide_show.html',
                        	  controller: 'SlideShowCtrl'
                          }).
                          when('/etiquettequiz1',{
                        	  templateUrl: 'partials/etiquette_quiz_1.html',
                        	  controller: 'EtiquetteQuizCtrl'
                          }).
                          when('/etiquettequiz2',{
                        	  templateUrl: 'partials/etiquette_quiz_2.html',
                        	  controller: 'EtiquetteQuizCtrl'
                          }).
                          when('/etiquettequiz3',{
                        	  templateUrl: 'partials/etiquette_quiz_3.html',
                        	  controller: 'EtiquetteQuizCtrl'
                          }).
                          when('/etiquettequiz4',{
                        	  templateUrl: 'partials/etiquette_quiz_4.html',
                        	  controller: 'EtiquetteQuizCtrl'
                          }).
                          when('/etiquettequiz5',{
                        	  templateUrl: 'partials/etiquette_quiz_5.html',
                        	  controller: 'EtiquetteQuizCtrl'
                          }).
                          when('/restaurantchooser',{
                        	  templateUrl: 'partials/restaurant_chooser.html',
                        	  controller: 'RestaurantCtrl'
                          }).
	                        otherwise({
	                          redirectTo: '/home'
	                        });
                    }]);