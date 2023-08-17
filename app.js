document.addEventListener("DOMContentLoaded", function() {
    const luckyButton = document.getElementById("lucky-button");
        const searchBar = document.getElementById("search-bar");

        luckyButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission

            const query = searchBar.value;
            if (query) {
                const luckyURL = "https://www.google.com/search?q=" + encodeURIComponent(query) + "&btnI";
                window.location.href = luckyURL;
            }
        });
    });
