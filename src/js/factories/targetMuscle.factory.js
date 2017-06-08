angular
.module('gymApp')
.factory('TargetMuscleFactory', TargetMuscleFactory);

TargetMuscleFactory.$inject = ['API', '$resource'];
function TargetMuscleFactory(API, $resource){
  return $resource(`${API}/muscle_groups/:id`, { id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
