export default class Score{
	constructor(boardHeight, boardWidth){
		this.goal = 5
		const scoreY= boardHeight/4
		const scoreX = boardWidth/2
		this.p1y =  scoreY - 15;
		this.p1x = scoreX - 26;
		this.p2y = scoreY -15;
		this.p2x = scoreX + 12;
		// this.p1 = topleft


	}
	win(p1,p2){
		if (p1.score === 5 || p2.score ===5){
			
		}
	}

	drawScoreP1(context , p1){
		context.fillStyle = "white"
		// context.fontColor = 'white'
		context.font = "30px Helvetica";
		context.fillText(p1.score, this.p1x, this.p1y);
		
	}

	drawScoreP2(context , p2){
		context.fillStyle = "white"
		// context.fontColor = 'white'
		context.font = "30px Helvetica";
		context.fillText(p2.score, this.p2x, this.p2y);

	}
// 
	render(context, p1, p2){
		this.win(p1,p2)
		this.drawScoreP1(context, p1)
		this.drawScoreP2(context, p2)



}

}