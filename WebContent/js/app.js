var smarttableApp = angular.module('smarttableApp', [
  'ngRoute'
]);

smarttableApp.config(['$routeProvider',
                    function($routeProvider) {
                      $routeProvider.
                        when('/home', {
                          templateUrl: 'partials/home.html',
                          controller: 'HomeCtrl'
                        }).
                        
                        otherwise({
                          redirectTo: '/home'
                        });
                    }]);