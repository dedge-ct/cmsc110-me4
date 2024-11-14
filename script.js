//Used for identifying selected theme
var isSequential = false;
var themeCounter = 1;   //1 - Classic, 2 - Soundcheck, 3 - Vegas

//Changes the view between columned and sequential
function changeView() {
    var btn = document.getElementById("change-view");
    //Columned to sequential
    if (!isSequential) {
        btn.innerHTML = "Layout: Sequential";
        btn.style.paddingLeft = "10px";
        btn.style.paddingLeft = "10px";
        changeToSequential();
        isSequential = true;
        //Preserves the theme when switching views
        switch (themeCounter) {
            case 1:
                changeToClassic();
                break;
            case 2:
                changeToSoundcheck();
                break;
            default:
                changeToVegas();
                break;
        }
    }
    //Sequential to columned
    else {
        btn.innerHTML = "Layout: Columned";
        btn.style.paddingLeft = "13px";
        btn.style.paddingRight = "14px";
        changeToColumned();
        isSequential = false;
        //Preserves the theme when switching views
        switch (themeCounter) {
            case 1:
                changeToClassic();
                break;
            case 2:
                changeToSoundcheck();
                break;
            default:
                changeToVegas();
                break;
        }
    }

}

//Opens the article order selector
function openOrderMenu() {
    document.getElementById("article-order-menu").style.display = "inline";
}

//Closes the article order selector
function closeOrderMenu(){
    document.getElementById("article-order-menu").style.display = "none";
}

//Cycles between the 3 themes
function changeTheme() {
    var themeButton = document.getElementById("change-theme");
    themeCounter++;
    switch (themeCounter) {
        case 1:
            themeButton.innerHTML = "Theme: Classic";
            themeButton.style.paddingLeft = "38px";
            themeButton.style.paddingRight = "39px";
            changeToClassic();
            break;
        case 2:
            themeButton.innerHTML = "Theme: Soundcheck";
            themeButton.style.paddingLeft = "20px";
            themeButton.style.paddingRight = "20px";
            changeToSoundcheck();
            break;
        default:
            themeCounter = 0;   //Resets the counter
            themeButton.innerHTML = "Theme: Vegas";
            themeButton.style.paddingLeft = "42px";
            themeButton.style.paddingRight = "42px";
            changeToVegas();
            break;
    }
}

//Changes the theme to classic
function changeToClassic() {

    var newspaper = document.getElementById("newspaper");
    var newsHeader = document.getElementById("news-header");
    var dateHeader = document.getElementById("date-header");
    var orderSelector = document.getElementById("article-order-selector");

    //Changes the background of the newspaper
    newspaper.style.backgroundImage = "url(Pictures/classic_bg.jpg)";

    //Changes the font of the newspaper
    newspaper.style.fontFamily = "Montserrat";

    //Changes the header to match with the theme
    newsHeader.style.background = "#385959";
    newsHeader.style.color = "black";
    newsHeader.style.textShadow = "none";
    newsHeader.style.fontFamily = "Montserrat";
    dateHeader.style.background = "#385959";
    document.getElementById("date").style.color = "black";
    newsHeader.style.borderBottomColor = "#2e4646";
    newsHeader.style.borderTopColor = "#2e4646";
    newsHeader.style.borderBottomColor = "#2e4646";
    dateHeader.style.borderBottomColor = "#2e4646";

    //Changes the background and border color of each article
    const articles = document.getElementsByClassName("articles");
    for(var i = 0; i < articles.length; i++) {
        articles[i].style.backgroundImage = "url(Pictures/classic_bg_light.png)";
        articles[i].style.borderColor = "#2e4646";
    }

    //Matches the main menu with the theme
    document.getElementById("panel").style.background = "#385959";
    document.getElementById("panel").style.borderColor = "#2e4646";

    var menuButtons = document.getElementsByClassName("customize-button");
    //Changes the color of each button
    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].style.background = "#385959";
    }

    //Matches the article order selector with the theme
    orderSelector.style.background = "#385959";
    orderSelector.style.borderColor = "#2e4646";

    //Changes the hover color of each button to match with the theme
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

     //Changes the hover color of each article title individually to match with the theme
    const hoverText1 = document.getElementById("article-1-title");
    hoverText1.addEventListener("mouseover", function() {
        hoverText1.style.color = "#4ca6a6";
    });
    hoverText1.addEventListener("mouseout", function() {
        hoverText1.style.color = "black";
    });

    const hoverText2 = document.getElementById("article-2-title");
    hoverText2.addEventListener("mouseover", function() {
        hoverText2.style.color = "#4ca6a6";
    });
    hoverText2.addEventListener("mouseout", function() {
        hoverText2.style.color = "black";
    });

    const hoverText3 = document.getElementById("article-3-title");
    hoverText3.addEventListener("mouseover", function() {
        hoverText3.style.color = "#4ca6a6";
    });
    hoverText3.addEventListener("mouseout", function() {
        hoverText3.style.color = "black";
    });

    const hoverText5 = document.getElementById("article-5-title");
    hoverText5.addEventListener("mouseover", function() {
        hoverText5.style.color = "#4ca6a6";
    });
    hoverText5.addEventListener("mouseout", function() {
        hoverText5.style.color = "black";
    });

    const hoverText6 = document.getElementById("article-6-title");
    hoverText6.addEventListener("mouseover", function() {
        hoverText6.style.color = "#4ca6a6";
    });
    hoverText6.addEventListener("mouseout", function() {
        hoverText6.style.color = "black";
    });
}

//Changes the theme to Soundcheck
function changeToSoundcheck() {

    var newspaper = document.getElementById("newspaper");
    var newsHeader = document.getElementById("news-header");
    var dateHeader = document.getElementById("date-header");
    var orderSelector = document.getElementById("article-order-selector");
    //Changes the background of the newspaper
    newspaper.style.backgroundImage = "url(https://i.pinimg.com/736x/5c/2b/97/5c2b97e3b0250e641232468759e8c176.jpg)";

    //Changes the font of the newspaper
    newspaper.style.fontFamily = "Irish Grover";

    //Changes the header to match with the theme
    const title = document.getElementById("news-header");
    title.style.backgroundImage = "url(https://i.pinimg.com/originals/b0/c2/98/b0c2988dae6c0f5b02e7433021a91f39.gif)";
    title.style.backgroundPosition = "bottom";
    title.style.backgroundRepeat = "no-repeat";
    title.style.backgroundSize = "cover";
    title.style.backgroundAttachment = "fixed";
    newsHeader.style.fontFamily = "Tilt Prism";
    newsHeader.style.color = "violet";
    newsHeader.style.textShadow = "5px 5px 1px #ff0173, 10px 10px 1px darkviolet";
    document.getElementById("date").style.color = "violet";
    newsHeader.style.borderTopColor = "#d94c99";
    newsHeader.style.borderBottomColor = "#d94c99";
    dateHeader.style.borderBottomColor = "#d94c99";

    const headerDate = document.getElementById("date-header");
    headerDate.style.backgroundPosition = "bottom";
    headerDate.style.backgroundRepeat = "no-repeat";
    headerDate.style.backgroundSize = "cover";
    headerDate.style.backgroundAttachment = "fixed";
    headerDate.style.backgroundImage = "url(https://i.pinimg.com/originals/b0/c2/98/b0c2988dae6c0f5b02e7433021a91f39.gif)";
    headerDate.style.backgroundImage = "url(https://i.pinimg.com/originals/b0/c2/98/b0c2988dae6c0f5b02e7433021a91f39.gif)";

    //Makes sure that the gradient is preserved when view is sequential
    if (isSequential == true) {
        const art1 = document.getElementById("article-1");
        art1.style.background = "linear-gradient(to bottom, #FFFFFF, #481359, #842493)";
        const art2 = document.getElementById("article-2");
        art2.style.background = "linear-gradient(to bottom, #842493, #5D2A9D)";
        const art3 = document.getElementById("article-3");
        art3.style.background = "linear-gradient(to bottom, #5D2A9D, #293496)";
        const art4 = document.getElementById("article-4");
        art4.style.background = "linear-gradient(to bottom, #293496, #386D7F)";
        const art5 = document.getElementById("article-5");
        art5.style.background = "linear-gradient(to bottom, #386D7F, #2F847C)";
        const art6 = document.getElementById("article-6");
        art6.style.background = "linear-gradient(to bottom, #2F847C, #329029)";
        const hoverText4 = document.getElementById("article-4-title");
        hoverText4.addEventListener("mouseover", function() {
            hoverText4.style.color = "skyblue";
        });
        hoverText4.addEventListener("mouseout", function() {
            hoverText4.style.color = "black";
        });
    }
    //Makes sure that the gradient is preserved when view is columned
    else {
        const art1 = document.getElementById("article-1");
        art1.style.background = "linear-gradient(to bottom, #000000, #481359, #842493)";
        const art2 = document.getElementById("article-2");
        art2.style.background = "linear-gradient(to bottom, #842493, #5D2A9D)";
        const art3 = document.getElementById("article-3");
        art3.style.background = "linear-gradient(to bottom, #5D2A9D, #386D7F)";
        const art4 = document.getElementById("article-4");
        art4.style.background = "linear-gradient(to bottom, #842493, #5D2A9D, #386D7F)";
        const art5 = document.getElementById("article-5");
        art5.style.background = "linear-gradient(to bottom, #386D7F, #329029)";
        const art6 = document.getElementById("article-6");
        art6.style.background = "linear-gradient(to bottom, #386D7F, #329029)";
        const hoverText4 = document.getElementById("article-4-title");
        hoverText4.addEventListener("mouseover", function() {
            hoverText4.style.color = "violet";
        });
        hoverText4.addEventListener("mouseout", function() {
            hoverText4.style.color = "black";
        });

    }

    //Changes border color of each article
    const articles = document.getElementsByClassName("articles");
    for(var i = 0; i < articles.length; i++) {
        articles[i].style.borderColor = "#4A2080";
    }

    //Matches the main menu with the theme
    document.getElementById("panel").style.background = "linear-gradient(to bottom, #842493, #5D2A9D)";
    document.getElementById("panel").style.borderColor = "#4A2080";
    var menuButtons = document.getElementsByClassName("customize-button");
    //Changes the color of each button
    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].style.background = "linear-gradient(to bottom, #842493, #5D2A9D)";
    }

    //Matches the article order selector with the theme
    orderSelector.style.background = "linear-gradient(to bottom, #842493, #5D2A9D)";
    orderSelector.style.borderColor = "#4A2080";

    //Changes the hover color of each button to match with the theme
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


    //Changes the hover color of each article title individually to match with the gradient of the theme
    const hoverText1 = document.getElementById("article-1-title");
    hoverText1.addEventListener("mouseover", function() {
        hoverText1.style.color = "#b45dbb";
    });
    hoverText1.addEventListener("mouseout", function() {
        hoverText1.style.color = "black";
    });

    const hoverText2 = document.getElementById("article-2-title");
    hoverText2.addEventListener("mouseover", function() {
        hoverText2.style.color = "violet";
    });
    hoverText2.addEventListener("mouseout", function() {
        hoverText2.style.color = "black";
    });

    const hoverText3 = document.getElementById("article-3-title");
    hoverText3.addEventListener("mouseover", function() {
        hoverText3.style.color = "#B399D4";
    });
    hoverText3.addEventListener("mouseout", function() {
        hoverText3.style.color = "black";
    });

    const hoverText5 = document.getElementById("article-5-title");
    hoverText5.addEventListener("mouseover", function() {
        hoverText5.style.color = "aquamarine";
    });
    hoverText5.addEventListener("mouseout", function() {
        hoverText5.style.color = "black";
    });

    const hoverText6 = document.getElementById("article-6-title");
    hoverText6.addEventListener("mouseover", function() {
        hoverText6.style.color = "aquamarine";
    });
    hoverText6.addEventListener("mouseout", function() {
        hoverText6.style.color = "black";
    });
}

function changeToVegas() {
    var newspaper = document.getElementById("newspaper");
    var newsHeader = document.getElementById("news-header");
    var dateHeader = document.getElementById("date-header");
    var orderSelector = document.getElementById("article-order-selector");
    //Changes the background of the newspaper
    newspaper.style.backgroundImage = "url(https://i.pinimg.com/736x/5f/27/ee/5f27ee60c94c3cd772bb2477efed55d7.jpg)";

    //Changes the font of the newspaper
    document.getElementById("newspaper").style.fontFamily = "Onest";

    //Changes the header to match with the theme
    const title = document.getElementById("news-header");
    title.style.backgroundImage = "url(https://i.pinimg.com/originals/68/77/44/687744bbd2a0bf5fd5027ec11a1eeebe.gif)";
    const headerDate = document.getElementById("date-header");
    headerDate.style.backgroundImage = "url(https://i.pinimg.com/originals/68/77/44/687744bbd2a0bf5fd5027ec11a1eeebe.gif)";
    newsHeader.style.color = "#0DDB9D";
    newsHeader.style.fontFamily = "Lobster";
    newsHeader.style.textShadow = "3px 3px 1px blue, 6px 6px 1px purple";
    document.getElementById("date").style.color = "lightgreen";
    newsHeader.style.borderTopColor = "#73d8ca";
    newsHeader.style.borderBottomColor = "#73d8ca";
    dateHeader.style.borderBottomColor = "#73d8ca";


    //Makes sure that the gradient is preserved when view is sequential
    if (isSequential == true){
        const art1 = document.getElementById("article-1");
        art1.style.background = "linear-gradient(to bottom, #000000, #73D8CA, #6499B9)";
        const art2 = document.getElementById("article-2");
        art2.style.background = "linear-gradient(to bottom, #6499B9, #A080E1)";
        const art3 = document.getElementById("article-3");
        art3.style.background = "linear-gradient(to bottom, #A080E1, #DEB3CB)";
        const art4 = document.getElementById("article-4");
        art4.style.background = "linear-gradient(to bottom, #DEB3CB, #F5A4C5)";
        const art5 = document.getElementById("article-5");
        art5.style.background = "linear-gradient(to bottom, #F5A4C5, #E5CCF4)";
        const art6 = document.getElementById("article-6");
        art6.style.background = "linear-gradient(to bottom, #E5CCF4, #DDD5DC)";
        const hoverText4 = document.getElementById("article-4-title");
        hoverText4.addEventListener("mouseover", function() {
            hoverText4.style.color = "#cc72c4";
        });
        hoverText4.addEventListener("mouseout", function() {
            hoverText4.style.color = "black";
        });
    }
    //Makes sure that the gradient is preserved when view is columned
    else {
        const art1 = document.getElementById("article-1");
        art1.style.background = "linear-gradient(to bottom, #000000, #73D8CA, #6499B9)";
        const art2 = document.getElementById("article-2");
        art2.style.background = "linear-gradient(to bottom, #6499B9, #A080E1)";
        const art3 = document.getElementById("article-3");
        art3.style.background = "linear-gradient(to bottom, #A080E1, #DEB3CB)";
        const art4 = document.getElementById("article-4");
        art4.style.background = "linear-gradient(to bottom, #6499b9, #A080E1, #DEB3CB)";
        const art5 = document.getElementById("article-5");
        art5.style.background = "linear-gradient(to bottom, #DEB3CB, #DDD5DC)";
        const art6 = document.getElementById("article-6");
        art6.style.background = "linear-gradient(to bottom, #DEB3CB, #DDD5DC)";

        const hoverText4 = document.getElementById("article-4-title");
        hoverText4.addEventListener("mouseover", function() {
            hoverText4.style.color = "#8cd9ff";
        });
        hoverText4.addEventListener("mouseout", function() {
            hoverText4.style.color = "black";
        });
    }

    //Changes border color of each article
    const articles = document.getElementsByClassName("articles");
    for(var i = 0; i < articles.length; i++) {
        articles[i].style.borderColor = "#4F7B95";
    }    

    //Matches the main menu with the theme
    document.getElementById("panel").style.background = "linear-gradient(to bottom, #6499B9, #A080E1)";
    document.getElementById("panel").style.borderColor = "#4F7B95";
    
    var menuButtons = document.getElementsByClassName("customize-button");
    //Changes the color of each button
    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].style.background = "linear-gradient(to bottom, #6499B9, #A080E1)";
    }

    //Matches the article order selector with the theme
    orderSelector.style.background = "linear-gradient(to bottom, #6499B9, #A080E1)";
    orderSelector.style.borderColor = "#4F7B95";
    
    //Changes the hover color of each button to match with the theme
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

     //Changes the hover color of each article title individually to match with the gradient of the theme
    const hoverText1 = document.getElementById("article-1-title");
    hoverText1.addEventListener("mouseover", function() {
        hoverText1.style.color = "#009dd1";
    });
    hoverText1.addEventListener("mouseout", function() {
        hoverText1.style.color = "black";
    });

    const hoverText2 = document.getElementById("article-2-title");
    hoverText2.addEventListener("mouseover", function() {
        hoverText2.style.color = "#8cd9ff";
    });
    hoverText2.addEventListener("mouseout", function() {
        hoverText2.style.color = "black";
    });

    const hoverText3 = document.getElementById("article-3-title");
    hoverText3.addEventListener("mouseover", function() {
        hoverText3.style.color = "#7554ae";
    });
    hoverText3.addEventListener("mouseout", function() {
        hoverText3.style.color = "black";
    });

    const hoverText5 = document.getElementById("article-5-title");
    hoverText5.addEventListener("mouseover", function() {
        hoverText5.style.color = "hotpink";
    });
    hoverText5.addEventListener("mouseout", function() {
        hoverText5.style.color = "black";
    });

    const hoverText6 = document.getElementById("article-6-title");
    hoverText6.addEventListener("mouseover", function() {
        hoverText6.style.color = "hotpink";
    });
    hoverText6.addEventListener("mouseout", function() {
        hoverText6.style.color = "black";
    });
}

//Store each article's original content when the page loads
var originalContentMap = {};


function articleInfo() {
    const articles = document.querySelectorAll(".articles"); //Get node list
    //Get the data from each article in the node list 
    articles.forEach(article => {
        const articleAttribute = article.getAttribute("data-article");
        originalContentMap[articleAttribute] = {
            imgSrc: article.querySelector("img")?.src || "",
            titleText: article.querySelector(".article-title")?.textContent || "",
            linkHref: article.querySelector(".article-title")?.href || "",
            authorText: article.querySelector(".article-author")?.textContent || "",
            infoText: article.querySelector(".article-body")?.innerHTML || "",
        };
    });
}

document.addEventListener("DOMContentLoaded", articleInfo()); //Load HTML page and get all data

//Reorders each article to selected order
function reorderArticles() {
    const newOrder = [];
    //Get selected articles from the dropdown lists
    for (let i = 1; i <= 6; i++) {
        const select = document.getElementById(`article${i}`);
        const value = select.value;
        //Check if all articles are selected, else return an error
        if (value == 0) {
            alert("Please select an article.");
            return;
        }
        newOrder.push(value);
    }

    //Check if all articles are unique using a set, else return an error
    const selectedArticleSet = new Set(newOrder);
    if (selectedArticleSet.size != newOrder.length) {
        alert("Two or more of the same articles were selected. Please try again.");
        return 0;
    }

    const articles = Array.from(document.getElementsByClassName("articles")); // Converts to an array

    //Rearrange article content based on new order
    newOrder.forEach((articleAttribute, index) => {
        const article = articles[index];
        const newContent = originalContentMap[articleAttribute];

        //Update image
        const img = article.querySelector("img");
        if (img) {
            img.src = newContent.imgSrc;
        }
        //Update title
        const title = article.querySelector(".article-title");
        if (title) {
            title.textContent = newContent.titleText;
            title.href= newContent.linkHref;
        }
        //Update author
        const author = article.querySelector(".article-author");
        if (author) {
            author.textContent = newContent.authorText;
        }
        //Update text
        const info = article.querySelector(".article-body");
        if (info) {
            info.innerHTML = newContent.infoText;
        }
    });

    //Hide the order selection menu when finished
    document.getElementById("article-order-menu").style.display = "none";
}

//Reverts the order of the article to its original order
function defaultOrder() {
    const articles = document.querySelectorAll(".articles");
    
    articles.forEach(article => {
        const num = article.getAttribute("data-article");
        const originalNews = originalContentMap[num]; // Retrieve the original content
    
        //Restore image
        const img = article.querySelector("img");
        if (img) {
            img.src = originalNews.imgSrc;
        }
        //Restore title
        const title = article.querySelector(".article-title");
        if (title) {
            title.textContent = originalNews.titleText;
            title.href = originalNews.linkText;
        }
        //Restore author
        const author = article.querySelector(".article-author");
        if (author) {
            author.textContent = originalNews.authorText;
        }
        //Restore body text
        const info = article.querySelector(".article-body");
        if (info) {
            info.innerHTML = originalNews.infoText;
        }
    });

    document.getElementById("article-order-menu").style.display = "none";
}

//Use the CSS file for sequential news
function changeToSequential() {
    document.getElementById("css-link").href = "styles-sequential.css";
}

//Use the CSS file for columned news
function changeToColumned() {
    document.getElementById("css-link").href = "styles.css";
}