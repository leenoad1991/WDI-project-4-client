
angular
.module('gymApp')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'vm'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/user/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  })
  .state('show', {
    url: '/show',
    templateUrl: 'js/views/show.html',
    controller: 'ShowCtrl',
    controllerAs: 'vm'
  })
  .state('edit', {
    url: '/edit',
    templateUrl: 'js/views/user/edit.html',
    controller: 'EditCtrl',
    controllerAs: 'vm'
  })
  .state('index', {
    url: '/index',
    templateUrl: 'js/views/index.html',
    controller: 'IndexCtrl',
    controllerAs: 'vm'
  })
  .state('muscleGroupsIndex', {
    url: '/musclegroups',
    templateUrl: 'js/views/musclegroups/index.html',
    controller: 'MuscleGroupsIndexCtrl',
    controllerAs: 'vm'
  })
  .state('muscleGroupsShow', {
    url: '/musclegroups/:id',
    templateUrl: 'js/views/musclegroups/show.html',
    controller: 'MuscleGroupsShowCtrl',
    controllerAs: 'vm'
  })
  .state('targetMusclesIndex', {
    url: '/targetmuscles',
    templateUrl: 'js/views/targetmuscles/index.html',
    controller: 'TargetMuscleIndexCtrl',
    controllerAs: 'vm'
  })
  .state('targetMusclesShow', {
    url: '/targetmuscles/:id',
    templateUrl: 'js/views/targetmuscles/show.html',
    controller: 'TargetMuscleShowCtrl',
    controllerAs: 'vm'
  });

  $urlRouterProvider.otherwise('/');
}
