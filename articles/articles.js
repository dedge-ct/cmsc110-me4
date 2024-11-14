//Used for identifying selected theme
var themeCounter = 1;

//Cycles between the 3 themes
function changeTheme() {
    var themeButton = document.getElementById("change-theme");
    themeCounter++;
    switch (themeCounter) {
        //Changes to Classic theme
        case 1:
            themeButton.innerHTML = "Theme: Classic";
            themeButton.style.paddingLeft = "38px";
            themeButton.style.paddingRight = "39px";
            changeToClassic();
            break;
        //Changes to Soundcheck theme
        case 2:
            themeButton.innerHTML = "Theme: Soundcheck";
            themeButton.style.paddingLeft = "20px";
            themeButton.style.paddingRight = "20px";
            changeToSoundcheck();
            break;
        //Changes to Vegas theme
        default:
            themeCounter = 0;
            themeButton.innerHTML = "Theme: Vegas";
            themeButton.style.paddingLeft = "42px";
            themeButton.style.paddingRight = "42px";
            changeToVegas();
            break;
    }
}

//Changes the theme of the individual article to classic
function changeToClassic() {
    var menuButtons = document.getElementsByClassName("customize-button");

    //Change background images
    document.getElementById("article-div").style.backgroundImage = "url(../Pictures/classic_bg_light.png";
    document.getElementById("newspaper").style.backgroundImage = "url(../Pictures/classic_bg.jpg)";

    //Change the header style
    document.getElementById("div-header").style.background = "#385959";
    document.getElementById("div-header").style.fontFamily = "Montserrat";
    document.getElementById("div-header").style.textShadow = "none";
    document.getElementById("div-header").style.borderColor = "#2e4646";

    //Change the article content style
    document.getElementById("article-div").style.borderColor = "#2e4646";
    document.getElementById("article-div").style.fontFamily = "Montserrat";
    document.getElementById("category").style.color = "#385959";
    document.getElementById("caption").style.color = "#595959";
    
    //Change menu theme
    document.getElementById("panel").style.background = "#385959";
    document.getElementById("panel").style.borderColor = "#2e4646";
    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].style.background = "#385959";
    }

    //Change color of buttons when hovering
    const hoverView = document.getElementById("change-view");
    hoverView.addEventListener("mouseover", function() {
        hoverView.style.background = "#528484";
    });
    hoverView.addEventListener("mouseout", function() {
        hoverView.style.background = "#385959";
    });
    const hoverOrder = document.getElementById("change-order");
    hoverOrder.addEventListener("mouseover", function() {
        hoverOrder.style.background = "#528484";
    });
    hoverOrder.addEventListener("mouseout", function() {
        hoverOrder.style.background = "#385959";
    });
    const hoverTheme = document.getElementById("change-theme");
    hoverTheme.addEventListener("mouseover", function() {
        hoverTheme.style.background = "#528484";
    });
    hoverTheme.addEventListener("mouseout", function() {
        hoverTheme.style.background = "#385959";
    });
}

//Changes the theme of the individual article to soundcheck
function changeToSoundcheck() {
    var menuButtons = document.getElementsByClassName("customize-button");

    //Change background images and style
    document.getElementById("article-div").style.background = "linear-gradient(to bottom, #481359, #842493, #5D2A9D, #293496, #386D7F, #2F847C, #329029)";
    document.getElementById("newspaper").style.backgroundImage = "url(https://i.pinimg.com/736x/5c/2b/97/5c2b97e3b0250e641232468759e8c176.jpg)";

    //Change the header style
    document.getElementById("div-header").style.background = "linear-gradient(to right, #842493, #293496, #386D7F)";
    document.getElementById("div-header").style.fontFamily = "Tilt Prism";
    document.getElementById("div-header").style.textShadow = "5px 5px 1px #ff0173, 10px 10px 1px darkviolet";
    document.getElementById("div-header").style.borderColor = "#4A2080";

    //Change the article content style
    document.getElementById("article-div").style.borderColor = "#4A2080";
    document.getElementById("article-div").style.fontFamily = "Irish Grover";
    document.getElementById("category").style.color = "violet";
    document.getElementById("caption").style.color = "darkgray";

    //Change menu theme
    document.getElementById("panel").style.background = "linear-gradient(to bottom, #842493, #5D2A9D)";
    document.getElementById("panel").style.borderColor = "#4A2080";
    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].style.background = "linear-gradient(to bottom, #842493, #5D2A9D)";
        console.log("lmao");
    }
    //Change color of menu buttons when hovering
    const hoverView = document.getElementById("change-view");
    hoverView.addEventListener("mouseover", function() {
        hoverView.style.background = "#8078a5";
    });
    hoverView.addEventListener("mouseout", function() {
        hoverView.style.background = "linear-gradient(to bottom, #842493, #5D2A9D)";
    });
    const hoverOrder = document.getElementById("change-order");
    hoverOrder.addEventListener("mouseover", function() {
        hoverOrder.style.background = "#8078a5";
    });
    hoverOrder.addEventListener("mouseout", function() {
        hoverOrder.style.background = "linear-gradient(to bottom, #842493, #5D2A9D)";
    });
    const hoverTheme = document.getElementById("change-theme");
    hoverTheme.addEventListener("mouseover", function() {
        hoverTheme.style.background = "#8078a5";
    });
    hoverTheme.addEventListener("mouseout", function() {
        hoverTheme.style.background = "linear-gradient(to bottom, #842493, #5D2A9D)";
    });

}

//Changes the theme of the individual article to vegas
function changeToVegas() {
    menuButtons = document.getElementsByClassName("customize-button");

    //Change the background images and style
    document.getElementById("article-div").style.background = "linear-gradient(to bottom, #DDD5DC, #E5CCF4, #F5A4C5, #DEB3CB, #A080E1, #6499B9, #73D8CA)";
    document.getElementById("newspaper").style.backgroundImage = "url(https://i.pinimg.com/736x/5f/27/ee/5f27ee60c94c3cd772bb2477efed55d7.jpg)";

    //Change the header style
    document.getElementById("div-header").style.background = "linear-gradient(to right, #DDD5DC, #F5A4C5, #E5CCF4)";
    document.getElementById("div-header").style.fontFamily = "Lobster";
    document.getElementById("div-header").style.textShadow = "3px 3px 1px blue, 6px 6px 1px purple";
    document.getElementById("div-header").style.borderColor = "#4F7B95";

    //Change the article content style
    document.getElementById("article-div").style.borderColor = "#4F7B95";
    document.getElementById("article-div").style.fontFamily = "Onest";
    document.getElementById("category").style.color = "#4F7B95";
    document.getElementById("caption").style.color = "#d94c99";

    //Change menu theme
    document.getElementById("panel").style.background = "linear-gradient(to bottom, #6499B9, #A080E1)";
    document.getElementById("panel").style.borderColor = "#4F7B95";
    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].style.background = "linear-gradient(to bottom, #6499B9, #A080E1)";
    }
    //Change color of menu buttons when hovering
    const hoverView = document.getElementById("change-view");
    hoverView.addEventListener("mouseover", function() {
        hoverView.style.background = "#73D8CA";
    });
    hoverView.addEventListener("mouseout", function() {
        hoverView.style.background = "linear-gradient(to bottom, #6499B9, #A080E1)";
    });
    const hoverOrder = document.getElementById("change-order");
    hoverOrder.addEventListener("mouseover", function() {
        hoverOrder.style.background = "#73D8CA";
    });
    hoverOrder.addEventListener("mouseout", function() {
        hoverOrder.style.background = "linear-gradient(to bottom, #6499B9, #A080E1)";
    });
    const hoverTheme = document.getElementById("change-theme");
    hoverTheme.addEventListener("mouseover", function() {
        hoverTheme.style.background = "#73D8CA";
    });
    hoverTheme.addEventListener("mouseout", function() {
        hoverTheme.style.background = "linear-gradient(to bottom, #6499B9, #A080E1)";
    });
}

//Alert the user that the other functions are unavailable
function changeView() {
    alert("This feature is not available for individual articles.");
}

function openOrderMenu() {
    alert("This feature is not available for individual articles.");
}

