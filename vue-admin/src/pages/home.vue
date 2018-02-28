<template>
  <div class="home-wrap">
    <div class="home-head">
      <div class="head-menuList" :class="{'MenuList':!extendTopFlag}">
        <span class="head-menuList-item">推荐 记得</span>
        <span class="head-menuList-item">前端</span>
        <span class="head-menuList-item">后端</span>
        <span class="head-menuList-item">数据库</span>
        <span class="head-menuList-item">论坛</span>
      </div>
      <div class="head-extend" @click="clickMenu" :class="{'extendBoder':!extendTopFlag}">
        <span class="head-extend-span " :class="{'extend-span-top':extendTopFlag}">
        </span>
        <span class="head-extend-span" :class="{'extend-span-middle':extendTopFlag}">
        </span>
        <span class="head-extend-span " :class="{'extend-span-bottom':extendTopFlag}">
        </span>
      </div>
    </div>
    <div class="home-body">
      <div class="article-item" @click="inter">
        <img src="../assets/images/vue.png" class="article-img" />
        <div class="article-info">
          <span class="article-title">
           vue安装
         </span>
         <span class="article-time">
           <img src="../assets/images/time-icon.png" class="article-time-icon" />
           2018-2-1 最后更新
         </span>
       </div>
     </div>
   </div>
   <div class="home-footer">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="../assets/images/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../assets/images/office.png">
        浏览记录
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../assets/images/account.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</div>   
</div>
</template>
<style lang="less">
  .home-wrap{
    width: 100%;
    .home-head{
      width: 100%;
      height: 3rem;
      position: relative;
      .head-menuList{
        width: 375/20rem;
        padding-right:3rem;
        border-bottom:1px solid #ccc;
        z-index: 999;
        color: #999;
        font-size: .8rem;
        background-color: #FAFAFA;
        .head-menuList-item{
          display: inline-block;
          width: 3.7rem;
          height: 3rem;
          line-height: 3rem;
          text-align: center;
        }
      }
      .MenuList{
        height: 3rem;
        overflow: hidden;
      }
      .head-extend{
        position: absolute;
        width: 3rem;
        height: 3rem;
        right: 0;
        top: 0;
        z-index: 999;
        background-color: #FAFAFA;
        padding: 1rem 1rem;
        .head-extend-span{
          width: 100%;
          height: .1rem;
          display: block;
          margin-bottom: .3rem;
          background-color: #ccc;
        }
        .extend-span-top{
          transform-origin:0% 0%;
          transform:rotate(45deg);
          -ms-transform:rotate(45deg);   /* IE 9 */
          -moz-transform:rotate(45deg);  /* Firefox */
          -webkit-transform:(45deg); /* Safari 和 Chrome */
          -o-transform:rotate(45deg);
          animation: openMenu 1s;
          -webkit-animation:openMenu 1s;
          -moz-animation:openMenu 1s;
          -o-animation:openMenu 1s;
        }
        @keyframes openMenu{
          0% {transform:rotate(0deg);}
          100%{
            transform:rotate(45deg);
            -ms-transform:rotate(45deg);  /*ie 9*/
            -moz-transform:rotate(45deg); /* 火狐 */ 
            -webkit-transform:(45deg); /*  谷歌、safari*/
            -o-transform:rotate(45deg);
          }
        }
        @-webkit-keyframes openMenu{
          0% {transform:rotate(0deg);}
          100% {
            transform:rotate(45deg);
            -ms-transform:rotate(45deg);  /*ie 9*/
            -moz-transform:rotate(45deg); /* 火狐 */ 
            -webkit-transform:(45deg); /*  谷歌、safari*/
            -o-transform:rotate(45deg);
          }
        }
        @-moz-keyframes openMenu{
          0% {transform:rotate(0deg);}
          100% {
            transform:rotate(45deg);
            -ms-transform:rotate(45deg);  /*ie 9*/
            -moz-transform:rotate(45deg); /* 火狐 */ 
            -webkit-transform:(45deg); /*  谷歌、safari*/
            -o-transform:rotate(45deg);
          }
        }
        @-o-keyframes openMenu{
          0% {transform:rotate(0deg);}
          100% {
            transform:rotate(45deg);
            -ms-transform:rotate(45deg);  /*ie 9*/
            -moz-transform:rotate(45deg); /* 火狐 */ 
            -webkit-transform:(45deg); /*  谷歌、safari*/
            -o-transform:rotate(45deg);
          }
        }
        .extend-span-bottom{
          transform-origin:0% 0%;
          transform:rotate(-45deg);
          -ms-transform:rotate(-45deg);   /* IE 9 */
          -moz-transform:rotate(-45deg);  /* Firefox */
          -webkit-transform:(-45deg); /* Safari 和 Chrome */
          -o-transform:rotate(-45deg);
          animation: hiddenMenu 1s;
          -webkit-animation:hiddenMenu 1s;
          -moz-animation:hiddenMenu 1s;
          -o-animation:hiddenMenu 1s;
        }
        @keyframes hiddenMenu{
          0% {transform:rotate(0deg);}
          100%{
            transform:rotate(-45deg);
            -ms-transform:rotate(-45deg);  /*ie 9*/
            -moz-transform:rotate(-45deg); /* 火狐 */ 
            -webkit-transform:(-45deg); /*  谷歌、safari*/
            -o-transform:rotate(-45deg);
          }
        }
        @-webkit-keyframes hiddenMenu{
          0% {transform:rotate(0deg);}
          100%{
            transform:rotate(-45deg);
            -ms-transform:rotate(-45deg);  /*ie 9*/
            -moz-transform:rotate(-45deg); /* 火狐 */ 
            -webkit-transform:(-45deg); /*  谷歌、safari*/
            -o-transform:rotate(-45deg);
          }
        }
        @-moz-keyframes hiddenMenu{
          0% {transform:rotate(0deg);}
          100%{
            transform:rotate(-45deg);
            -ms-transform:rotate(-45deg);  /*ie 9*/
            -moz-transform:rotate(-45deg); /* 火狐 */ 
            -webkit-transform:(-45deg); /*  谷歌、safari*/
            -o-transform:rotate(-45deg);
          }
        }
        @-o-keyframes hiddenMenuhiddenMenu{
          0% {transform:rotate(0deg);}
          100%{
            transform:rotate(-45deg);
            -ms-transform:rotate(-45deg);  /*ie 9*/
            -moz-transform:rotate(-45deg); /* 火狐 */ 
            -webkit-transform:(-45deg); /*  谷歌、safari*/
            -o-transform:rotate(-45deg);
          }
        }
        .extend-span-middle{
          opacity: 0;
        }
      }
      .extendBoder{
        border-left:1px solid #ccc;
        border-bottom:1px solid #ccc;
      }
    }
    .home-body{
      width: 100%;
      .article-item{
        width: 100%;
        height: 105/20rem;
        border-bottom: 5/20rem solid #eee;
        padding: 20/20rem; 
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        .article-img{
          width: 60/20rem;
          height: 60/20rem;
          margin-right: 1rem;
        }
        .article-info{
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          flex: 1;
          .article-title{
            display: block;
            width: 100%;
            height: 30/20rem;
            line-height: 30/20rem;
            font-size: 0.8rem;
          }
          .article-time{
            width: 100%;
            height: 1rem;
            line-height: 1rem;
            font-size: .6rem;
            color: #999;
            .article-time-icon{
              width: 15/20rem;
              height: 15/20rem;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }

</style>
<script>
  import Vue from 'vue';
  import { Tabbar, TabItem } from 'mint-ui';

  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);

  export default {
    data(){
      return{
        extendTopFlag:false,
        selected:'tab1',
      }
    },
    components:{
    },
    methods:{
      clickMenu(){
        let _this = this;
        
        if(_this.extendTopFlag){
          _this.extendTopFlag = false;
        }else{
          _this.extendTopFlag = true;
        }
      },
      inter(){
        console.log("进入vue安装");
        this.$router.push('/vueInstall');

      }
    },
    mounted(){
    }
  }
</script>
