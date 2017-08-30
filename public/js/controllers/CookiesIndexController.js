angular.module('cookieMonster')
  .controller('CookiesIndexController', [
    'CookieFactory',
    CookiesIndexFunction
  ])

function CookiesIndexFunction (CookieFactory) {
  this.cookies = CookieFactory.query()
}
