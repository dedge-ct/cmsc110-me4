var themeCounter = 1;

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
function changeToClassic() {
    document.getElementById("newspaper").style.backgroundImage = "url(../Pictures/classic_bg_light.png)"
}

function changeToSoundcheck() {
    document.getElementById("article-div").style.background = "linear-gradient(to bottom, #481359, #842493, #5D2A9D, #293496, #386D7F, #2F847C, #329029)";
    document.getElementById("newspaper").style.backgroundImage = "url(https://i.pinimg.com/736x/ef/54/1d/ef541d77ae2d420ad13c4b182d1d7600.jpg)";
}

function changeToVegas() {
    document.getElementById("article-div").style.background = "linear-gradient(to bottom, #73D8CA, #6499B9, #A080E1, #DEB3CB, #F5A4C5, #E5CCF4, #DDD5DC)";
    document.getElementById("newspaper").style.backgroundImage = "url(https://i.pinimg.com/736x/ef/54/1d/ef541d77ae2d420ad13c4b182d1d7600.jpg)";
}

function changeView() {
    alert("This feature is not available for individual articles.");
}

function openOrderMenu() {
    alert("This feature is not available for individual articles.");
}

