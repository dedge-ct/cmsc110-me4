var isSequential = false;
var themeCounter = 0;

function changeView() {
    var btn = document.getElementById("change-view");
    if (!isSequential) {
        btn.innerHTML = "Layout: Sequential";
        isSequential = true;
    }
    else {
        btn.innerHTML = "Layout: Columned";
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
    document.getElementById("article-order-menu").style.display = "none";
}