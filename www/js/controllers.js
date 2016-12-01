angular.module('thunder.controllers', ['ionic', 'thunder.services'])

/*
Controller for the discover page
*/
.controller('DiscoverCtrl', function($scope, $timeout, User) {

  $scope.products = [
        {
          "name": "Grilled Fish",
          "tagline": "Simple, Satisfying protein",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_fish.jpg",
          "product_url": "http://nutritiondata.self.com/facts/finfish-and-shellfish-products/4234/2",
          "isGoodSeed": "true"
        },
        {
          "name": "French Fries",
          "tagline": "Get them while they're hot!",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/b_frenchfries.jpg",
          "product_url": "http://nutritiondata.self.com/facts/foods-from-mcdonalds/6235/2",
          "isGoodSeed": "false"
        },
        {
          "name": "Snickers",
          "tagline": "Snickers Satisfies",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/b_snickers.jpg",
          "product_url": "http://nutritiondata.self.com/facts/sweets/5461/2",
          "isGoodSeed": "false"
        },
        {
          "name": "Water",
          "tagline": "Calorie-free, Sodium-free, Hydration",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_water.jpg",
          "product_url": "https://www.producthunt.com/r/b704ae84e992e1/41413?app_id=1948",
          "isGoodSeed": "true"
        },
        {
          "name": "Red Velvet Cake",
          "tagline": "Classic dessert from Southern Cuisine",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/redvelvet.jpeg",
          "product_url": "http://nutritiondata.self.com/facts/recipe/1831535/2",
          "isGoodSeed": "false"
        },
        {
          "name": "Kale",
          "tagline": "An everyday super food",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_kale.jpg",
          "product_url": "http://nutritiondata.self.com/facts/vegetables-and-vegetable-products/2462/2",
          "isGoodSeed": "true"
        },
        {
          "name": "Edamame",
          "tagline": "Steamed with Sea Salt",
          "discussion_url": "https://getforksy.com",
          "thumbnail": "img/g_edmame.jpg",
          "product_url": "http://www.medicalnewstoday.com/articles/280285.php",
          "isGoodSeed": "true"
        }

  ];

  // fixme: shuffle the array
  $scope.products.sort( function() {
    return 0.5 - Math.random()
    });

  // initialize current product to first element of the array
  $scope.currentProduct = angular.copy($scope.products[0]);

  // fire method when we select 'favorite' or 'skip' a product
  $scope.sendFeedback = function(bool) {
      if (bool) User.addProductToFavorites( $scope.currentProduct, $scope.currentProduct.isGoodSeed);
      // set variable for the correct animation
      $scope.currentProduct.rated = bool;
      $scope.currentProduct.hide = true;

      // $timeout module allows animation to complete before changing to next product
      $timeout(function() {
      // REFACTOR: change code to shuffle the array and then iterate through it one time
      // get index of a random product
        var randomProductIndex = Math.round(Math.random() * ($scope.products.length - 1));
        // update current product in $scope
        $scope.currentProduct = angular.copy( $scope.products[randomProductIndex]);
      }, 250);
}


})

/*
Controller for favorites page
*/
.controller('FavoritesCtrl', function($scope, User) {
  $scope.favorites = User.favorites;


  $scope.removeProduct = function( product, index) {
        User.removeProductFromFavorites(product,index);
    }

 // $scope.goodSeedCount = User.getScore();
  $scope.calculateScoreFromFavorites = function () {
    for (i=0; i<$scope.favorites.length; i++) {
      if ($scope.favorites[i].isGoodSeed == "true") {
        $scope.favoritesScore++;

      }
    }
    console.log("Score from FavoritesCtrl = " + $scope.favoritesScore);

    User.setScore( $scope.favoritesScore);
   };

})

/*
Controller for splash page
*/
.controller('SplashCtrl', function($scope) {} )

/*
Controller for tabs
*/
.controller('TabsCtrl', function($scope) {} )

/*
Controller for Garden
*/
.controller('GardenCtrl', function($scope, User) {
  $scope.gardens = [
      {
        "name": "gardenPoor.jpg",
        "path": "img/gardenPoor.jpg",
        "level": "Needs Work",
        "message": "Your garden needs a bit of work, but not all hope is lost! Learn more about healthy alternatives."

       },
       {
          "name": "gardenOK.jpg",
          "path": "img/gardenOK.jpg",
          "level": "Not good, but not really bad",
          "message": "Your garden has some good and bad things growing. Learn about how to add more good things into your choices"
       },
       {
          "name": "gardenExcellent.jpg",
          "path": "img/gardenExcellent.jpg",
          "level": "Great Job! You are making good, healthy choices",
          "message": "Your garden is in great shape, but you should still constantly seek ways to improve. In the meanwhile, give yourself a pat on the back!"
       }
   ];

  $scope.gardenSeeds = User.favorites;
  console.log("GardenCtrl number of cards seen = " + $scope.gardenSeeds.length );

  $scope.score = User.getScore();
  console.log("GardenCtrl score = " + $scope.score);
  $scope.gardenLevel = "";
  $scope.gardenMessage = "";

  // fixme: choose garden image based on the score

  $scope.getGardenImage = function() {
    if ( $scope.score < 7) {
      console.log("Garden needs work!");
      $scope.gardenLevel = $scope.gardens[0].level;
      $scope.gardenMessage = $scope.gardens[0].message;

      return $scope.gardens[0].path;
    }

    if ( $scope.score >= 7 && $scope.score < 15) {
       console.log("Garden is OK!");
       $scope.gardenLevel = $scope.gardens[1].level;
      $scope.gardenMessage = $scope.gardens[1].message;
      return $scope.gardens[1].path;
    }

    else {
      console.log("Garden is healthy!");
      $scope.gardenLevel = $scope.gardens[2].level;
      $scope.gardenMessage = $scope.gardens[2].message;
      return $scope.gardens[2].path;
    }

   };
   

})



/*
Controller for Seed Detail (selected Index)
*/
.controller('DetailCtrl', function($scope, User, index) {
  $scope.detailItem = User.favorites[i];

})



