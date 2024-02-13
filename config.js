// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
       "送给我最亲爱的师姐",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "今天是破五迎财日，也是圣瓦伦丁节", // 同上...
        "无论如何都是一个喜庆的日子",
        "但我觉得今天最特别的还应当是你的生日!",
        "你是父母骄傲的女儿，是弟弟们亲爱的姐姐",
        "你是伙伴们信赖的朋友，是魔法部依赖的部长",
        "非常有幸认识你",
        "非常有幸得到你的教导、感受你的温暖、分享你的生活",
        "你值得在这个喜庆的周年纪念日里拥有最大的幸福!",
        "接下来请准备迎接我的祝福吧",
        "我将这样祝福你：",
        "试剂一秒就可以找到，细胞永远都不会污染",
        "蛋白qp内参很齐，趋势很好；染色荧光背景干净，信号明显",
        "想法思路嘎嘎多，整图写作样样顺",
        "当然要是今年回临床了，我就将这样祝福你：",
        "患者全都通情达理，家属全都是非分明",
        "上级和蔼可亲，倾囊相授；同事各担其责，互帮互助",
        "夜班不黑，加班很少，三餐都可以按时吃",
        "当然人最紧要的系开心",
        "愿你可以去吃更多好吃的，看更多好看的，玩更多好玩的",
        "如果难免遇到开不了心的时候",
        "我希望平安健康永远是你生活的底色",
        "而困难永远可以克服，烦恼永远可以扔掉，难过永远转瞬即逝！",
        "我还希望可以在未来和你分享所有的快乐与烦恼",
        "一起跑步、骑车，一起吃遍美食",
        "一起体验更多新奇的事物",
        "感谢你可以看到这里，再次祝你生日快乐！",
        "END！"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
       //"送给我最亲爱的师姐",
        //"今天是破五迎财日，也是圣瓦伦丁节", 
        //"无论如何都是一个喜庆的日子",
        //"但我觉得今天最特别的还应当是你的生日!",
        //"你是父母骄傲的女儿，是弟弟们亲爱的姐姐",
        //"你是伙伴们信赖的朋友，是魔法部依赖的部长",
        //"非常有幸认识你",
        //"非常有幸得到你的教导、感受你的温暖、分享你的生活",
       //"你值得在这个喜庆的周年纪念日里拥有最大的幸福!",
        //"接下来请准备迎接我的祝福吧",
        //"我将这样祝福你：",
        "试剂一秒就可以找到，细胞永远都不会污染":"./imgs/box.jpg"
        "蛋白qp内参很齐，趋势很好；染色荧光背景干净，信号明显":"./imgs/confocol.jpg"
        "想法思路嘎嘎多，整图写作样样顺":"./imgs/picture.jpg"
        //"当然要是今年回临床了，我就将这样祝福你：",
        "患者全都通情达理，家属全都是非分明":"./imgs/hospital.jpg"
        "上级和蔼可亲，倾囊相授；同事各担其责，互帮互助":"./imgs/MRI.jpg"
        "夜班不黑，加班很少，三餐都可以按时吃":"./imgs/off.jpg"
        "当然人最紧要的系开心":"./imgs/happy.jpg"
        "愿你可以去吃更多好吃的，看更多好看的，玩更多好玩的":"./imgs/flower.jpg"
        "如果难免遇到开不了心的时候",
        "我希望平安健康永远是你生活的底色",
        "而困难永远可以克服，烦恼永远可以扔掉，难过永远转瞬即逝！":"./imgs/no.jpg"
        "我还希望可以在未来和你分享所有的快乐与烦恼",
        "一起跑步、骑车，一起吃遍美食",
        "一起体验更多新奇的事物":"./imgs/we.jpg"
        "感谢你可以看到这里，再次祝你生日快乐！":"./imgs/love.jpg"
        "END！"
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开灯开灯",
        play: "起音乐",
        bannar_coming: "降下横幅来",
        balloons_flying: "欸好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "点上蜡烛！",
        wish_message: "生日快乐",
        story: "一封贺信",
    }
};
