smarttableApp.controller('EtiquetteCtrl', 
		['$scope', 
		 '$location',
		 function($scope,
				 $location){
			$scope.cuttleryA = {src_small: 'images/4/small/fish_knife.png',src: 'images/4/big/fish_knife.png'};
			$scope.placedCuttleryA = {};
			
			$scope.cuttleryB = {src_small: 'images/4/small/fish_fork.png',src: 'images/4/big/fish_fork.png'};
			$scope.placedCuttleryB = {};
			$scope.cuttleryC = {src_small: 'images/4/small/fork.png',src: 'images/4/big/fork.png'};
			$scope.placedCuttleryC = {};
			$scope.cuttleryD = {src_small: 'images/4/small/knife.png',src: 'images/4/big/knife.png'};
			$scope.placedCuttleryD = {};
			$scope.cuttleryE = {src_small: 'images/4/small/lil_spoon.png',src: 'images/4/big/lil_spoon.png'};
			$scope.placedCuttleryE = {};
			$scope.cuttleryF = {src_small: 'images/4/small/spoon.png',src: 'images/4/big/spoon.png'};
			$scope.placedCuttleryF = {};
			$scope.cuttleryG = {src_small: 'images/4/small/dessert_fork.png',src: 'images/4/big/dessert_fork.png'};
			$scope.placedCuttleryG = {};
			$scope.cuttleryH = {src_small: 'images/4/small/dessert_knife.png',src: 'images/4/big/dessert_knife.png'};
			$scope.placedCuttleryH = {};
			$scope.cuttleryI = {src_small: 'images/4/small/plate.png',src: 'images/4/big/plate.png'};
			$scope.placedCuttleryI = {};
			
			$scope.form = {};
			
			$scope.form.isDisabled = $scope.placedCuttleryB.src;
			
			$scope.nextPage = function(view){
				 $location.path(view);
			 }
		}]); 