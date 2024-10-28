var origArticle1 = document.getElementById("article-1");
var origArt1Title = origArticle1.querySelector("h3").innerHTML;
var origArt1Text = origArticle1.querySelector("p").innerHTML;
var origArt1Img = origArticle1.querySelector("img").src;

var article2 = document.getElementById("article-2");
var art2Text = article2.querySelector("p").innerHTML;
var art2Img = article2.querySelector("img").src;

function changeArticleOrder() {
    console.log("Pressed");

    


    const articleId1 = document.getElementById("select-article-1").value;
    const articleId2 = document.getElementById("select-article-2").value;
    const articleId3 = document.getElementById("select-article-3").value;
    articleArray = [articleId1, articleId2, articleId3];
    const articleSet = new Set(articleArray);

    //Check if selected articles are similar
    if (articleSet.size != articleArray.length) {
        alert("Please enter different articles");
        return 0;
    }

    //Get articles
    var article1 = document.getElementById(articleId1);
    var art1Title = article1.querySelector("h3").innerHTML;
    var art1Text = article1.querySelector("p").innerHTML;
    var art1Img = article1.querySelector("img").src;

    var article2 = document.getElementById(articleId2);
    var art2Title = article2.querySelector("h3").innerHTML;
    var art2Text = article2.querySelector("p").innerHTML;
    var art2Img = article2.querySelector("img").src;

    var article3 = document.getElementById(articleId3);
    var art2Title = article2.querySelector("h3").innerHTML;
    var art2Text = article2.querySelector("p").innerHTML;
    var art2Img = article2.querySelector("img").src;

    //Change articles

    if (articleId1 == "article-1") {
        document.getElementById("article-1").querySelector("h3").innerHTML = origArt1Title;
        document.getElementById("article-1").querySelector("p").innerHTML = origArt1Text;
        document.getElementById("article-1").querySelector("img").src = origArt1Img;
    }
    else {
        document.getElementById("article-1").querySelector("h3").innerHTML = art1Title;
        document.getElementById("article-1").querySelector("p").innerHTML = art1Text;
        document.getElementById("article-1").querySelector("img").src = art1Img;
    }

    //Changebody
    //Change article
}
