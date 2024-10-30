var isSequential = false;
var themeCounter = 0;
var origArticlesWidth = [];

var origArticle1 = {title: document.getElementById("article-1-title")}




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

function changeTheme() {
    var themeButton = document.getElementById("change-theme");
    themeCounter++;
    switch (themeCounter) {
        case 1:
            themeButton.innerHTML = "Theme: Cascade";
            break;
        case 2:
            themeButton.innerHTML = "Theme: Soundch";
            break;
        default:
            themeCounter = 0;
            themeButton.innerHTML = "Theme: Vegas"
            break;
    }
}

function reorderArticles() {
    const selectedArticle1 = document.getElementById("select-article-1").value;
    const selectedArticle2 = document.getElementById("select-article-2").value;
    const selectedArticle3 = document.getElementById("select-article-3").value;
    const selectedArticle4 = document.getElementById("select-article-4").value;
    const selectedArticle5 = document.getElementById("select-article-5").value;
    const selectedArticle6 = document.getElementById("select-article-6").value;
    const selectedArticleArray = [selectedArticle1, selectedArticle2, selectedArticle3, selectedArticle4, selectedArticle5, selectedArticle6];
    const selectedArticleSet = new Set(selectedArticleArray);
    if (selectedArticleSet.size != selectedArticleArray.length) {
        alert("Two or more of the same articles were selected. Please try again.");
        return 0;
    }
    document.getElementById("article-order-menu").style.display = "none";
}

function changeToSequential() {
    var articles = document.getElementsByClassName("articles");
    for (let i = 0; i < articles.length; i++) {
        origArticlesWidth.push(articles[i].style.width)
        articles[i].style.width = "100%";
    }
}

function changeToColumned() {
    var articles = document.getElementsByClassName("articles");
    for (let i = 0; i<articles.length;i++) {
        articles[i].style.width = origArticlesWidth[i];
    }
}