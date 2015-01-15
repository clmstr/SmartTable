smarttableApp.controller('FinalCtrl',
		['$scope',
		 '$location',
		 '$timeout',
     function ($scope,
    		 $location,
    		 $timeout){
	
	

	$scope.redirect = function() {
	    $location.path("home");
	}    

	$timeout(function(){
		$scope.redirect()
		},5000)
	
	
	}]);

