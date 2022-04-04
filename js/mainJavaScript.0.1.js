function oil() {
    var title = document.getElementById("title");
    title.style.transform = "translateX(0%)";
}

function lio() {
    var titleC = document.getElementById("title");
    titleC.style.transform = "";
}

function moment(event) {
    var mx = event.clientX - 20;
    var my = event.clientY - 20;
    var obj = document.getElementById("obj");
    obj.style.left = mx + "px";
    obj.style.top = my + "px";
    window.addEventListener("dblclick", () => {
        obj.style.display = "flex";
    });
    window.addEventListener("click", () => {
        obj.style.display = "none";
    });
}

function spoil(n) {
    var line = document.querySelectorAll(".shadNormal");
    line[n].style.width = "100%";
}

function unspoil(n) {
    var line = document.querySelectorAll(".shadNormal");
    line[n].style.width = "0px";
}