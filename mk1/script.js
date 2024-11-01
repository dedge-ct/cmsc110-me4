var isSequential = false;
var themeCounter = 0;
var origArticlesWidth = [];
var origArticlesFloat = []

var origArticle1 = {value: "article-1", title: document.getElementById("article-1-title").innerHTML, author: document.getElementById("article-1-author").innerHTML, body: document.getElementById("article-1-body").innerHTML, imgsrc: document.getElementById("article-1-img").src};

var origArticle2 = {value: "article-2", title: document.getElementById("article-2-title").innerHTML, author: document.getElementById("article-2-author").innerHTML, body: document.getElementById("article-2-body").innerHTML, imgsrc: document.getElementById("article-2-img").src};

var origArticle3 = {value: "article-3", title: document.getElementById("article-3-title").innerHTML, author: document.getElementById("article-3-author").innerHTML, body: document.getElementById("article-3-body").innerHTML, imgsrc: document.getElementById("article-3-img").src};

var origArticle4 = {value: "article-4", title: document.getElementById("article-4-title").innerHTML, author: document.getElementById("article-4-author").innerHTML, body: document.getElementById("article-4-body").innerHTML, imgsrc: document.getElementById("article-4-img").src};

var origArticle5 = {value: "article-5", title: document.getElementById("article-5-title").innerHTML, author: document.getElementById("article-5-author").innerHTML, body: document.getElementById("article-5-body").innerHTML,  imgsrc: document.getElementById("article-5-img").src};

var origArticle6 = {value: "article-6", title: document.getElementById("article-6-title").innerHTML, author: document.getElementById("article-6-author").innerHTML, body: document.getElementById("article-6-body").innerHTML,  imgsrc: document.getElementById("article-6-img").src};

var origArticleArray = [origArticle1, origArticle2, origArticle3, origArticle4, origArticle5, origArticle6];


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

    //Prevents duplication of articles
    const selectedArticleArray = [selectedArticle1, selectedArticle2, selectedArticle3, selectedArticle4, selectedArticle5, selectedArticle6];

    const articleArray = ["article-1", "article-2", "article-3", "article-4", "article-5", "article-6"];

    for (var i = 0; i < articleArray.length;i++) {
        for (var j = 0; j < origArticleArray.length; j++) {
            if (selectedArticleArray[i] == origArticleArray[j].value) {
                //Title
                document.getElementById(articleArray[i]).querySelector(".article-title").innerHTML = origArticleArray[j].title;
                document.getElementById(articleArray[i]).querySelector(".article-body").innerHTML = origArticleArray[j].body;
                document.getElementById(articleArray[i]).querySelector(".article-img").src = origArticleArray[j].imgsrc;
                break;
            }
        }
    }

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
        articles[i].style.width = "100%";
    }
}

function changeToColumned() {
    var articles = document.getElementsByClassName("articles");
    for (let i = 0; i<articles.length;i++) {
        articles[i].style.width = origArticlesWidth[i];
    }
}