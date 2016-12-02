(function(){
	angular.module('rideShare')
	.controller('addDialogController', function($http,$mdDialog,$filter,type) {
		var vm = this;
		vm.newPost= {
			creationTime: '',
			type: type,
			trip: '',
		};
		vm.post = function() {
			vm.date = new Date();
			vm.date = $filter('date')(vm.date, "dd/MM/yyyy");
			vm.newPost.creationTime = vm.date;
			vm.newPost.trip = vm.trip;
			console.log(vm.newPost);
			$http.put('/post', vm.newPost);
			$mdDialog.hide();
		};

		vm.trip = 'OneWay';
	});
})()