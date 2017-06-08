angular
.module('gymApp')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['userFactory', 'CurrentUserService', '$state'];
function LoginCtrl(userFactory, CurrentUserService, $state) {
  const vm = this;

  vm.login = () => {
    userFactory
    .login(vm.user).$promise
    .then(() => {
      CurrentUserService.getUser();
      $state.go('home');
    }, err => {
      console.log(err);
    });
  };
}
