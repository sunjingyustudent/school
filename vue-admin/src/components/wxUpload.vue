<template>
	<div v-if="imgList.length>=1" class="weixinList">
		<ul class="list-thumb" v-for="(item,index) in imgList" :key="index">
			<li class="thumb-img">

			  <img :src="item.thumbUrl" :serverId="item.id" @click="previewImage(index)"/>
			</li>
			<span class="thumb-del" @click="delImage(item.id)">X</span>
		</ul>
	</div>
</template>

<script>
const Util = require('../util/util');//url参数
export default {
	props:['imgList'],
    data(){
      return{
      	localId: [],
      	mediaId: []
      }
    },
    methods:{
        //预览图片
        splitData(){
	    	const _this   = this;
	    	_this.localId = [];
			_this.mediaId = [];
	    	if(_this.imgList.length>=1){
				for (let i = 0; i < _this.imgList.length; i++) {
					_this.localId.push(_this.imgList[i].thumbUrl);
					_this.mediaId.push(_this.imgList[i].id);
				}
				return true;
			}else{
				return false;
			}
        },
        //预览图片-如只需要单独预览，调用该函数即可
        previewImage(index){
        	const _this  = this;
        	if(_this.splitData()){
	    		wx.previewImage({
			      current: _this.localId[index],//当前index
			      urls: _this.localId,//图片集
			      success:function (res) {
			        //显示所有功能项
			        wx.showAllNonBaseMenuItem();
			        wx.showMenuItems({
			          menuList: ['menuItem:delete'] // 要显示的删除菜单项
			        });
			      }
			    });
		    }
        },
        //删除图片
        delImage(id){
			const _this = this;
			Util.delArrayObj(_this.imgList,id);
			_this.splitData();
			//_this.$emit('mediaId',_this.mediaId);
			let postList = {"mediaId":_this.mediaId,"imgList":_this.imgList};
			_this.$emit('mediaId',postList);
        }
    },
    mounted(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.weixinList{
	display: inline-block;
	width:100%;
	height:100%;
    margin:0 auto;
	// *zoom:1;
	ul{
	    width:auto;
         max-width: 100%;
	    height: 2.08rem;
	    position: relative;
	    display: inline-block;
	    li.thumb-img{
		    height: 2.08rem;
		    width:auto;
             max-width: 100%;
		    display: inline-block;
		    img{
			    display: inline-block;
			    width: auto;
                max-width: 100%;
			    height: 2.08rem;
			    margin-bottom: 0.2rem;
			}
		}
		span{
		    position: absolute;
		    right: 3px;
		    top: 3px;
		    width: .2rem;
		    height: .2rem;
		    display: inline-block;
		    background: rgba(0,0,0,0.3);
		    color: #fff;
		    line-height: .2rem;
		    border-radius: .2rem;
		    -moz-border-radius: .2rem;
		    -webkit-border-radius: .2rem;
		}
	}
}
</style>
