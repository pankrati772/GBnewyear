﻿function ajax(g){g=g||{};g.data=g.data||{};var f=g.jsonp?jsonp(g):f(g);function f(a){a.type=(a.type||"GET").toUpperCase();a.data=h(a.data);var b=null;if(window.XMLHttpRequest){b=new XMLHttpRequest()}else{b=new ActiveXObjcet("Microsoft.XMLHTTP")}b.onreadystatechange=function(){if(b.readyState==4){var j=b.status;if(j>=200&&j<300){var d="";var c=b.getResponseHeader("Content-type");if(c.indexOf("xml")!==-1&&b.responseXML){d=b.responseXML}else{if(c==="application/json"){d=JSON.parse(b.responseText)}else{d=b.responseText}}a.success&&a.success(d)}else{a.error&&a.error(j)}}};if(a.type=="GET"){b.open(a.type,a.url+"?"+a.data,true);b.send(null)}else{b.open(a.type,a.url,true);b.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");b.send(a.data)}}function h(a){var c=[];for(var b in a){c.push(encodeURIComponent(b)+"="+encodeURIComponent(a[b]))}c.push("v="+e());return c.join("&")}function e(){return Math.floor(Math.random()*10000+500)}}function WxShare(params){var phpdata;var url=window.location.href;ajax({url:"http://www.linmutech.com/gettokens.php",type:"POST",data:{key:"tokens",url:url},success:function(res){phpdata=eval("("+res+")");wx.config({debug:false,ticket:phpdata.ticket,appId:phpdata.appId,timestamp:phpdata.timestamp,nonceStr:phpdata.nonceStr,signature:phpdata.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline","updateAppMessageShareData","updateTimelineShareData"]})},error:function(error){}});wx.ready(function(){wx.onMenuShareAppMessage({title:params.title||"",desc:params.desc||"",link:params.link||"www.linmutech.com",imgUrl:params.imgUrl||"",type:"link"});wx.onMenuShareTimeline({title:params.title||"",desc:params.desc||"",link:params.imgUrl||url,imgUrl:params.link||"",type:"link",dataUrl:""});wx.updateTimelineShareData({title:params.title||"",link:params.link||url,imgUrl:params.link||""});wx.updateAppMessageShareData({title:params.title||"",desc:params.desc||"",link:params.link||url,imgUrl:params.imgUrl||""})})};