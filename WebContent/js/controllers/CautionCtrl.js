smarttableApp.controller('CautionCtrl',
		['$scope',
		 '$location',
		 '$timeout',
     function ($scope,
    		 $location,
    		 $timeout){
	
	

	$scope.redirect = function() {
	    $location.path("menu");
	}    

	$timeout(function(){
		$scope.redirect()
		},5000)
	
	
	}]);

