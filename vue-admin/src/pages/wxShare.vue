<template>
  <div class="container">
    <!-- header -->
    <app-header></app-header>

    <!-- content -->
    <div class="item-content item-self-content t-center">点击右上角分享</div>

  </div>
</template>
<style lang="less" scoped>
</style>
<script>
import Vue from 'vue';
import Test from '../service/test';
import AppHeader from '../components/appHeader';
import { wxShare } from '../util/wxapi';

export default {
    data(){
      return{
      }
    },
    components:{
      AppHeader
    },
    methods:{
        //初始化微信分享配置
        init: function(){
            const shareParams = {
                title : "快来看看ta的暑托课后单",
                desc: "VIP致力于打造精品晚托课程，让您随时随地收获孩子成长。",
                link: "",
                imgUrl: "http://orgt5vbih.bkt.clouddn.com/wxShare.jpg",
                jsApiList: ""
            };
            Test.getWxJsTicket({url:window.location.href})
            .then(res => {
                //自定义分享，如不需要自定义分享内容，则不传递shareParams即可，系统默认拿去env.js里面的对应环境的share配置
                wxShare(res.data,shareParams);
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    mounted(){
        this.init();
    }
}
</script>
