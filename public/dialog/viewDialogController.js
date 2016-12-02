(function(){
	angular.module('rideShare')
	.controller('viewDialogController', function($http,$mdDialog,$filter,post) {
		var vm = this;
		vm.post = post;
	});
})()