smarttableApp.controller('CuttleryQuizCtrl',['$scope',
                                             '$location',
     function ($scope, 
    		 $location){
		 $scope.pic1 = {src: 'images/3_1/deszertkes.png',
			 			text:'DESZERTKÉS'};
		 $scope.pic1Cont = {};
		 $scope.pic2 = {src: 'images/3_1/evokes.png',
			 				text:'EVŐKÉS'};
		 $scope.pic2Cont = {};
		 $scope.pic3 = {src: 'images/3_1/halkes.png',
	 				text:'HALKÉS'};
		 $scope.pic3Cont = {};
		 
		 
		 //cutterlyquiz_2
		 $scope.pic4 = {src: 'images/3_2/deszertvilla.png',
			 			text:'DESZERTVILLA'};
		 $scope.pic4Cont = {};
		 $scope.pic5 = {src: 'images/3_2/evovilla.png',
			 				text:'EVŐVILLA'};
		 $scope.pic5Cont = {};
		 $scope.pic6 = {src: 'images/3_2/halvilla.png',
					text:'HALVILLA'};
		 $scope.pic6Cont = {};
		 
		 
		 $scope.nextPage = function(view){
			 $location.path(view);
		 }
		 
	
	}]);

