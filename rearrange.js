var article1 = document.getElementById("article-1")
var article2 = document.getElementById("article-2")


function switchArticle() {
    var temp = document.getElementById("img-1").src
    document.getElementById("img-1").src = document.getElementById("img-2").src
    document.getElementById("img-2").src = temp;
}