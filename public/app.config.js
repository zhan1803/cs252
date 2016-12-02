(function(){
	angular.module('rideShare')
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');

			$stateProvider
				.state('home', {
					url:'/home',
					templateUrl: 'home.html'
				})

				.state('app', {
					url: '/app',
					templateUrl: 'app.html'
				})

		})
})()