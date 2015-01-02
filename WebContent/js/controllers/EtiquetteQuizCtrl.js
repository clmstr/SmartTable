smarttableApp.controller('EtiquetteQuizCtrl',['$scope',
     function ($scope){
     	$scope.validForm = false;
     
		badAnswer = function(){};
		goodAnswer = function(){
			$scope.validForm = true;		
		};
		
	}]);