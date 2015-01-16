smarttableApp.controller('ElementChooserCtrl',['$scope',
                                             '$location',
     function ($scope, 
    		 $location){
		
	
	
		$scope.formats = [100,200,30,400];
		 
		 
		 $scope.nextPage = function(view){
			 
			 if (($scope.format1 == 100)&&
					 ($scope.format2 == 200)&&
					 ($scope.format3 == 30)&&
					 ($scope.format4 == 400)
			 
			 )
				 $location.path(view);
		 }
		 
	
	}]);

