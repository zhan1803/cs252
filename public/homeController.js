var app = angular.module('rideShare');
app.controller('SideNavController', function($scope, $mdSidenav) {
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
});



/*
 function openNav() {
 document.getElementById("mySidenav").style.width = "250px";
 }

 */