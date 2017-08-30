/* global angular */

angular.module('cookieMonster', [
  'ui.router', 'ngResource'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  Router
])

function Router ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('cookiesIndex', {
      url: '/cookies',
      controller: 'CookiesIndexController',
      controllerAs: 'vm',
      templateUrl: '/js/views/CookiesIndex.html'
    })
    .state('cookiesNew', {
      url: '/cookies/new',
      controller: 'CookiesNewController',
      controllerAs: 'vm',
      templateUrl: '/js/views/CookiesNew.html'
    })
    .state('cookiesShow', {
      url: '/cookies/:id',
      controller: 'CookiesShowController',
      controllerAs: 'vm',
      templateUrl: '/js/views/CookiesShow.html'
    })
    .state('cookiesEdit', {
      url: '/cookies/:id/edit',
      controller: 'CookiesEditController',
      controllerAs: 'vm',
      templateUrl: '/js/views/CookiesEdit.html'
    })
  $urlRouterProvider.otherwise('/cookies')
  $locationProvider.html5Mode(true)
}
