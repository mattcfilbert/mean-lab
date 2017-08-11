angular
  .module('superheroes')
  .controller('SuperheroesIndex', [
    'SuperheroFactory',
    SuperheroesIndex
  ])


  function SuperheroesIndex (SuperheroFactory) {
    console.log('at index')
    this.superheroes = SuperheroFactory.query()
  }
