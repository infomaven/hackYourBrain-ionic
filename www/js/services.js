angular.module('thunder.services', [])
.factory('User', function() {
  var o = {
      favorites: []

    }

    o.goodSeedCount = 0;

    o.addProductToFavorites = function(product, isGoodSeed) {
      // make sure there is a product to add
      if( !product) return false;

        // add to favorites array / page
        o.favorites.unshift(product);
        // fixme: increment score if item isGoodSeed == true
        if (product.isGoodSeed == "true") {
            o.goodSeedCount++;
            console.log("good seed count = " + o.goodSeedCount);
          }


    }

    o.removeProductFromFavorites = function(product, index, isGoodSeed) {
      if (!product) return false;

      o.favorites.splice(index, 1);
      // fixme: decrement score if item isGoodSeed == true
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

.factory('FoodList', function() {
  var foods = [
        {
          "name": "Grilled Fish",
          "tagline": "Simple, Satisfying protein",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_fish.jpg",
          "product_url": "http://nutritiondata.self.com/facts/finfish-and-shellfish-products/4234/2",
          "isGoodSeed": true
        },
        {
          "name": "French Fries",
          "tagline": "Fries - Get them while they're hot!",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/b_frenchfries.jpg",
          "product_url": "http://nutritiondata.self.com/facts/foods-from-mcdonalds/6235/2",
          "isGoodSeed": false
        },
        {
          "name": "Snickers",
          "tagline": "Snickers Satisfies",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/b_snickers.jpg",
          "product_url": "http://nutritiondata.self.com/facts/sweets/5461/2",
          "isGoodSeed": false
        },
        {
          "name": "Water",
          "tagline": "Water - Calorie-free, Sodium-free, Hydration",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_water.jpg",
          "product_url": "https://www.producthunt.com/r/b704ae84e992e1/41413?app_id=1948",
          "isGoodSeed": true
        },
        {
          "name": "Red Velvet Cake",
          "tagline": "Red Velvet Cake - Classic dessert from Southern Cuisine",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/redvelvet.jpeg",
          "product_url": "http://nutritiondata.self.com/facts/recipe/1831535/2",
          "isGoodSeed": false
        },
        {
          "name": "Kale",
          "tagline": "An everyday super food",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_kale.jpg",
          "product_url": "http://nutritiondata.self.com/facts/vegetables-and-vegetable-products/2462/2",
          "isGoodSeed": true
        },
        {
          "name": "Edamame",
          "tagline": "Soybeans - Steamed with Sea Salt",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_edmame.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": true
        },
        {
          "name": "Baloney",
          "tagline": "Cold cuts - Processed meat",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/b_baloney.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": false
        },
        {
          "name": "Coke",
          "tagline": "Coke- It's the real thing",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/b_coca_cola.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": false
        },
        {
          "name": "Cookies",
          "tagline": "Cookies - shhh..don't tell Cookie Monster!",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/b_cookies.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": false
        },
        {
          "name": "Donuts",
          "tagline": "VooDoo, Blue Star, Winchells, Dolly Madison",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/b_donuts.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": false
        },
        {
          "name": "Frappucino",
          "tagline": "Sweet blended coffee drinks",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/b_frappucino.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": false
        },
        {
          "name": "PotatoChips",
          "tagline": "These can be baked, but what's the point?",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/b_PotatoChips.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": false
        },
        {
          "name": "Carrots",
          "tagline": "Bugs Bunny would be proud!",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_carrots.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": true
        },
        {
          "name": "Nuts",
          "tagline": "Nuts - Low fat, raw is best",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_nuts.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": true
        },
        {
          "name": "Popcorn",
          "tagline": "Popcorn - high fiber, crunchy, salty...yum!",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_popcorn.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": true
        },
        {
          "name": "Veggies",
          "tagline": "Steamed, sauteed, boiled or baked - Veggies rock!",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_veggies.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": true
        },
        {
          "name": "Milk",
          "tagline": "Drink regularly to build strong bones and teeth",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_milk.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": true
        },
        {
          "name": "Eggs",
          "tagline": "Eggs - Nature's perfect food",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_eggs.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": true
        }
  ];
  var selectedForGame = [];
  GAME_LENGTH = 12;
  /**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
  var shuffle = function (array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  }
  // shuffle in place
  shuffle(foods);
  // create game list as a subset  
  selectedForGame = shuffle(foods.slice(0, GAME_LENGTH - 1));

  return getMenu: function() {
    return selectedForGame; 
  }
})
;


