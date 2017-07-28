//$ things are angular define things
// $scope is a glue b/w view and controller
// $scope is a predefine object (service)

app.controller("finderCtrl", function ($scope, finderFactory) {
    $scope.findNow = function () {
        document.getElementById("loading").style.display = "block";
        document.getElementById("container").style.display = "none";
        var playerId = $scope.player;
        var promise = finderFactory.callServer(playerId);
        for (var i = 1; i <= 10; i++) {
            console.log("Loop is Going On ..." + i);
        }
        $scope.done = "Loop is Done.....";
        promise.then(function (data) {
            console.log(data);
            $scope.country = data.data.country;
            $scope.playerImage = data.data.imageURL;
            $scope.name = data.data.fullName;
            $scope.bowlingStyle = data.data.bowlingStyle;
            $scope.battingStyle = data.data.battingStyle;
            $scope.testRecord = data.data.data.batting.tests;
            $scope.odiRecord = data.data.data.batting.ODIs;
            $scope.t20Record = data.data.data.batting.T20Is;
            var image = document.getElementById("pImage").src = $scope.playerImage;
            
            console.log("source of the image = " + $scope.playerImage);
            
            document.getElementById("loading").style.display = "none";
            
            document.getElementById("container").style.display = "block";
            
        }, function (error) {
            $scope.result = error;
        });
        //        document.getElementById("playerImg").setAttribute("src", $scope.playerImage);
    }
})