angular.module('cookieMonster')
  .controller('CookiesNewController', [
    '$state',
    'CookieFactory',
    CookiesNewFunction
  ])

function CookiesNewFunction ($state, CookieFactory) {
  this.cookie = new CookieFactory()
  this.createCookie = () => {
    this.cookie.$save().then((res) => {
      $state.go('cookiesShow', {id: res._id})
    })
  }
}
