/**
 * Created by arif on 10/4/16.
 */
var mainApp=angular.module("mainApp",[]);

mainApp.controller('studentController',function($scope){
    $scope.reset = function(){
        $scope.firstName = "mohammadarif";
        $scope.lastName = "mujawar";
        $scope.email = "arifmr91@gmail.com";
    }
    $scope.reset();
})