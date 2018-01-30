 /*
  * 获取url参数
  * @name 自定义获取参数名称
  */
 export function getUrlParameter(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
   var r = window.location.search.substr(1).match(reg);
   if (r != null) return unescape(r[2]);
   return null;
 }

/*
* 删除数组对象/数组
* @thisArray 操作的数组对象／数组
* @objId 当前id
*/
 export function delArrayObj(thisArray,objId){
	for (var j = 0; j < thisArray.length; j++) {
	  if(typeof(thisArray[j])=="object"){
	  	var isId = thisArray[j].hasOwnProperty('id');//id

	    if(isId && objId == thisArray[j].id){
	      thisArray.splice(j,1);
	    }
	  }
	  if(typeof(thisArray[j])=="number"){
	    if(objId == thisArray[j]){
	      thisArray.splice(j,1);
	    }
	  }
	}
}

/*
* 获取当前用户设备(h5)
*/
export const checkOs = {
    ua: navigator.userAgent,
    wechat() { return this.ua.match(/(MicroMessenger)\/([\d.]+)/i); },
    android() { return this.ua.match(/(Android);?[\s/]+([\d.]+)?/); },
    ios() { return this.ua.match(/(iPhone\sOS)\s([\d_]+)/); },
};
