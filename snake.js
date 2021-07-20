class Snake {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xSpeed = 10;
        this.ySpeed = 0;
        this.canvas = document.querySelector(".canvas");
        this.ctx = this.canvas.getContext("2d");
        this.points = 0;
        this.tail = [];
    }
    draw(){
        ctx.fillStyle = "red";   
        ctx.fillRect(this.x,this.y,scale,scale);    
        for(let i=0; i < this.tail.length; i++){
            ctx.fillRect(this.tail[i].x,this.tail[i].y,scale,scale);
        }   
    }
    update(){
        for(let i=0; i < this.tail.length-1; i++){
            this.tail[i] = this.tail[i+1]; 
        }
        this.tail[this.points-1] = {x:this.x, y:this.y};
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        for(let i=0; i < this.tail.length; i++){
            if(this.x == this.tail[i].x && this.y == this.tail[i].y){
                alert(`Você deu uma cabeçada no próprio corpo, cuidado!\nPontuação final:${this.points}`);
                this.tail = [];
                this.points = 0;
                this.x = 0;
                this.y = 0;
                document.querySelector("[data-scoreboard]").textContent = `Pontos: ${snake.points}`;
            }
        }
        if(this.x == 300){
            this.x = 0;
        }
        if(this.y == 300){
            this.y = 0;
        }
        if(this.x == -10){
            this.x = 300;
        }
        if(this.y == -10){
            this.y = 300;
        }
    }
    eat(fruit){
        if(this.x==fruit.positionX && this.y==fruit.positionY){
            this.points ++;
            document.querySelector("[data-scoreboard]").textContent = `Pontos: ${snake.points}`;
            fruit.generate();
        }
    }
}