angular
  .module('superheroes')
  .controller('SuperheroesShow', [
    '$stateParams',
    'SuperheroFactory',
    SuperheroesShow
  ])

  function SuperheroesShow ($stateParams, SuperheroFactory) {
    this.superhero = SuperheroFactory.get({id: $stateParams.id})
    console.log(this.superhero)
  }
