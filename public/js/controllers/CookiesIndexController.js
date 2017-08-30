angular.module('cookieMonster')
  .controller('CookiesIndexController', [
    'CookieFactory',
    CookiesIndexFunction
  ])

function CookiesIndexFunction (CookieFactory) {
  console.log('Index page!!!  COIOOKOOKOKOOOOOKIEESESESS')
  console.log(CookieFactory.query())
  this.cookies = CookieFactory.query()
}
