// Your code here!

var Globals = {};
window.onload = function () {
    function g(e) { return document.querySelector(e); };
    Globals["Canvas"] = g("#canvas");
    Globals["Ctx"] = Globals["Canvas"].getContext("2d");
    Globals["Entities"] = {};
    update();
};

function update() {
    Globals["Ctx"].clearRect(0, 0, Globals["Canvas"].width, Globals["Canvas"].height);
    Globals["Ctx"].fillRect(Globals["Canvas"].width * 0.25, Globals["Canvas"].height * 0.25,
        Globals["Canvas"].width * 0.75, Globals["Canvas"].height * 0.75);
    setTimeout(update, 50);
};

//end all