angular
  .module('gymApp')
  .controller('TargetMuscleShowCtrl', TargetMuscleShowCtrl);
TargetMuscleShowCtrl.$inject = ['TargetMuscleFactory', '$stateParams'];
function TargetMuscleShowCtrl(TargetMuscleFactory, $stateParams) {
  const vm = this;
  console.log('HERE')
  vm.targetMuscle = TargetMuscleFactory.get($stateParams);
}
