smarttableApp.controller('BadAnswerAlertModalCtrl', function ($scope, $modal, $log) {

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'partials/bad_answer_alert.html',
      controller: 'BadAnswerAlertModalInstanceCtrl',
      size: size,
      resolve: {
       
        
      }
    });

    modalInstance.result.then(function () {

    }, function () {
     
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

smarttableApp.controller('BadAnswerAlertModalInstanceCtrl', function ($scope, $modalInstance) {



  $scope.ok = function () {
	  $modalInstance.dismiss('cancel');
  };
});