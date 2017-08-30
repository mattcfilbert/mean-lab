angular.module('cookieMonster')
  .controller('CookiesShowController', [
    '$stateParams',
    'CookieFactory',
    CookiesShowFunction
  ])

function CookiesShowFunction
 ($stateParams, CookieFactory) {
   this.cookie = CookieFactory.get({id: $stateParams.id})
 }
