var isSequential = false;
var themeCounter = 0;
var origArticlesWidth = [];
var origArticlesFloat = [];


function changeView() {
    var btn = document.getElementById("change-view");
    if (!isSequential) {
        btn.innerHTML = "Layout: Sequential";
        changeToSequential();
        isSequential = true;
    }
    else {
        btn.innerHTML = "Layout: Columned";
        changeToColumned();
        isSequential = false;
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
            themeButton.innerHTML = "Theme: Cascade";
            break;
        case 2:
            themeButton.innerHTML = "Theme: Soundcheck";
            break;
        default:
            themeCounter = 0;
            themeButton.innerHTML = "Theme: Vegas"
            break;
    }
}

// Store each article's original content, including links, when the page loads
const originalContentMap = {};

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
        // Restore link
        const link = article.querySelector("a");
        if (link) {
            link.href = originalNews.linkHref;
            link.textContent = originalNews.linkText;
        }
    });

    document.getElementById("article-order-menu").style.display = "none";
}

function changeToSequential() {
    var articles = document.getElementsByClassName("articles");
    for (let i = 0; i < articles.length; i++) {
        origArticlesWidth.push(articles[i].style.width);
        origArticlesFloat.push(articles[i].style.float);
        articles[i].style.width = "100%";
        articles[i].style.float = "left";
    }
}

function changeToColumned() {
    var articles = document.getElementsByClassName("articles");
    for (let i = 0; i<articles.length;i++) {
        articles[i].style.width = origArticlesWidth[i];
        articles[i].style.float = origArticlesFloat[i];
    }
}