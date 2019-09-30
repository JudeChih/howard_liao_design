$(function(){
    //導覽列展開按鈕
    $('.bar_line').on('click',function(){
        $('.nav_wrap').show();
        $('.nav_wrap').animate({'right':0},500);
        $(this).fadeOut(250);
    })
    //導覽列關閉按鈕
    $('.close').on('click',function(){
        $('.nav_wrap').animate({'right':'-'+$('.nav_wrap').width()},500);
        setTimeout(function() {
            $('.bar_line').fadeIn(250);
        }, 250);
    })
    //主導覽列點擊滑出子導覽列
    $('.nav_bar .hasSubNav').on('click',function(){
        // $('.subnav_bar').show();
        $('.nav_bar').animate({'right':$('.nav_wrap').width()},500);
        $('.subnav_bar').animate({'right':0},500);
        // setTimeout(function() {
        //     $('.nav_bar').hide();
        // }, 500);
    })
    //子導覽列點擊回主導覽列
    $('.subnav_bar .subna_title').on('click',function(){
        // $('.nav_bar').show();
        $('.nav_bar').animate({'right':0},500);
        $('.subnav_bar').animate({'right':'-'+$('.nav_wrap').width()},500);
        // setTimeout(function() {
        //     $('.subnav_bar').hide();
        // }, 500);
    })
})