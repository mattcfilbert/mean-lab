angular.module('cookieMonster')
  .factory('CookieFactory', [
    '$resource',
    CookieFactory
  ])

function CookieFactory ($resource) {
  return $resource('/api/cookies/:id', null, {
    update: {method: 'PUT'}
  })
}
