<template>
  <div class="container">
    <!-- header -->
    <app-header></app-header>

    <!-- content -->
    <div class="item-content item-self-content t-center">初始化执行微信禁止分享api方法即可。</div>

  </div>
</template>
<style lang="less" scoped>
</style>
<script>
import Vue from 'vue';
import Test from '../service/test';
import AppHeader from '../components/appHeader';
import { wxShareForbids } from '../util/wxapi';

export default {
    data(){
      return{
      }
    },
    components:{
      AppHeader
    },
    methods:{

    },
    mounted(){
        wxShareForbids();
    }
}
</script>
