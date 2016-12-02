var app = angular.module('rideShare');
app.controller('homeController', function($scope, $mdSidenav,$mdDialog,$http) {

  $http.get('/post').then(function(data) {
        $scope.posts = data.data;
    })

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

  $scope.showDialog = function(event,type) {
      $mdDialog.show ({
        controller: 'addDialogController',
        templateUrl: 'dialog/addDialog.html',
        targetEvent: event,
        locals: {
            type: type
        },
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