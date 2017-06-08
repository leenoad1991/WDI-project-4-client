angular
  .module('gymApp')
  .controller('TargetMuscleIndexCtrl', TargetMuscleIndexCtrl);
TargetMuscleIndexCtrl.$inject = ['TargetMuscleFactory'];
function TargetMuscleIndexCtrl(TargetMuscleFactory) {
  const vm = this;
  vm.targetMuscle = TargetMuscleFactory.query();
}
