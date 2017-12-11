/*****************************************************

                    Main.js

*****************************************************/

var stage = new PIXI.Container();
var cloudManager;

PIXI.loader.add([
    "assets/cloud_1.png",
    "assets/cloud_2.png"
]).load(init);


function init()
{
    renderer.backgroundColor = 0x22A7F0;

    cloudManager = new CloudManager();

    renderer.render(stage);

    loop();
}

function loop()
{
    cloudManager.update();

    requestAnimationFrame(loop);

    renderer.render(stage);
}
