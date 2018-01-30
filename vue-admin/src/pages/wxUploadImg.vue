<template>
  <div class="container">
    <!-- header -->
    <app-header></app-header>

    <div class="item-content item-self-content">
        <!-- 上传图片区 -->
        <div class="upload-img t-center" v-if="images.mediaId.length<3">
          <mt-button type="primary" @click="chooseImage()">上传图片</mt-button>
        </div>

        <!-- 图片展示区 -->
        <div class="show-weixinList" id="show-weixinList">
          <wx-upload v-bind:imgList="images.imgList" v-on:mediaId="getmediaId"></wx-upload>
        </div>
    </div>

  </div>
</template>
<style lang="less" scoped>
</style>
<script>
import Vue from 'vue';
import Test from '../service/test';
import AppHeader from '../components/appHeader';
import WxUpload from '../components/wxUpload';
import { wxUploadConfig } from '../util/wxapi';
import { Button,Toast } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Toast.name, Toast);

export default {
    data(){
      return{
        images:{
          maxNum: 3,//最大上传个数
          localId: [],//微信服务器资源-临时
          imgList: [],//数据对象[localid,serviceid]
          uploadIndex: 0, //上传图片索引
          mediaId: []//mediaId集合
        }
      }
    },
    components:{
      WxUpload,
      AppHeader
    },
    methods:{
        //初始化上传
        initUpload(){
            const _this  = this;
            const url    = window.location.href;
            const params = {
              "url":url
            };
            //获取用户appid信息
            Test.getWxJsTicket(params)
            .then(res => {
               wxUploadConfig(res.data);
            })
            .catch(error => {
                console.log(error)
            })
        },
        //选择图片
        chooseImage(){
          const _this  = this;
          let images   = _this.images;//图片配置
          let allowNum = parseInt(images.maxNum-images.mediaId.length);
          wx.chooseImage({
            count: allowNum, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
              images.uploadIndex = 0;//初始化清空索引
              images.localId     = res.localIds;
              if(res.localIds.length>0){
                _this.uploadImage();
              }
            }
          });
        },
        //上传图片
        uploadImage(){
          const _this = this;//图片配置
          let images  = _this.images;//图片本地资源
          if (images.localId.length <= 0) {
            Toast('请先选择图片上传');
            return;
          }else{
            wx.uploadImage({
              localId: images.localId[images.uploadIndex],
              success: function(res) {
                let objList = {"thumbUrl":images.localId[images.uploadIndex],"id":res.serverId};
                images.imgList.push(objList);//传子组件
                images.mediaId.push(res.serverId);//保存mediaId

                //递归保存多张图片
                images.uploadIndex++;
                if(images.uploadIndex < images.localId.length) {
                  _this.uploadImage();
                }
              },
              fail: function(res) {
                Toast(JSON.stringify(res));
              }
            });
          }
        },
        //获取子组件传过来的值
        getmediaId:function(data){
          const _this    = this;
          let images     = _this.images;//图片本地资源
          images.mediaId = data.mediaId;
          //alert(JSON.stringify(images.mediaId));
          images.imgList = data.imgList;
        }
    },
    mounted(){
      this.initUpload();
    }
}
</script>
