<template>

    <div class="container">
        <div class="fixed-header">
            <ul>
                <li class="title">{{title}}</li>
            </ul>
        </div>
        <div class="item-content">
            <!-- 读取组件列表开始-->
            <div v-for="(item,index) in routerConfig" :key="index">

                <mt-cell
                  :title="item.meta.title"
                  :to="item.path"
                  is-link
                  value=""
                  v-if="index>0"
                  >
                </mt-cell>

            </div>
            <!-- 读取组件列表结束-->
        </div>
    </div>
</template>
<style>
    .mint-cell-wrapper{
        background-position: left bottom;
    }
    .item-content a{
        background-image: none;
    }
</style>
<script>
import Vue from 'vue';
import { Cell } from 'mint-ui';
import RouterConfig from '../router/index';
Vue.component(Cell.name, Cell);

export default {
    data(){
      return{
        routerConfig: RouterConfig.options.routes||[],
        title: this.$route.meta.title
      }
    },
    components:{
      Cell
    },
    methods:{

    },
    mounted(){
    }
}
</script>
