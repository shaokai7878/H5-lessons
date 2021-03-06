
var StartLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var startLabel = new cc.LabelTTF("开　始","",80);
        startLabel.setFontFillColor(cc.color.RED);
        startLabel.enableStroke(cc.color.WHITE,5);

        var startMenuItem = new cc.MenuItemLabel(startLabel,function(){
            cc.log("跳转到主游戏场景")
            cc.director.runScene(new MainScene());

        },this);
        var menu = new cc.Menu(startMenuItem);
        startMenuItem.setPosition(0,0);
        menu.setPosition(size.width/2,size.height*0.3);
        this.addChild(menu);

        var logo = new cc.LabelTTF("飞机小游戏","",80)
        logo.setFontFillColor(cc.color.RED);
        logo.enableStroke(cc.color.YELLOW,5);
        logo.setPosition(size.width/2,size.height*0.7);
        this.addChild(logo);
        return true;
    }
});

var StartScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});
