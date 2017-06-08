angular
.module('gymApp')
.factory('MuscleGroupFactory', MuscleGroupFactory);

MuscleGroupFactory.$inject = ['API', '$resource'];
function MuscleGroupFactory(API, $resource){
  return $resource(`${API}/muscle_groups/:id`, { id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
