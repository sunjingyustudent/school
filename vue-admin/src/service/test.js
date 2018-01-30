/*
* 模块调取后台test模块api
* @api 后台api地址
* @link 全局链接地址
* @share 全局分享默认配置
*/
import HttpRequest from '../api/http';

const TEST = {
    //获取微信签名
    getWxJsTicket: function(params) {
        return HttpRequest("post", "/user/get-wxjssdk-auth", params);
    },
    //获取上传的微信图片
    getWeixinImg: function(params) {
        return HttpRequest("get", "/test/getmedia", params);
    },
    //获取微信支付参数
    getWxParams(params) {
        return HttpRequest("post", "/pay/activity", params)
    },
    //从后端获取上传到七牛云的token
    getToken(params) {
        return HttpRequest("get", "/api/mini/get-token", params)
    },
    //上传图片到七牛
    uploadImgToQiniu(params,config) {
        return HttpRequest("post", "", params ,'http://upload.qiniu.com/',config);
    }

}
export default TEST;
