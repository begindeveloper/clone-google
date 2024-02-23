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

    const form = document.querySelector("#advanced-form");
    const advancedButton = document.querySelector("#advanced-button");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const allWords = encodeURIComponent(form.all.value);
        const exactWords = encodeURIComponent(form.exact.value);
        const anyWords = encodeURIComponent(form.any.value);
        const noneWords = encodeURIComponent(form.none.value);
        
        const searchURL = `https://www.google.com/search?all=${allWords}&exact=${exactWords}&any=${anyWords}&none=${noneWords}`;
        
        window.location.href = searchURL;
    });

    $("#image-search-form").submit(function(event) {
        event.preventDefault();
        $("#image-results").empty();
        
        const query = encodeURIComponent($("#search-bar").val());
        const apiKey = "YOUR_GOOGLE_CUSTOM_SEARCH_API_KEY";
        const cx = "YOUR_CUSTOM_SEARCH_ENGINE_ID";
        const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&key=${apiKey}&searchType=image`;
        
        $.getJSON(url, function(data) {
            const items = data.items;
            if (items) {
                items.forEach(function(item) {
                    const imageUrl = item.link;
                    const img = $("<img>").attr("src", imageUrl);
                    $("#image-results").append(img);
                });
            }
        });
    });



