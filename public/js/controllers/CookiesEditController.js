angular.module('cookieMonster')
  .controller('CookiesEditController', [
    '$state',
    '$stateParams',
    'CookieFactory',
    CookiesEditFunction
  ])

function CookiesEditFunction ($state, $stateParams, CookieFactory) {
  this.cookie = CookieFactory.get({id: $stateParams.id})
  this.updateCookie = function () {
    console.log(this.cookie)
    this.cookie.$update({id: $stateParams.id}, (res) => {
      $state.go('cookiesShow', {id: res._id}, {reload: true})
    })
  }
  this.destroyCookie = function () {
    this.cookie.$delete({id: $stateParams.id})
      .then((res) => {
        $state.go('cookiesIndex')
      })
  }
}
