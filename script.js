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
            case 2:
                changeToSoundcheck();
                break;
            default:
                break;
        }
    }
    else {
        btn.innerHTML = "Layout: Columned";
        btn.style.paddingLeft = "13px";
        btn.style.paddingRight = "13px";
        changeToColumned();
        isSequential = false;
        switch (themeCounter) {
            case 2:
                changeToSoundcheck();
                break;
            default:
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

function changeToVegas() {
    document.getElementById("article-2").style.backgroundColor = "green";
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
            infoText: article.querySelector(".article-body")?.textContent || "",
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
            info.textContent = newContent.infoText;
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
            info.textContent = originalNews.infoText;
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