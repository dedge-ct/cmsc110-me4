var isSequential = false;

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