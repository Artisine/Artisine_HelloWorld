// Your code here!

var Globals = {};
window.onload = function () {
    function g(e) { return document.querySelector(e); };
    Globals["Canvas"] = g("#canvas");
    Globals["Canvas"].width = window.innerWidth;
    Globals["Ctx"] = Globals["Canvas"].getContext("2d");
    Globals["Entities"] = {};
    Globals["Entities"].RectangleLoader = new Rectangle();
    update();
};

function Rectangle() {
    this.Color = "red";
    this.Position = { X: 0, Y: Globals["Canvas"].height / 2 };
    this.Size = { X: 20, Y: 10 };
    this.Velocity = { X: 3, Y: 0 };
    this.translate = function () {
        if (this.Position.X > Globals["Canvas"].width + this.Size.X / 2) {
            this.Position.X = -this.Size.X / 2;
        }
        if (this.Position.X < -this.Size.X / 2) {
            this.Position.X = Globals["Canvas"].width + this.Size.X / 2;
        }
        this.Position.X += this.Velocity.X;
        this.Position.Y += this.Velocity.Y;
    };
    this.render = function () {
        var ctx = Globals["Ctx"];
        var x = this.Position.X, y = this.Position.Y;
        var sx = this.Size.X / 2, sy = this.Size.Y / 2;
        ctx.beginPath();
        ctx.moveTo(x - sx, y - sy);
        ctx.lineTo(x - sx, y + sy);
        ctx.lineTo(x + sx, y + sy);
        ctx.lineTo(x + sx, y - sy);
        ctx.lineTo(x - sx, y - sy);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = this.Color;
        ctx.fill();
    };
};

function update() {
    Globals["Ctx"].clearRect(0, 0, Globals["Canvas"].width, Globals["Canvas"].height);
    for (var i in Globals["Entities"]) {
        Globals["Entities"][i].translate();
        Globals["Entities"][i].render();
    }
    setTimeout(update, 50);
};

//end all