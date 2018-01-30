<template>
	<div class="up-img-big">
	    <div class="up-file-img clearfix">
	    	<div class="up-file-cont clearfix">
	    		<div class="img-items">
		        	<div class="picture" :style="'backgroundImage:url('+imgItems+')'"></div>
		    	</div>
	    	</div>
	    	<div class="up-file-bnt clearfix">
	        	<input type="file" id="upload" multiple="multiple" accept="image" @change="upload">
	        	<label for="upload">选择图片</label>
	    	</div>
	    </div>
	</div>
</template>
<script>
export default {
    data() {
            return {
                imgItems: '',
                picValue: []
            }
        },
        mounted() {},
        methods: {
            upload(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                this.picValue = files;  
                this.imgPreview(this.picValue);
            },
            imgPreview(file) {
                let self = this;
                 
                //看支持不支持FileReader
                if (!file[0] || !window.FileReader) return;

                if (/^image/.test(file[0].type)) {
                    // 创建reader
                    let reader = new FileReader();
                    // 转成 base64 格式
                    reader.readAsDataURL(file[0]);
                    //读取成功后的回调
                    reader.onloadend = function() {
                        let result = this.result;
                        let img = new Image();
                        img.src = result;
                        self.imgItems = this.result;
                        self.postImg(file[0])
                    }
                }
            },
            postImg(o) {
                //回调值
                this.$emit('imgVal',o);
            }
        }
}
</script>
<style lang="less">
.up-img-big{
    .up-file-bnt{
    	position: relative;
    	top: 6px;
    }
    .up-file-bnt input{
    	visibility: hidden;
    	display: none;
    }
    .up-file-bnt label{
    	color: #fff;
        background-color: #20a0ff;
        border-color: #20a0ff;
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        border: 1px solid #bfcbd9;
        color: #fff;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 10px 15px;
        font-size: 14px;
        border-radius: 4px;
    }

    .img-items {
      width: 80px;
      height: 80px;
      overflow: hidden;
      position: relative;
      border-radius: 6px;
      border: 1px solid #c0ccda;
      float: left;
      margin:5px;
    }

    .picture {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      
    }
}
</style>
