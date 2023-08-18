document.addEventListener("DOMContentLoaded", function() {
    const luckyButton = document.getElementById("lucky-button");
    const searchBar = document.getElementById("search-bar");

    luckyButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        const query = searchBar.value;
        if (query) {
            const luckyURL = "https://www.google.com/search?q=" + encodeURIComponent(query) + "&btnI";
            window.location.href = luckyURL;
        }
    });

    const googleLogoUrls = [
        'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png',
        'https://img.freepik.com/free-icon/google_318-258270.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/1200px-Google_logo_%282013-2015%29.svg.png',
        // Add more URLs as needed
    ];

    // Function to get a random index from the array
    function getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    // Get a random Google logo image URL
    const randomGoogleLogoUrl = googleLogoUrls[getRandomIndex(googleLogoUrls)];

    // Set the random Google logo image URL as the source of the image element
    const googleLogoImage = document.getElementById('google-logo');
    googleLogoImage.src = randomGoogleLogoUrl;
});

