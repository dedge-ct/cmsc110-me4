var isSequential = false;
var themeCounter = 1;
var origArticlesWidth = [];
var origArticlesFloat = [];

function changeTheme() {
    var themeButton = document.getElementById("change-theme");
    themeCounter++;
    switch (themeCounter) {
        case 1:
            themeButton.innerHTML = "Theme: Classic";
            themeButton.style.paddingLeft = "38px";
            themeButton.style.paddingRight = "39px";
            break;
        case 2:
            themeButton.innerHTML = "Theme: Soundcheck";
            themeButton.style.paddingLeft = "20px";
            themeButton.style.paddingRight = "20px";
            changeToSoundcheck();
            break;
        default:
            themeCounter = 0;
            themeButton.innerHTML = "Theme: Vegas";
            themeButton.style.paddingLeft = "42px";
            themeButton.style.paddingRight = "42px";
            changeToVegas();
            break;
    }
}

function changeToSoundcheck() {
    if (isSequential == true){
        var art1 = document.getElementById("article-1");
        art1.style.background = "linear-gradient(to bottom, #000000, #FFFFFF)";
        var art2 = document.getElementById("article-2");
        art2.style.background = "linear-gradient(to bottom, #842493, #5D2A9D)";
        var art3 = document.getElementById("article-3");
        art3.style.background = "linear-gradient(to bottom, #5D2A9D, #386D7F)";
        var art4 = document.getElementById("article-4");
        art4.style.background = "linear-gradient(to bottom, #842493, #5D2A9D, #386D7F)";
        var art5 = document.getElementById("article-5");
        art5.style.background = "linear-gradient(to bottom, #386D7F, #329029)";
        var art6 = document.getElementById("article-6");
        art6.style.background = "linear-gradient(to bottom, #386D7F, #329029)";
    }
    else {
        var art1 = document.getElementById("article-1");
        art1.style.background = "linear-gradient(to bottom, #000000, #bf6e2a, #842493)";
        var art2 = document.getElementById("article-2");
        art2.style.background = "linear-gradient(to bottom, #842493, #5D2A9D)";
        var art3 = document.getElementById("article-3");
        art3.style.background = "linear-gradient(to bottom, #5D2A9D, #386D7F)";
        var art4 = document.getElementById("article-4");
        art4.style.background = "linear-gradient(to bottom, #842493, #5D2A9D, #386D7F)";
        var art5 = document.getElementById("article-5");
        art5.style.background = "linear-gradient(to bottom, #386D7F, #329029)";
        var art6 = document.getElementById("article-6");
        art6.style.background = "linear-gradient(to bottom, #386D7F, #329029)";
    }
}

function changeView() {
    alert("This feature is not available for individual articles.");
}

function openOrderMenu() {
    alert("This feature is not available for individual articles.");
}