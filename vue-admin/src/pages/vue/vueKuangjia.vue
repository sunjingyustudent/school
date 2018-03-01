<template>
  <div class="vueInstall">
    <!-- <img src="../../assets/images/vue/timg.jpg" class="bg" /> -->
    <span class="vueInstall-title">
      git
    </span>
    <span class="small-title">
      1、git 的常用操作
    </span>
    <span class="text">
      1、
    </span>
    <span class="text space">
      安装地址： http://nodejs.cn/download/
    </span>
    <span class="text">
      2、安装vue-cli 脚手架构建工具 
    </span>
    <span class="text space">
      npm install -g vue-cli --registry=https://registry.npm.taobao.org<br>
      由于国内使用npm会很慢，这里推荐使用淘宝NPM镜像
    </span>
    <img src="../../assets/images/vue/1.png" class="chatu" />
    <span class="text">
      2、用vue-cli创建项目 
    </span>
    <span class="text space">
      创建一个webpack模板的新项目
    </span>
    <img src="../../assets/images/vue/2.png" class="chatu" />
    <span class="text space">
      就这样跟着上面的提示创建一个新项目，根据自己需求选择Y/N<br>
      !!!!ESlint那项初学者一定要选择NO！！！
      <br>
      ESlint可以规范你的代码,一个空格错误都会报错，不开启，可以避免不必要的麻烦。
    </span>
    <span class="text space">
      此时E:/下面就多了一个文件夹
    </span>
    <img src="../../assets/images/vue/3.png" class="chatu" />
    <span class="text space">
      我们先来看一下文件目录
    </span>
    <img src="../../assets/images/vue/4.png" class="chatu imgWidth"/>
    <span class="text">
      4、安装项目依赖
    </span>
    <span class="text space">
      npm install --registry=https://registry.npm.taobao.org 去入口文件夹中安装,
      回到项目文件夹，会发现项目结构里，多了一个node_modules文件夹
    </span>
    <span class="text">
      5、运行项目 测试环境是否搭建成功
    </span>
    <span class="text space">
      在index.html 所在目录运行npm run dev,
      然后打开浏览器 ，输入localhost:8080,
      出现
    </span>
    <img src="../../assets/images/vue/5.png" class="chatu imgWidth"/>
    <span class="text space">
      就运行成功了
    </span>

  </div>
</template>
<style lang="less">
  .vueInstall{
    width: 100%;
    color: #000;
    .bg{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .vueInstall-title{
      display: block;
      width: 100%;
      height: 24/20rem;
      line-height: 24/20rem;
      font-size: 1.2rem;
      margin-top: 1rem;
      text-align: center;
    }
    .small-title{
      width: 100%;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 1rem;
      display: block;
      margin: 1rem 0rem;
      padding:0 1rem;
    }
    .text{
      width: 100%;
      line-height: 1rem;
      font-size: .8rem;
      display: block;
      padding:0 1rem;
    }
    .space{
      padding:0 1rem;
      margin-bottom: 1rem;
    }
    .chatu{
      width: 100%;
      margin-bottom: 1rem;
    }
    .imgWidth{
      width: 70%;
    }
  }
</style>
<script>
  import Vue from 'vue';

  export default {
    data(){
      return{

      }
    },
    components:{
    },
    methods:{

    },
    mounted(){
    }
  }
</script>
