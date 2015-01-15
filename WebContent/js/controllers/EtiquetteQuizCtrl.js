smarttableApp.controller('EtiquetteQuizCtrl',
		['$scope',
		 '$location',
     function ($scope,
    		 $location){
			
			
			$scope.form={validForm : false};

     
		badAnswer = function(){};
		
		
		$scope.nextPage = function(view){
			 $location.path(view);
		 }
		
	}]);