(function(){
	angular.module('rideShare')
	.controller('addDialogController', function($http,$mdDialog) {
		var vm = this;
		vm.post = function() {
			console.log(vm.newPost);
			$http.put('/post', vm.newPost);
			$mdDialog.hide();
		};

		vm.type = 'OneWay';
	});
})()