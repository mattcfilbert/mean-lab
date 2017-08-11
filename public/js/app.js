console.log('linked')

angular.module('superheroes', [
  'ui.router',
  'ngResource'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  Router
])


function Router ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('superheroesIndex', {
      url: '/heroes',
      controller: 'SuperheroesIndex',
      controllerAs: 'vm',
      templateUrl: '/assets/js/views/SuperheroesIndex.html'
    })
    .state('superheroesShow', {
      url: '/heroes/:id',
      controller: 'SuperheroesShow',
      controllerAs: 'vm',
      templateUrl: '/assets/js/views/SuperheroesShow.html'
    })
  $urlRouterProvider.otherwise('/heroes')
  $locationProvider.html5Mode(true)
}
