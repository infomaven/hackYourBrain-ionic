angular.module('thunder.services', [])
.factory('User', function() {
  var o = {
    favorites: []
    }

    o.addProductToFavorites = function(product) {
    // make sure there is a prouduct to add
    if( !product) return false;

    // add to favorites array / page
    o.favorites.unshift(product);
    }

    o.removeProductFromFavorites = function(product, index) {
      if (!product) return false;

      o.favorites.splice(index, 1);
    }
    return o;
    })
;


