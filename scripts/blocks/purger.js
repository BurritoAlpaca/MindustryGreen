
const siloLaunchEffect = newEffect(20, e => {
    Draw.color(Color.white, Color.lightGray, e.fin());
    Lines.stroke(e.fout() * 3);
    Lines.circle(e.x, e.y, e.fin() * 100);
});


const purger = extendContent(Block, "purger", {
    buildConfiguration(tile, table){
        table.addImageButton(Icon.arrowUpSmall, Styles.clearTransi, run(() => {
            tile.configure(0)
        })).size(50).disabled(boolf(b => !tile.entity.cons.valid()))
    },
    configured(tile, value){
        if(tile.entity.cons.valid()){
            Effects.effect(siloLaunchEffect, tile)
            for(var i = 0; i < 15; i++){
                Calls.createBullet(Bullets.flakExplosive, tile.getTeam(), tile.drawx(), tile.drawy(), Mathf.random(360), Mathf.random(0.5, 1.0), Mathf.random(0.2, 1.0))
            }
            tile.entity.cons.trigger()
        }
    }
})
