angular
.module('gymApp')
.filter('trusted', Trusted);

Trusted.$inject = ['$sce'];
function Trusted($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
}
