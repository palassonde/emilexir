MyGame.Preloader = function(game) {
    this.loadingBar = null;
    this.ready = false;
};

MyGame.Preloader.prototype = {

    preload: function () {

        // loading
        this.loadingBar = this.add.sprite(this.world.centerX, this.world.centerY,"loading");
        this.loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(this.loadingBar, 0);

        this.game.load.image("player","assets/images/player.png");

    },

    create: function () {

        this.loadingBar.cropEnabled = true;
    },

    update: function () {

        this.state.start('game');

    }

};