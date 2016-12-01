var app = angular.module('rideShare');
app.controller('SideNavController', function($scope, $mdSidenav,$mdDialog) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
  $scope.openOfferMenu = function() {
    $mdSidenav('offer').toggle();
  };
  $scope.openLookUpMenu = function() {
    $mdSidenav('lookup').toggle();
  };
  $scope.openAboutUsMenu = function() {
    $mdSidenav('aboutus').toggle();
  };
  $scope.openContactMenu = function() {
    $mdSidenav('contact').toggle();
  };

  $scope.showDialog = function(event) {
      $mdDialog.show({
        controller: 'addDialogController',
        templateUrl: 'dialog/addDialog.html',
        targetEvent: event,
        controllerAs: 'dialogVM',
        clickOutsideToClose:true
      })

  }
});



/*
 function openNav() {
 document.getElementById("mySidenav").style.width = "250px";
 }

 */