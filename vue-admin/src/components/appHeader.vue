<template>
    <!-- title -->
    <!-- <mt-header :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="" slot="right" @click="closeWxWindow()">关闭微信</mt-button>
    </mt-header> -->
    <header class="fixed-header">
        <ul>
            <li class="back">
                <router-link to="/">back</router-link>
            </li>
            <li class="title">{{title}}</li>
            <li class="more"></li>
        </ul>
    </header>

</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header);
export default {
    data(){
      return{
        title: this.$route.meta.title
      }
    },
    methods:{
        //关闭微信窗口
        closeWxWindow(){
            wx.closeWindow();
        }
    },
    mounted(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.container{
    .fixed-header{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 2.5rem;
        z-index: 2;
        background: #fff;
        border-bottom: #dedede 1px solid;
        text-align: center;
        line-height: 2.5rem;
        background-color: #fafafa;
        color: #333;
        font-size: .9rem;
    }
}
</style>
