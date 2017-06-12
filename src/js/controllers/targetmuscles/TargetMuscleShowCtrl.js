angular
  .module('gymApp')
  .controller('TargetMuscleShowCtrl', TargetMuscleShowCtrl);
TargetMuscleShowCtrl.$inject = ['TargetMuscleFactory', '$stateParams', 'CurrentUserService', 'Comment'];
function TargetMuscleShowCtrl(TargetMuscleFactory, $stateParams, CurrentUserService, Comment) {
  const vm = this;

  vm.targetMuscle = TargetMuscleFactory.get($stateParams);
  console.log(vm.targetMuscle);

  vm.createComment = function(id) {
    vm.comment.user_id = CurrentUserService.currentUser.id;
    vm.comment.video_id = id;
    console.log(vm.comment);
    Comment.save(vm.comment)
    .$promise
    .then(window.location.reload());
  };
}
