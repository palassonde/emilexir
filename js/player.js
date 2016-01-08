Player = function (x, y, game, sm) {

	// sons
	this.sm = sm;

	Phaser.Sprite.call(this, game, x, y, "player")
	this.game.physics.enable(this, Phaser.Physics.ARCADE);

	this.body.gravity.y = 0;
	this.body.collideWorldBounds = true;
	this.body.checkCollision.up = false;

	this.scale.setTo(0.5,0.5);
	this.anchor.setTo(0.5);

	this.cursors = this.game.input.keyboard.createCursorKeys();

}

Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.action = function(){

	this.move();

}

Player.prototype.move = function(){

	if (this.cursors.left.isDown)
	{
		this.body.velocity.x = -300;
		this.scale.setTo(-0.5,0.5)
	}else if (this.cursors.right.isDown)
	{
		this.scale.setTo(0.5,0.5)
		this.body.velocity.x = 300;
	}else{
		this.body.velocity.x = 0;
	}
}