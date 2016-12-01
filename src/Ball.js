export default class Ball {
    constructor(boardHeight, boardWidth, color){
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.ballcolor = color
        this.x = this.boardWidth/2;
        this.y = this.boardHeight/2;
        this.width = 10
        this.height = 10
        this.radius = 5
        this.Yspeed =  Math.floor(Math.random() * 12 - 6);
        this.Xspeed = (7 - Math.abs(this.Yspeed));
        
        this.ping = new Audio ('./sounds/pong-02.wav')
    }
    paddleBounce(p1, p2){
        // this is to create collision with the right edge of the p1 paddle
        const p1RightEdge = (this.x-this.radius-p1.width<= p1.x)
        

        if (p1RightEdge){
            // this is if the paddle is in the Y values of the paddle.
            if (this.y >= p1.y && this.y <= (p1.height+p1.y)){
                    
                    this.Yspeed =  Math.floor(Math.random() * 12 - 6);
                    // This is to reflect the balls speed so it would "bounce"
                    this.Xspeed *= -1
                    // this plays the sound established somewhere else
                    this.sound();

                }
            }
            if (this.x+this.radius >= p2.x && this.x-this.radius-p1.width <= p2.x){
                if  (this.y >= p2.y && this.y <= p2.height+p2.y){
                    this.Xspeed*= -1
                    this.Yspeed =  Math.floor(Math.random() * 12 - 6);
                     this.sound();
                }	
            }
        }
        bounce(){

            if (this.y <= 0+this.radius || this.y >=150 - this.radius){
                this.Yspeed*= -1
                
                // console.log(ping)
                this.sound();
                
            }

            
        }
        sound(){
            this.ping.play();
        }
        goal(p1,p2){

            if (this.x <= 0+this.radius)
            {
                this.Xspeed*= -1
                this.x = this.boardWidth/2
                this.y = this.boardHeight/2
                p1.score += 1
                 this.sound();
            }
            if (this.x >=this.boardWidth -this.radius)
            {
                this.Xspeed*= -1
                this.x = this.boardWidth/2
                this.y = this.boardHeight/2
                p2.score += 1
                 this.sound();
            }
        }	

        movement(){
            this.x += this.Xspeed
            this.y += this.Yspeed
        }

        render(context, p1, p2){
            this.paddleBounce(p1, p2)
            this.goal(p1, p2)
            this.bounce();
            this.movement();
            context.fillStyle = this.ballcolor;
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            context.fill();

        }
    }