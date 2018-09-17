var symbolSize = 60;
var stream;


function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(0);
    stream = new Stream();
    stream.generateSymbols();
    stream.render();

}

function draw() {
    background(0);
    stream.render();
}

function Symbol(x, y, speed) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    this.switchInterval = round(random(2, 20));

    this.setToRandomSymbol = function () {
        if (frameCount % this.switchInterval == 0) {
            this.value = String.fromCharCode(
                0x30A0 + round(random(0, 96))
            )
        }
    }

    this.rain = function () {
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    }
}

function Stream() {
    this.symbols = [];
    this.totalSymbols = round(random(4, 30));
    this.speed = random(5, 20);

    this.generateSymbols = function () {
        var y = 0;
        var x = width / 2;

        for (var i = 0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(x, y, this.speed);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y -= symbolSize;
        }

    }

    this.render = function () {
        this.symbols.forEach(function (element) {
            textSize(25);
            fill(0, 255, 70);
            text(element.value, element.x, element.y);
            this.rain();
            this.setToRandomSymbol();
        })
      

    }
}

