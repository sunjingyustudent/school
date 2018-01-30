<template>
  <div class="container">
    <!-- header -->
    <app-header></app-header>

    <!-- content -->
    <div class="item-content item-self-content t-center">
        需要拿到支付appId等参数，请联系后端人员提供。
    </div>

  </div>
</template>
<style lang="less" scoped>
</style>
<script>
import Vue from 'vue';
import Test from '../service/test';
import AppHeader from '../components/appHeader';
import { wxPay } from '../util/wxapi';

export default {
    data(){
      return{
      }
    },
    components:{
      AppHeader
    },
    methods:{
        //调取微信支付
        init: function(){
            const params = {
              "openId": "12"
            };
            Test.getWxParams(params)
            .then(res => {
                wxPay(res.data);
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
