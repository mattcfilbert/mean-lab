angular.module('cookieMonster')
  .factory('CookieFactory', [
    '$resource',
    CookieFactory
  ])

function CookieFactory ($resource) {
  return $resource('/cookies/:id', null, {
    update: {method: 'PUT'},
    query: {method: 'GET', isArray:true}
  })
}
