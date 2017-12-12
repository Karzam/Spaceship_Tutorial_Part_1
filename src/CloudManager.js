class CloudManager
{
    constructor()
    {
        this.cloudsList = [];

        window.setInterval(function()
        {
            const sprite = (Math.random() > 0.5 ? "cloud_1" : "cloud_2");
            this.cloud = new PIXI.Sprite(PIXI.loader.resources["assets/" + sprite + ".png"].texture);
            this.cloud.anchor.set(0.5, 0.5);
            this.cloud.position.set(renderer.width * 1.3, renderer.height * Math.random());

            // Diversify clouds size
            let minScale = 0.2;
            let maxScale = 1.2;
            let scale = Math.random() * (maxScale - minScale) + minScale;
            this.cloud.scale.set(scale, scale);

            stage.addChildAt(this.cloud, stage.children.length - 1);
            this.cloudsList.push(this.cloud);
        }.bind(this), 2000);
    }

    update()
    {
        this.cloudsList.forEach(function(element, index, array) {
            element.position.x -= 4;

            if (element.position.x < -renderer.width * 0.3) {
                element.destroy();
                array.splice(0, 1);
            }
        });
    }
}
