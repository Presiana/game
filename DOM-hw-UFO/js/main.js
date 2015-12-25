(function () {
    var gameStage = new Stage();
    gameStage.init();

    setInterval(gameStage.moveStage(), 10);
})();