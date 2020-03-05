let ctx = document.getElementById('myCanvas').getContext('2d');

let Circle = function (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.color = 'black';

    this.getX = function () {
        return this.x;
    };


    this.getY = function () {
        return this.y;
    };

    this.getRadius = function () {
        return this.radius;
    };

    this.setColor = function (new_color) {
        this.color = new_color;
    };

    this.setX = function (new_x) {
        this.x = new_x;
    };

    this.setY = function (new_y) {
        this.y = new_y;
    };

    this.setRadius = function (new_Radius) {
        this.radius = new_Radius;
    };

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(circle.getX(), circle.getY(), circle.getRadius(), 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };

    this.delete = function () {
        ctx.clearRect(0, 0, 300, 300);
    };
};

let circle = new Circle(150, 150, 60);
// circle.draw();
//
// let random_radius = Math.floor(Math.random() * 100);
// circle.setRadius(random_radius);
//
// circle.delete();
// circle.draw();


// circle.delete();
// circle.draw();


// circle.delete();

function circle_create() {
    let position_x = Math.random() * window.innerHeight;
    let position_y = Math.random() * document.getElementById('myCanvas').width;
    alert(position_x);
    circle.setX(position_x);
    circle.setY(position_y);
    let radius = Math.random()*100;
    circle.setRadius(radius);
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    circle.setColor(color);
    circle.draw();
}

for (let i = 0; i < 50; i++) {
    circle_create();
}
