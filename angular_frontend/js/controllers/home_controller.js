var frontEndApp = angular.module('FrontEnd');

frontEndApp.controller('homeController', ['$scope','ApiService', function ($scope, ApiService) {

  $scope.initializationData = "Successfully Initialized";

  ApiService.getTestData().then(function(results){
    $scope.testData = results.data;
  }, function(error){
    $scope.testData = "error - failed to get data from the node api - are you sure your node server is running?";                           
  });

  $scope.postData = function(userData) {
    ApiService.postTestData(userData).then(function(response){
      $scope.postReult= "sucessfully posted data to the node api";
    }, function(error){
      $scope.postReult= "error - failed to post data to the node api";
    });
  };

}])

;
