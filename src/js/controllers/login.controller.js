angular
.module('gymApp')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['userFactory', 'TokenService', '$state'];
function LoginCtrl(userFactory, TokenService, $state) {
  const vm = this;

  vm.login = () => {
    userFactory
    .login(vm.user).$promise
    .then(() => {
      $state.go('home');
    }, err => {
      console.log(err);
    });
  };
}
