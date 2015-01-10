smarttableApp.controller('BeginTheGameCtrl',
		['$scope',
		 '$location',
     function ($scope,
    		 $location){
	
	
	
	$scope.nextPage = function(view){
		 $location.path(view);
	 }
	}]);

