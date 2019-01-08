$(function(){

    $('#text1').fadeIn(3000);
    $('#text2').fadeIn(3000);
    $('#text3').fadeIn(3000);
    $('#text4').fadeIn(3000);
    $('#text5').fadeIn(3000);
    $('#text6').fadeIn(3000);




//音乐自动播放
$(document).ready(function(){
    autoPlayMusic();
    audioAutoPlay();
});
function audioAutoPlay() {
    var audio = document.getElementById('bg-music');
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
}
// 音乐播放
function autoPlayMusic() {
    // 自动播放音乐效果，解决浏览器或者APP自动播放问题
    function musicInBrowserHandler() {
        musicPlay(true);
        document.body.removeEventListener('touchstart', musicInBrowserHandler);
    }
    document.body.addEventListener('touchstart', musicInBrowserHandler);
    // 自动播放音乐效果，解决微信自动播放问题
    function musicInWeixinHandler() {
        musicPlay(true);
        document.addEventListener("WeixinJSBridgeReady", function () {
            musicPlay(true);
        }, false);
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}
function musicPlay(isPlay) {
    var media = document.querySelector('#bg-music');
    if (isPlay && media.paused) {
        media.play();
    }
    if (!isPlay && !media.paused) {
        media.pause();
    }
}

function rand(m,n){
    return Math.floor(Math.random()*(n-m+1))+m;

}
// 封装创建雪花的函数
function cretaSnow(){
    // 1. 创建雪花节点
    var snow=document.createElement('div');
    // 创建属性节点
    var cname=document.createAttribute('class');
    cname.value='snow';
    // 向雪花添加属性节点
    snow.attributes.setNamedItem(cname);
    // 设置雪花的内容
    snow.innerHTML='❀';
    //设置大小 透明度
    snow.style.fontSize=rand(8,28)+'px';
    snow.style.opacity=Math.random();
    // 设置雪花初始 随机的位置
    snow.style.left=rand(0,document.documentElement.clientWidth)+'px';
    snow.style.top='-50px';
    // console.log(snow);
    // 向body添加节点
    document.body.appendChild(snow);


    //2. 计算雪花可移动的最大距离
    var maxTop=document.documentElement.clientHeight-snow.offsetHeight;
    var maxLeft=document.documentElement.clientWidth-snow.offsetWidth;
    // console.log(maxLeft,maxTop)

    //3. 设置雪花运动 飘落
    var vx=Math.floor(Math.random()*3)-1;
    var vy=3;

    //4. 设置雪花下落
    var t=setInterval(function(){
        // snow 节点的 left  top值 原来的原来位置+速度
        snow.style.left=parseInt(snow.style.left)+vx+'px';
        snow.style.top=parseInt(snow.style.top)+vy+'px';
        // 碰到浏览器边界 清除当前雪花的节点 清除当前雪花的定时器;

        // 判断left top值
        if(parseInt(snow.style.top)>=maxTop){
            clearInterval(t);
            document.body.removeChild(snow);
        }
        if (parseInt(snow.style.left)>=maxLeft || parseInt(snow.style.left)<0) {
            clearInterval(t);
            document.body.removeChild(snow);
        }

    },10);
}
// 使用定时器创建多个节点
setInterval(function(){
    cretaSnow();
    // console.log(document.getElementsByClassName('snow').length);
},100)

})