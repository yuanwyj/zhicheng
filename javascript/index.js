$(function() {        

    $('.main-menu').hover(function(){
        $('#navBox').fadeIn(500);
        $('#menu').hide();
    })
    $("body").click( function() {
        $('#navBox').hide();
        $('#menu').fadeIn();   
    })   
    $('.server-btn').click( function() {
        var src = ''
        switch( this.dataset.type ) {
            case 'paint': 
                src = 'images/servicecontent/paintings-show.jpg';
                break;
            case 'ppt':
                src = 'images/servicecontent/ppt-show.jpg';
                break;
            case 'talent':
                src = 'images/servicecontent/paintings-show.jpg';
                break;          
            case 'account':
                src = 'images/servicecontent/paintings-show.jpg';
                break;          
            case 'train':
                src = 'images/servicecontent/train-show.jpg';
                break;          
            case 'performance':
                src = 'images/servicecontent/paintings-show.jpg';
                break;
        }
        if( src ) {     
            $("#showImg").attr("src", src);
            $(".show-server").fadeIn()
        }
    })
    $('.show-server').click( function() {
        $(".show-server").fadeOut()
    })

    // 导航添加滑动效果
    $(".link").click(function () {

        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top+ "px"}, 500);
        $("#navBox").hide();  
        $("#menu").show();  
        // 防止卡顿
        return false;
    });

    // 作品展示轮播控制
    $('#productList').carousel({
        interval: false
    })
    $('#partnerList').carousel({
        interval: false
    })
    $('#carousel-example-vertical').carousel({
        interval: false
    })
    // 循环轮播到上一个项目
    $("#prev").click(function(){
        $("#productList").carousel('prev');
    });
    // 循环轮播到下一个项目
    $("#next").click(function(){
        $("#productList").carousel('next');
    });


    $("#submit").click( function() {
        var name = $("#name").val();
        var contact = $("#contact").val();
        var area = $("#area").val();
        var content = $("#content").val();
          $.post("http://www.zhicwh.com/zhicwh/public/index.php/index/index/savefeedback",
          {
            name: name,
            content: content,
            contact: contact,
            area: area
          },
          function(data,status){
            console.log( data )
          });

    })
    MenuHeight();
    goTopEx();
    setTimeout( function() {
        initMap();
    },1000)
});  


//窗口大小改变时，执行  
$(window).resize(function () {  
    //执行代码块  
    MenuHeight();  
});  

// 计算div高度
function MenuHeight() {  
    var bannerHeight = $("#banner").height() - 2;
    $(".logo-nav").height(bannerHeight);
    var width = $(".server-wrapper").width();
    $(".server-wrapper").height( width );
}  


// 浮窗滚动显示 
function goTopEx() { 
    var fixed = document.getElementById("fixed"); 
    function getScrollTop() { 
        return document.documentElement.scrollTop + document.body.scrollTop; 
    } 
    function setScrollTop(value) { 
        if (document.documentElement.scrollTop) { 
            document.documentElement.scrollTop = value; 
        } else { 
            document.body.scrollTop = value; 
        } 
    } 
    window.onscroll = function() { 
        getScrollTop() > 1000 ? fixed.style.display = "": fixed.style.display = "none"; 
    } 
} 

// 初始化地图
function initMap() {

    var center = new qq.maps.LatLng(22.6542300000,114.0218100000);
    var map = new qq.maps.Map(document.getElementById('map'),{
        center: center,
        zoom: 16
    });
    //创建marker
    var marker = new qq.maps.Marker({
        position: center,
        map: map
    });
}