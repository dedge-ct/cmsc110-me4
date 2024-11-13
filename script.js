var isSequential = false;
var themeCounter = 1;
var origArticlesWidth = [];
var origArticlesFloat = [];


function changeView() {
    var btn = document.getElementById("change-view");
    if (!isSequential) {
        btn.innerHTML = "Layout: Sequential";
        btn.style.paddingLeft = "10px";
        btn.style.paddingLeft = "10px";
        changeToSequential();
        isSequential = true;
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
    else {
        btn.innerHTML = "Layout: Columned";
        btn.style.paddingLeft = "13px";
        btn.style.paddingRight = "14px";
        changeToColumned();
        isSequential = false;
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

function openOrderMenu() {
    document.getElementById("article-order-menu").style.display = "inline";
}

function closeOrderMenu(){
    document.getElementById("article-order-menu").style.display = "none";
}

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
        const art1 = document.getElementById("article-1");
        art1.style.background = "linear-gradient(to bottom, #FFFFFF, #BF6E2A, #842493)";
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
    }
    else {
        const art1 = document.getElementById("article-1");
        art1.style.background = "linear-gradient(to bottom, #000000, #BF6E2A, #842493)";
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
    }
    document.getElementById("panel").style.background = "#842493";
    document.getElementById("change-view").style.background = "#842493";
    document.getElementById("change-order").style.background = "#842493";
    document.getElementById("change-theme").style.background = "#842493";

    const hoverView = document.getElementById("change-view");
    hoverView.addEventListener("mouseover", function() {
        hoverView.style.background = "#8078a5";
    });
    hoverView.addEventListener("mouseout", function() {
        hoverView.style.background = "#842493";
    });
    const hoverOrder = document.getElementById("change-order");
    hoverOrder.addEventListener("mouseover", function() {
        hoverOrder.style.background = "#8078a5";
    });
    hoverOrder.addEventListener("mouseout", function() {
        hoverOrder.style.background = "#842493";
    });
    const hoverTheme = document.getElementById("change-theme");
    hoverTheme.addEventListener("mouseover", function() {
        hoverTheme.style.background = "#8078a5";
    });
    hoverTheme.addEventListener("mouseout", function() {
        hoverTheme.style.background = "#842493";
    });

    const hoverText1 = document.getElementById("article-1-title");
    hoverText1.addEventListener("mouseover", function() {
        hoverText1.style.color = "	#ff6f4b";
    });
    hoverText1.addEventListener("mouseout", function() {
        hoverText1.style.color = "black";
    });

    const title = document.getElementById("news-header");
    title.style.background = "linear-gradient(to right, #811d5e, #ef6f01, #983275)";
    document.getElementById("newspaper").style.backgroundImage = "url(Pictures/SoundcheckBG.jpg)";
    document.getElementById("news-header").style.fontFamily = "Tilt Prism";
}


function changeToVegas() {
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
    }
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
    }
    document.getElementById("panel").style.background = "#00A866";
    document.getElementById("change-view").style.background = "#00A866";
    document.getElementById("change-order").style.background = "#00A866";
    document.getElementById("change-theme").style.background = "#00A866";
    
    const hoverView = document.getElementById("change-view");
    hoverView.addEventListener("mouseover", function() {
        hoverView.style.background = "#73D8CA";
    });
    hoverView.addEventListener("mouseout", function() {
        hoverView.style.background = "#00A866";
    });
    const hoverOrder = document.getElementById("change-order");
    hoverOrder.addEventListener("mouseover", function() {
        hoverOrder.style.background = "#73D8CA";
    });
    hoverOrder.addEventListener("mouseout", function() {
        hoverOrder.style.background = "#00A866";
    });
    const hoverTheme = document.getElementById("change-theme");
    hoverTheme.addEventListener("mouseover", function() {
        hoverTheme.style.background = "#73D8CA";
    });
    hoverTheme.addEventListener("mouseout", function() {
        hoverTheme.style.background = "#00A866";
    });

    document.getElementById("newspaper").style.backgroundImage = "url(https://i.pinimg.com/564x/68/f2/0f/68f20f4394e05076b642047eb9fc1bc5.jpg)";
}

function changeToClassic() {
    if (isSequential == true) {
        document.getElementById("article-1").style.background = "white";
        document.getElementById("article-2").style.background = "white";
        document.getElementById("article-3").style.background = "white";
        document.getElementById("article-4").style.background = "white";
        document.getElementById("article-5").style.background = "white";
        document.getElementById("article-6").style.background = "white";
    }
    else {
        document.getElementById("article-1").style.background = "white";
        document.getElementById("article-2").style.background = "white";
        document.getElementById("article-3").style.background = "white";
        document.getElementById("article-4").style.background = "white";
        document.getElementById("article-5").style.background = "white";
        document.getElementById("article-6").style.background = "white";
    }
    document.getElementById("panel").style.background = "#385959";
    document.getElementById("change-view").style.background = "#385959";
    document.getElementById("change-order").style.background = "#385959";
    document.getElementById("change-theme").style.background = "#385959";

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



    document.getElementById("newspaper").style.backgroundImage = "none";
}

// Store each article's original content, including links, when the page loads
var originalContentMap = {};

// 
function articleInfo() {
    const articles = document.querySelectorAll(".articles"); // Get node list

    // Get the data from each article in the node list 
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

function reorderArticles() {
    const newOrder = [];
    // Get selected articles from the dropdown lists
    for (let i = 1; i <= 6; i++) {
        const select = document.getElementById(`article${i}`);
        const value = select.value;

        // Check if all articles are selected
        if (value == 0) {
            alert("Please select an article.");
            return;
        }
        newOrder.push(value);
    }

    // Check if all articles are unique

    const selectedArticleSet = new Set(newOrder);
    if (selectedArticleSet.size != newOrder.length) {
        alert("Two or more of the same articles were selected. Please try again.");
        return 0;
    }

    const articles = Array.from(document.getElementsByClassName("articles")); // Converts to an array

    // Rearrange article content based on new order
    newOrder.forEach((articleAttribute, index) => {
        const article = articles[index];
        const newContent = originalContentMap[articleAttribute];

        // Update image
        const img = article.querySelector("img");
        if (img) {
            img.src = newContent.imgSrc;
        }
        // Update title
        const title = article.querySelector(".article-title");
        if (title) {
            title.textContent = newContent.titleText;
            title.href= newContent.linkHref;
        }
        
        // Update author
        const author = article.querySelector(".article-author");
        if (author) {
            author.textContent = newContent.authorText;
        }
        // Update text
        const info = article.querySelector(".article-body");
        if (info) {
            info.innerHTML = newContent.infoText;
        }
    });

    // Hide the order selection menu
    document.getElementById("article-order-menu").style.display = "none";
}


function defaultOrder() {
    const articles = document.querySelectorAll(".articles");
    
    articles.forEach(article => {
        const num = article.getAttribute("data-article");
        const originalNews = originalContentMap[num]; // Retrieve the original content
    
        // Restore image
        const img = article.querySelector("img");
        if (img) {
            img.src = originalNews.imgSrc;
        }
        // Restore title
        const title = article.querySelector(".article-title");
        if (title) {
            title.textContent = originalNews.titleText;
            title.href = originalNews.linkText;
        }
        // Restore author
        const author = article.querySelector(".article-author");
        if (author) {
            author.textContent = originalNews.authorText;
        }
        // Restore body text
        const info = article.querySelector(".article-body");
        if (info) {
            info.innerHTML = originalNews.infoText;
        }
    });

    document.getElementById("article-order-menu").style.display = "none";
}

function changeToSequential() {
    document.getElementById("css-link").href = "styles-sequential.css";
}

function changeToColumned() {
    document.getElementById("css-link").href = "styles.css";
}