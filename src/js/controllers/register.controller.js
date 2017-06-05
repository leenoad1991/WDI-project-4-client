angular
.module('gymApp')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['userFactory', 'CurrentUserService', '$state'];
function RegisterCtrl(userFactory, CurrentUserService, $state){
  const vm = this;

  vm.register = () => {
    console.log('clicked');
    userFactory
    .register(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
      $state.go('home');
    }, err => {
      console.log(err);
    });
  };
}
