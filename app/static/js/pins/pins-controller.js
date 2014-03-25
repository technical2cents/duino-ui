'use strict';

angular.module('duinoflask')
    .controller('PinsController', ['$scope', '$http',
function ($scope,$http)
{
    $scope.pins = [];

    $http.get('/duinoflask/pins')
        .success(function (data) {
          $scope.pins = data;
            console.log($scope.pins);
        });

    $scope.onLabel = 'On';
    $scope.offLabel = 'Off';
    $scope.updateState = function(state,id,name) {
        console.log(name+" with ID : "+id+" has a state of '" + state+"'");
        $http.post('/duinoflask/pins',{"id":id,"pinName":name,"state":state})
            .success(function (data) {

                console.log(data);
            });

    };

}]);
