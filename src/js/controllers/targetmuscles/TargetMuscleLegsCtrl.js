angular
  .module('gymApp')
  .controller('TargetMuscleLegsCtrl', TargetMuscleLegsCtrl);
TargetMuscleLegsCtrl.$inject = ['LegsFactory'];
function TargetMuscleLegsCtrl(LegsFactory) {
  const vm = this;
  vm.legs = LegsFactory.query();
}
