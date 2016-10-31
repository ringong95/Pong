import Paddle from './Paddle'
import { player1Keys, player2Keys }  from "./keys"
import Ball from './Ball'
import Score from './Score'

export default class Game {
	constructor() {
		const canvas = document.getElementById('game');


		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';
		this.balls = new Ball(this.height, this.width, 'white'),
		// this.balls2 = new Ball(this.height, this.width, 'green'),
		// this.balls6 = new Ball(this.height, this.width, 'lightblue'),
		// this.balls5 = new Ball(this.height, this.width, 'grey'),
		// this.balls7 = new Ball(this.height, this.width, 'red'),
		// this.balls8 = new Ball(this.height, this.width, 'pink'),
		// this.balls3 = new Ball(this.height, this.width, 'blue'),
		// this.balls4 = new Ball(this.height, this.width, 'purple'),
		this.scoreboard = new Score(this.height,  this.width);
		// ball  to players to score 
		
		

		this.p1 = new Paddle(this.height, 5, 'white',player1Keys),
		this.p2 = new Paddle(this.height, this.width-10, 'white', player2Keys)

	}

	drawLine(){
		this.context.setLineDash([10, 10]);
		this.context.beginPath();
		this.context.moveTo(this.width / 2, 0);
		this.context.lineTo(this.width / 2, this.height);
		this.context.strokeStyle = "white";
		this.context.stroke();
	}

	drawBoard(){
		this.context.fillStyle = 'black'
		this.context.fillRect(0, 0,this.width,this.height)
		this.drawLine();
	}

	render(){
		this.drawBoard();
		

		
		this.p1.render(this.context);
		this.p2.render(this.context);
		this.balls.render(this.context, this.p1, this.p2);
		// this.balls2.render(this.context, this.p1, this.p2);
		// this.balls3.render(this.context, this.p1, this.p2);
		// this.balls4.render(this.context, this.p1, this.p2);
		// this.balls5.render(this.context, this.p1, this.p2);
		// this.balls6.render(this.context, this.p1, this.p2);
		// this.balls7.render(this.context, this.p1, this.p2);
		
		this.scoreboard.render(this.context, this.p1, this.p2)
	}

}