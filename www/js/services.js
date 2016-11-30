angular.module('thunder.services', [])
.factory('User', function() {
  var o = {
      favorites: []

    }

    o.goodSeedCount = 0;

    o.addProductToFavorites = function(product) {
    // make sure there is a prouduct to add
    if( !product) return false;

      // add to favorites array / page
      o.favorites.unshift(product);
      // fixme: increment score if item isGoodSeed == true
      if (product.isGoodSeed) {
          o.goodSeedCount++;
        }


    }

    o.removeProductFromFavorites = function(product, index) {
      if (!product) return false;

      o.favorites.splice(index, 1);
      // fixme: decrement score if item isGoodSeed == true
      if (product.isGoodSeed) {
          o.goodSeedCount--;
        }
    }

    o.getScore = function() {
        return o.goodSeedCount;
      }

    return o;


    })
;


