angular
  .module('gymApp')
  .controller('MuscleGroupsIndexCtrl', MuscleGroupsIndexCtrl);
MuscleGroupsIndexCtrl.$inject = ['MuscleGroupFactory'];
function MuscleGroupsIndexCtrl(MuscleGroupFactory) {
  const vm = this;
  vm.muscleGroups = MuscleGroupFactory.query();
}
