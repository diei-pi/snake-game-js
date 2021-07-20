class Fruit {
    constructor(){
        this.min = 0;
        this.max = 30;
        this.canvas = document.querySelector(".canvas");
        this.ctx = this.canvas.getContext("2d");
        this.positionX = 0;
        this.positionY = 0;
        this.generate();
    }
    generate(){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        this.positionX = getRandomInt(this.min,this.max)*scale;
        this.positionY = getRandomInt(this.min,this.max)*scale;
    }
    draw(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.positionX,this.positionY,10,10);
    }
}