angular
  .module('gymApp')
  .controller('MuscleGroupsShowCtrl', MuscleGroupsShowCtrl);
MuscleGroupsShowCtrl.$inject = ['MuscleGroupFactory', '$stateParams'];
function MuscleGroupsShowCtrl(MuscleGroupFactory, $stateParams) {
  const vm = this;
  vm.muscleGroup = MuscleGroupFactory.get($stateParams);
}
