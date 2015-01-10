smarttableApp.controller('EtiquetteCtrl', 
		['$scope', 
		 '$location',
		 function($scope,
				 $location){
			$scope.cuttleryA = {src_small: 'images/4/small/fish_knife.png',src: 'images/4/fish_knife.png'};
			$scope.placedCuttleryA = {};
			
			$scope.cuttleryB = {src_small: 'images/4/small/fish_fork.png',src: 'images/4/fish_fork.png'};
			$scope.placedCuttleryB = {};
			$scope.cuttleryC = {src_small: 'images/4/small/fork.png',src: 'images/4/fork.png'};
			$scope.placedCuttleryC = {};
			$scope.cuttleryD = {src_small: 'images/4/small/knife.png',src: 'images/4/knife.png'};
			$scope.placedCuttleryD = {};
			$scope.cuttleryE = {src_small: 'images/4/small/lil_spoon.png',src: 'images/4/lil_spoon.png'};
			$scope.placedCuttleryE = {};
			$scope.cuttleryF = {src_small: 'images/4/small/spoon.png',src: 'images/4/spoon.png'};
			$scope.placedCuttleryF = {};
			$scope.cuttleryG = {src_small: 'images/4/small/dessert_fork.png',src: 'images/4/dessert_fork.png'};
			$scope.placedCuttleryG = {};
			$scope.cuttleryH = {src_small: 'images/4/small/dessert_knife.png',src: 'images/4/dessert_knife.png'};
			$scope.placedCuttleryH = {};
			
			
			
			
			$scope.nextPage = function(view){
				 $location.path(view);
			 }
		}]); 