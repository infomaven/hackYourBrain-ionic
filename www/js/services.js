angular.module('thunder.services', [])
.factory('User', function() {
  var o = {
      favorites: []

    }

    o.goodSeedCount = 0;
    o.cumulativeCount = 0;


    o.addProductToFavorites = function(product, isGoodSeed) {
      // make sure there is a product to add
      if( !product) return false;

        // add to favorites array / page
        o.favorites.unshift(product);
        // fixme: increment score if item isGoodSeed == true
        if (product.isGoodSeed == "true") {
            o.goodSeedCount++;
            o.cumulativeCount++;
            console.log("good seed count = " + o.goodSeedCount);
          }
        else {
          // bad choices do not count towards final score
          o.cumulativeCount++;
        }
    }

    o.removeProductFromFavorites = function(product, index, isGoodSeed) {
      if (!product) return false;

      o.favorites.splice(index, 1);
      if (product.isGoodSeed == "true") {
         o.goodSeedCount--;
         console.log("good seed removed. count = " + o.goodSeedCount);
        }
    }

    o.getScore = function() {
        return o.goodSeedCount;
      }

    o.setScore = function(calculatedScore) {
      o.goodSeedCount = calculatedScore;
     }

    return o;


    })
;




