const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height/scale;
const columns = canvas.width/scale;

var snake;
var fruit;

snake = new Snake();
fruit = new Fruit();
setInterval(() => {    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    snake.update();
    fruit.draw();
    snake.draw();
    snake.eat(fruit);
}, 150);

addEventListener('keydown',(evento)=>{
    let keypressed = evento.code;

    if( keypressed == 'ArrowUp'){
        snake.ySpeed = scale *(-1); 
        snake.xSpeed = 0;
    }
    if( keypressed == 'ArrowDown'){
        snake.ySpeed = scale; 
        snake.xSpeed = 0;
    }
    if( keypressed == 'ArrowRight'){
        snake.ySpeed = 0; 
        snake.xSpeed = scale;
    }
    if( keypressed == 'ArrowLeft'){
        snake.ySpeed = 0; 
        snake.xSpeed = scale *(-1);
    }
     
})