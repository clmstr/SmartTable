smarttableApp.controller('EtiquetteQuizCtrl',
		['$scope',
		 '$location',
     function ($scope,
    		 $location){
     	$scope.validForm = false;
     
		badAnswer = function(){};
		goodAnswer = function(){
			$scope.validForm = true;		
		};
		
		$scope.nextPage = function(view){
			 $location.path(view);
		 }
		
	}]);