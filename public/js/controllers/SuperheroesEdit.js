angular
  .module('superheroes')
  .controller('SuperheroesEdit', [
    '$state',
    '$stateParams',
    'SuperheroFactory',
    SuperheroesEdit
  ])

  function SuperheroesEdit ($state, $stateParams, SuperheroFactory) {
    this.superhero = SuperheroFactory.get({ id: $stateParams.id })
    this.updateHero = function () {
      this.superhero.$update({ id: $stateParams.id })
        .then((res) => {
          $state.go('superheroesShow', { id: res._id }, { reload: true })
        })
    }
    this.destroyHero = function () {
      this.superhero.$delete({ id: $stateParams.id })
        .then((res) => {
          $state.go('superheroesIndex')
        })
    }
  }
