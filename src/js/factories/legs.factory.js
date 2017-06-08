angular
.module('gymApp')
.factory('LegsFactory', LegsFactory);

LegsFactory.$inject = ['API', '$resource'];
function LegsFactory(API, $resource){
  return $resource(`${API}/muscle_groups/:id`, { id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
