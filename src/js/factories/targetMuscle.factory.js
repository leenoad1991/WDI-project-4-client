angular
.module('gymApp')
.factory('TargetMuscleFactory', TargetMuscleFactory);

TargetMuscleFactory.$inject = ['API', '$resource'];
function TargetMuscleFactory(API, $resource){
  return $resource(`${API}/target_muscles/:id`, { id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
