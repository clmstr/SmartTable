smarttableApp.controller('SlideShowCtrl',['$scope',
     function ($scope){
	$scope.myInterval = 5000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length + 1;
	    slides.push({
	      image: 'http://placekitten.com/' + newWidth + '/300',
	      
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }
	
	
	
	}]);
