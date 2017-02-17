app.controller("cricctrl", function ($scope, crickFactory) {
    $scope.searchByPid = function () {
        $scope.showIt = false;
        var playerId = $scope.playerId;
        var promise = crickFactory.serverCall(playerId);
        promise.then(function (data) {
            $scope.result = data;
            $scope.showIt = true;
        }, function (error) {
            $scope.error = data;
        })
    }
})