angular.module('thunder.controllers', ['ionic', 'thunder.services'])

/*
Controller for the discover page
*/
.controller('DiscoverCtrl', function($scope, $timeout, User) {
$scope.products = [
      {
        "name": "LinkedIn ProFinder",
        "tagline": "A new way to hire freelancers from LinkedIn",
        "discussion_url": "https://www.producthunt.com/tech/linkedin-profinder-2",
        "thumbnail": "https://api.url2png.com/v6/P5329C1FA0ECB6/77fdeb2d4df2c4813d5c61384b22a33f/png/?thumbnail_max_width=850&url=https%3A%2F%2Fgoo.gl%2F1jUSIw",
        "product_url": "https://www.producthunt.com/r/0109266759e0f0/40894?app_id=19",
        "isGoodSeed": "true"
      },
      {
        "name": "K Blocker",
        "tagline": "Kardashian content blocker for iOS",
        "discussion_url": "https://www.producthunt.com/tech/k-blocker",
        "thumbnail": "https://api.url2png.com/v6/P5329C1FA0ECB6/d7a68a8f35cda14414482f82a266e4ac/png/?thumbnail_max_width=850&url=http%3A%2F%2Fkblocker.co",
        "product_url": "https://www.producthunt.com/r/1239ed9df03056/40854?app_id=1948",
        "isGoodSeed": "true"
      },
      {
        "name": "HangoverApp",
        "tagline": "Share photos with friends, only visible when you're together",
        "discussion_url": "https://www.producthunt.com/tech/hangoverapp",
        "thumbnail": "https://api.url2png.com/v6/P5329C1FA0ECB6/f05f2b63763cc446bef17ba748c9e14a/png/?thumbnail_max_width=850&url=http%3A%2F%2Fwww.hangoverapp.com",
        "product_url": "https://www.producthunt.com/r/8a94554894f2bb/40912?app_id=1948",
        "isGoodSeed": "false"
      },
      {
        "name": "Water",
        "tagline": "Calorie-free, Sodium-free, Hydration",
        "discussion_url": "https://getforksy.com",
        "thumbnail": "https://drive.google.com/file/d/0B8bCt6QNkFRVZWl5Nkc4MXZUa28/view?usp=sharing",
        "product_url": "https://www.producthunt.com/r/b704ae84e992e1/41413?app_id=1948",
        "isGoodSeed": "false"
      },
      {
        "name": "Red Velvet Cake",
        "tagline": "Classic dessert from Southern Cuisine",
        "discussion_url": "https://getforksy.com",
        "thumbnail": "https://drive.google.com/open?id=0B8bCt6QNkFRVajJyTE1vZnRLelk",
        "product_url": "http://nutritiondata.self.com/facts/recipe/1831535/2",
        "isGoodSeed": "false"
      },
      {
        "name": "Kale",
        "tagline": "An everyday super food",
        "discussion_url": "https://getforksy.com",
        "thumbnail": "https://drive.google.com/file/d/0B8bCt6QNkFRVSGZhV3ktaFpaYW8/view?usp=sharing",
        "product_url": "http://nutritiondata.self.com/facts/vegetables-and-vegetable-products/2462/2",
        "isGoodSeed": "true"
      },
      {
        "name": "Edamame",
        "tagline": "Steamed with Sea Salt",
        "discussion_url": "https://getforksy.com",
        "thumbnail": "https://drive.google.com/file/d/0B8bCt6QNkFRVYnI5Y0FMTDZnZzg/view?usp=sharing",
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



