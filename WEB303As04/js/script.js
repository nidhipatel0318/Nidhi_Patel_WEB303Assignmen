/*  /*
    Assignment #4
    {Nidhi Patel}
*/

$(function () {
    // Check if geolocation is supported
    if ('geolocation' in navigator) {
        // Check if geolocation permission is granted
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var accuracy = position.coords.accuracy;

            // Create and append a div to display the current location
            var locationDiv = document.createElement('div');
            locationDiv.textContent = 'Current Location: ' + latitude + ', ' + longitude;
            document.getElementById('content').appendChild(locationDiv);

            // Create and append a div to display accuracy
            var accuracyDiv = document.createElement('div');
            accuracyDiv.textContent = 'Accuracy: ' + accuracy + ' meters';
            document.getElementById('content').appendChild(accuracyDiv);

            // Create and append a div to display latitude
            var latitudeDiv = document.createElement('div');
            latitudeDiv.textContent = 'Latitude: ' + latitude;
            document.getElementById('content').appendChild(latitudeDiv);

            // Create and append a div to display longitude
            var longitudeDiv = document.createElement('div');
            longitudeDiv.textContent = 'Longitude: ' + longitude;
            document.getElementById('content').appendChild(longitudeDiv);

            // Get the last location visited from local storage
            var lastVisited = localStorage.getItem('lastVisitedLocation');

            if (lastVisited) {
                // Create and append a div to display the last visited location
                var lastVisitedDiv = document.createElement('div');
                lastVisitedDiv.textContent = 'Last visited location: ' + lastVisited;
                document.getElementById('content').appendChild(lastVisitedDiv);

                // Calculate the distance between the current and last visited locations in meters
                var lastVisitedCoords = lastVisited.split(', ');
                var distanceMeters = calcDistanceBetweenPoints(latitude, longitude, parseFloat(lastVisitedCoords[0]), parseFloat(lastVisitedCoords[1]));

                // Convert distance to kilometers and display it
                var distanceKilometers = (distanceMeters / 1000).toFixed(2);

                // Create and append a div to display the distance traveled
                var distanceDiv = document.createElement('div');
                distanceDiv.textContent = 'You traveled ' + distanceKilometers + ' km since your last visit.';
                document.getElementById('content').appendChild(distanceDiv);
            } else {
                // If no last location visited, it's the user's first visit
                var welcomeHeader = document.createElement('h2');
                welcomeHeader.textContent = 'Welcome to the page for the first time!';
                document.getElementById('content').appendChild(welcomeHeader);
            }

            // Store the current location in local storage
            localStorage.setItem('lastVisitedLocation', latitude + ', ' + longitude);
        }, function (error) {
            // Handle geolocation errors
            console.error('Geolocation error:', error);

            // Display an error message
            var locationDiv = document.createElement('div');
            locationDiv.textContent = 'Geolocation permission denied. Please allow geolocation to use this application.';
            document.getElementById('content').appendChild(locationDiv);
        });
    } else {
        // Geolocation is not supported
        var locationDiv = document.createElement('div');
        locationDiv.textContent = 'Geolocation is not supported by your browser.';
        document.getElementById('content').appendChild(locationDiv);
    }

    // Function to calculate distance between two lat/long pairs on Earth
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in meters
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});
