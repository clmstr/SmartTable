smarttableApp.controller('HomeCtrl',
		['$scope',
		 '$location',
		 '$timeout',
     function ($scope,
    		 $location,
    		 $timeout){
	
	

	$scope.redirect = function() {
	    $location.path("begin");
	}    

	$timeout(function(){
		$scope.redirect()
		},5000)
	
	
	}]);

