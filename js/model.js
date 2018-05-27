// Factory Contains the Logic
// And Factory Always return the object
// Factory Compute or Fetch Something and wrap everything in object
app.factory("finderFactory", function ($http, $q) {
    var object = {};
    object.callServer = function (playerId) {
        var defered = $q.defer();
        var url = "https://cricapi.com/api/playerStats?pid=" + playerId + "&&apikey=MzRo95088EUzvTTW2snM0Kxxrii1";
        //var url = "http://cricapi.com/api/matches&&apikey=MzRo95088EUzvTTW2snM0Kxxrii1";
        $http.get(url).then(success, fail);

        function success(data) {
            console.log(data);
            defered.resolve(data);
        }

        function fail(error) {
            defered.reject(error);
        }
        return defered.promise;
        //return "I Call Server";
    }
    return object;
})
