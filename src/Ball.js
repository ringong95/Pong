export default class Ball {
	constructor(){
		this.x = 150
		this.y = 50
		this.vx = 1
		this.vy = 1
		this.width = 10
		this.height = 10
		this.Xspeed = 5
		this.Yspeed = 5
	}
	movement(){
		if (this.y <= 0 || this.y >=150 ){
			this.Yspeed*= -1
		}
		if (this.x <= 0 || this.x >=300 ){
			this.Xspeed*= -1
		}
		
		this.x += this.Xspeed
		this.y += this.Yspeed
	}
	paddleCollison(p1, p2){
		
		if (this.Xspeed > 0){
			const inRightEnd = p1.x <= this.x + this.width &&
			p2.x > this.x - this.Yspeed +	this.width;


			if (inRightEnd){
				//   				ball location + ball width - paddle width
				const collisionDiff = this.x + this.width - p2.x;
				

				const k = collisionDiff / this.Xspeed;

				const y = this.Yspeed * k + (this.y - this.Yspeed);

				const hitRightPaddle = y >= p2.y && y + this.height <= p2.y + p2.height;

				if (hitRightPaddle) {
					this.x = p2.x - this.width;
					// this.y = Math.floor(this.y - this.Yspeed + this.Yspeed * k);
					this.Xspeed = -this.Xspeed;

				}
			}
		}
	}
	render(context, p1, p2){
		this.movement();
		this.paddleCollison(p1, p2);
		context.fillStyle = 'white';
		context.beginPath();
		context.arc(this.x, this.y, 5, 0, Math.PI * 2, true);
		context.fill();

	}
}