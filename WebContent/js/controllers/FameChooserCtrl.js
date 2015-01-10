smarttableApp.controller('FameChooserCtrl', 
		['$scope', 
		 '$location',
		 function($scope,
				 $location){
			$scope.nextPage = function(view){
				 $location.path(view);
			 }
		}]); 