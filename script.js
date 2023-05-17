// My Quotes :
// Man is what he is thinking all day long
// Why should I settle when other men wont?
// Fotune favours the Bold.
// You should reach to a point where you do assessment EVERYDAY!
// You miss a 100% of shots that you dont take.

var links = {
    "Github": "https://github.com",
    "LinkedIn": "https://www.linkedin.com/feed/",
    "Youtube": "https://www.youtube.com",
    "Insta": "https://www.instagram.com",
    "Notion": "https://www.notion.so/Personal-Dashboard-9e4e324d581443caa4d4f50ac247cf52",
    "ChatGPT": "https://chat.openai.com/",
    "Calendar": "https://calendar.google.com/calendar/u/0/r",
    "Google": "https://www.google.com/"
};

// For Header
// Updates the Greetings
function updateGreetings() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    if (currentHour >= 6 && currentHour < 12) {
        greeting = "Morning";
        lines = "You Own the Day, Boy!"
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Afternoon";
        lines = "What are you planning to do next?"
    } else if (currentHour >= 18 && currentHour < 22) {
        greeting = "Evening";
        lines = "End your day with Something good!"
    } else {
        greeting = "Night";
        lines = "Time to wrap, Boy!"
    }

    document.querySelector('.wishes').textContent = 'Good ' + greeting + '! Jill';
    document.querySelector('.lines').textContent = lines;
}

// Update the greetings immediately
updateGreetings();

// For Time Section
// Function for updating time
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var timeString =
        hours.toString().padStart(2, '0') +
        ':' +
        minutes.toString().padStart(2, '0')


    document.querySelector('.time').textContent = timeString;
}

// Update the time immediately
updateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

// For Search Bar
document.getElementById("search-input").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        var query = event.target.value.toLowerCase();
        var searchUrl = searchMapping[query];

        if (searchUrl) {
            window.location.href = searchUrl; // Redirect to the mapped URL
        } else {
            searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
            window.location.href = searchUrl; // Redirect to Google search page
        }
    }
});


document.getElementById("search-input").addEventListener("blur", function (event) {
    var query = event.target.value;
    var currentUrl = window.location.href;
    localStorage.setItem(query, currentUrl); // Store the URL for the search query
});


// For Shortcuts
for(var link in links) {
    var linkDiv = document.createElement("div");
    linkDiv.className = "link-item";
    var linkElement = document.createElement("a");
    linkElement.className = "link";
    linkElement.href = links[link];
    linkElement.target = "_blank";
    linkElement.textContent = link;
    linkDiv.appendChild(linkElement);
    document.querySelector(".shortcut-links").appendChild(linkDiv);
}

// Optionally, you can also add previous slide functionality
function previousSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide();
}
