var app = angular.module('rideShare');
app.controller('homeController', function($scope, $mdSidenav,$mdDialog,$http,$timeout,$window) {

  $http.get('/post').then(function(data) {
        $scope.posts = data.data;
    })

  $scope.type='lookup';

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
      }).then(function() {
        $timeout(function(){
            console.log('hi');
            $window.location.reload();
        }, 200)
      })

  }

  $scope.showDetail = function(event, post) {
      $mdDialog.show ({
        controller: 'viewDialogController',
        templateUrl: 'dialog/viewDialog.html',
        targetEvent: event,
        locals: {
            post: post
        },
        controllerAs: 'viewDialogVM',
        clickOutsideToClose:true
      })
  }
});



/*
 function openNav() {
 document.getElementById("mySidenav").style.width = "250px";
 }

 */