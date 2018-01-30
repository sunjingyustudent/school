/*
* 全局环境配置
* localhost／ development／ pre／ production *
* @api 后台api地址
* @link 全局链接地址
* @share 全局分享默认配置
*/
const CONFIG = {
  // 本地环境
  localhost: {
    // api: 'http://192.168.11.166/v1',
    api: 'http://channel.com',
    link: {
      index:  'http://localhost:8080',
      testBucketDomain:'http://test001.pnlyy.com/'
    },
    share: {
      defaultTitle: 'vip教室送您一节暑托体验课',//默认分享标题
      defaultDesc: '在线收获孩子的点滴成长',//默认分享描述
      defaultUrl:  '',//默认分享地址-为空则默认获取当前地址
      defaultImg: 'http://orgt5vbih.bkt.clouddn.com/wxShare.jpg',//默认分享图片
      defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline']//默认分享渠道
    }
  },
  // DEV环境
  development: {
    api: 'http://apitree.dev.pnlyy.com/v1',
    link: {
      index:  'http://webtree.dev.pnlyy.com'
    },
    share: {
      defaultTitle: 'vip教室送您一节暑托体验课',//默认分享标题
      defaultDesc: '在线收获孩子的点滴成长',//默认分享描述
      defaultUrl:  '',//默认分享地址-为空则默认获取当前地址
      defaultImg: 'http://orgt5vbih.bkt.clouddn.com/wxShare.jpg',//默认分享图片
      defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline']//默认分享渠道
    }
  },
  // PRE环境
  pre: {
    api: 'http://apitree.pre.pnlyy.com/v1',
    link: {
      index:  'http://webtree.pre.pnlyy.com'
    },
    share: {
      defaultTitle: 'vip教室送您一节暑托体验课',//默认分享标题
      defaultDesc: '在线收获孩子的点滴成长',//默认分享描述
      defaultUrl:  '',//默认分享地址-为空则默认获取当前地址
      defaultImg: 'http://orgt5vbih.bkt.clouddn.com/wxShare.jpg',//默认分享图片
      defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline']//默认分享渠道
    }
  },
  // PRD环境
  production: {
    api: 'http://apitree.pnlyy.com/v1',
    link: {
      index:  'http://webtree.pnlyy.com'
    },
    share: {
      defaultTitle: 'vip教室送您一节暑托体验课',//默认分享标题
      defaultDesc: '在线收获孩子的点滴成长',//默认分享描述
      defaultUrl:  '',//默认分享地址-为空则默认获取当前地址
      defaultImg: 'http://orgt5vbih.bkt.clouddn.com/wxShare.jpg',//默认分享图片
      defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline']//默认分享渠道
    }
  }
};

//检测环境
let host = window.location.host;
if(host.indexOf('webtree.dev.pnlyy.com')>-1){
  global.APIMSG = CONFIG.development;
}else if(host.indexOf('webtree.pre.pnlyy.com')>-1){
  global.APIMSG = CONFIG.pre;
}else if(host.indexOf('webtree.pnlyy.com')>-1){
  global.APIMSG = CONFIG.production;
}else{
  global.APIMSG = CONFIG.localhost;
}

export default global.APIMSG;
