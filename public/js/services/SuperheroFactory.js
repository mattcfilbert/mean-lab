angular
  .module('superheroes')
  .factory('SuperheroFactory', [
    '$resource',
    SuperheroFactory
  ])

  function SuperheroFactory ($resource) {
    return $resource('/characters/:id', null, {
      update: { method: 'PUT' }
    })
  }
