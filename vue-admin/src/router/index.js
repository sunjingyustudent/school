/*
* 路由配置
*/
import Vue from 'vue';
import Router from 'vue-router';
import title from 'vue-wechat-title';//页面标题
Vue.use(title);
Vue.use(Router);

//路由入口
const Index = r => require.ensure([], () => r(require('../pages/index.vue')), 'Index');//入口

//微信上传图片
const WxUploadImg = r => require.ensure([], () => r(require('../pages/wxUploadImg.vue')), 'WxUploadImg');
//微信分享
const WxShare = r => require.ensure([], () => r(require('../pages/wxShare.vue')), 'WxShare');
//微信禁止分享
const WxShareForbids = r => require.ensure([], () => r(require('../pages/wxShareForbids.vue')), 'WxShareForbids');
//微信支付
const WxPay = r => require.ensure([], () => r(require('../pages/wxPay.vue')), 'WxPay');
//加载更多
const Sorcll = r => require.ensure([], () => r(require('../pages/sorcll.vue')), 'Sorcll');
//单图上传
const Upimg = r => require.ensure([], () => r(require('../pages/upDemo.vue')), 'Upimg');

//九宫格
const NineSquare = r => require.ensure([], () => r(require('../pages/nineSquare.vue')), 'NineSquare');

//大转盘
const Rotate = r => require.ensure([], () => r(require('../pages/rotate.vue')), 'Rotate');

//上传图片到七牛云
const UploadQiniu = r => require.ensure([], () => r(require('../pages/uploadQiniu.vue')), 'UploadQiniu');

//home主页
const Home = r => require.ensure([], () => r(require('../pages/home.vue')), 'Home');

/*前端*/
//vue安装
const VueInstall = r => require.ensure([], () => r(require('../pages/vue/vueInstall.vue')), 'VueInstall');


//错误页面
const Error = r => require.ensure([], () => r(require('../pages/error.vue')), 'Error');//错误页面

export default new Router({
  mode: 'history',
  routes: [
    //入口
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: 'h5组件库(vue)'
      }
    },

    //微信上传图片
    {
      path: '/wxUploadImg',
      name: 'wxUploadImg',
      component: WxUploadImg,
      meta: {
        title: '微信api-上传图片'
      }
    },
    //微信分享
    {
      path: '/wxShare',
      name: 'wxShare',
      component: WxShare,
      meta: {
        title: '微信api-分享'
      }
    },
    //微信禁止分享
    {
      path: '/wxShareForbids',
      name: 'wxShareForbids',
      component: WxShareForbids,
      meta: {
        title: '微信api-禁止分享'
      }
    },
    //微信支付
    {
      path: '/wxPay',
      name: 'wxPay',
      component: WxPay,
      meta: {
        title: '微信api-支付'
      }
    },
    //滚动加载
    {
      path: '/sorcll',
      name: 'sorcll',
      component: Sorcll,
      meta: {
        title: '滚动加载'
      }
    },
    //图片上传
    {
      path: '/upimg',
      name: 'upimg',
      component: Upimg,
      meta: {
        title: '单个图片上传'
      }
    },
    //404错误页面
    {
        path: '*',
        name: '',
        component: Error,
        meta: {
            title: '抱歉--访问出错了'
        }
    },
    {
      path: '/nineSquare',
      name: 'NineSquare',
      component: NineSquare,
      meta: {
        title: '九宫格'
      }
    },
    {
      path: '/rotate',
      name: 'Rotate',
      component: Rotate,
      meta: {
        title: '大转盘'
      }
    },
    {
      path: '/uploadQiniu',
      name: 'UploadQiniu',
      component: UploadQiniu,
      meta: {
        title: '上传图片到七牛云'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/vueInstall',
      name: 'VueInstall',
      component: VueInstall,
      meta: {
        title: 'vue安装'
      }
    },
  ]
});
