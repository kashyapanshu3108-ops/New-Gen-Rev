// कृषि Scan - Main Application JavaScript
// PAGE LOAD
document.addEventListener("DOMContentLoaded", function () {
    console.log("कृषि Scan Loaded");
    // RESTORE DARK MODE

    const savedTheme = localStorage.getItem("krishiTheme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // PROFILE SETTINGS

    const darkModeButton =
        document.getElementById("darkModeButton");
    const languageButton =
        document.getElementById("languageButton");
    const notificationButton =
        document.getElementById("notificationButton");
    const supportButton =
        document.getElementById("supportButton");
    const aboutButton =
        document.getElementById("aboutButton");

    // DARK MODE

    if (darkModeButton) {
        darkModeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            if (
                document.body.classList.contains("dark-mode")
            ) {
                localStorage.setItem(
                    "krishiTheme",
                    "dark"
                );
            } else {

                localStorage.setItem(
                    "krishiTheme",
                    "light"
                );
            }
        });
    }

    // LANGUAGE

    if (languageButton) {

        languageButton.addEventListener("click", function () {

            alert(
                "🌐 Language settings\n\nHindi / English support will be added soon."
            );

        });

    }


    // NOTIFICATIONS

    if (notificationButton) {

        notificationButton.addEventListener("click", function () {

            alert(
                "🔔 Notifications\n\nNotifications are currently enabled."
            );

        });

    }


    // SUPPORT

    if (supportButton) {

        supportButton.addEventListener("click", function () {

            alert(
                "📞 Support\n\nFor this prototype, support information will be available soon."
            );

        });

    }


    // ABOUT

    if (aboutButton) {

        aboutButton.addEventListener("click", function () {

            alert(
                "🌾 कृषि Scan\n\nAI-powered crop disease detection prototype."
            );

        });

    }



    // HISTORY SEARCH

    const historySearch =
        document.getElementById("historySearch");

    const historyCards =
        document.querySelectorAll(".history-card");

    const filterButtons =
        document.querySelectorAll(".filter-btn");


    let currentFilter = "all";


    function filterHistory() {

        const searchText =
            historySearch
                ? historySearch.value.toLowerCase().trim()
                : "";


        historyCards.forEach(function (card) {

            const cardText =
                card.innerText.toLowerCase();

            const cardType =
                card.dataset.type || "all";

            const cardDate =
                Number(card.dataset.date || 0);


            // SEARCH MATCH

            const searchMatch =
                cardText.includes(searchText);


            // FILTER MATCH

            let filterMatch = true;


            if (currentFilter === "disease") {

                filterMatch =
                    cardType === "disease";

            }


            if (currentFilter === "healthy") {

                filterMatch =
                    cardType === "healthy";

            }


            if (currentFilter === "recent") {

                filterMatch =
                    cardDate <= 3;

            }


            // FINAL RESULT

            if (
                searchMatch &&
                filterMatch
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    }


    // SEARCH EVENT

    if (historySearch) {

        historySearch.addEventListener(
            "input",
            filterHistory
        );

    }


    // FILTER EVENTS

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            currentFilter =
                button.dataset.filter || "all";


            filterHistory();

        });

    });


});