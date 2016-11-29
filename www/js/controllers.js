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

// initialize current product to first element of the array
$scope.currentProduct = angular.copy($scope.products[0]);

// fire method when we select 'favorite' or 'skip' a product
$scope.sendFeedback = function(bool) {
if (bool) User.addProductToFavorites( $scope.currentProduct);

// set variable for the correct animation
$scope.currentProduct.rated = bool;
$scope.currentProduct.hide = true;

// $timeout module allows animation to complete before changing to next product
$timeout(function() {
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

})

/*
Controller for splash page
*/
.controller('SplashCtrl', function($scope) {

})

/*
Controller for tabs
*/
.controller('TabsCtrl', function($scope) {} )

/*
Controller for Garden
*/
.controller('GardenCtrl', function($scope, User) {
  $scope.gardenSeeds = User.favorites;
  // TODO: choose garden image based on the score

  })



/*
Controller for Seed Detail (selected Index)
*/
.controller('DetailCtrl', function($scope, User, index) {
  $scope.detailItem = User.favorites[i];

})



