smarttableApp.controller('GundelCtrl',
		['$scope',
		 '$location',
     function ($scope
    		 ,$location){
	$scope.myInterval = 5000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth =  slides.length + 1;
	    slides.push({
	      image: 'images/7/pic' + newWidth + '.png',
	      
	    });
	  };
	  for (var i=0; i<3; i++) {
	    $scope.addSlide();
	  }
	
	  $scope.nextPage = function(view){
			 $location.path(view);
		 }
	
	}]);
