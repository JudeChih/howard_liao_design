$(function(){
    //首頁一開始的logo頁點擊設定
    var started = false;
    $('#first_page').on('click',function(){
        $(this).fadeOut(1000);
        imgSlider();
        started = true;
    })
    //首頁一開始的logo頁如果不點擊的話3秒後自動消失
    setTimeout(function() {
        if(!started){
            $('#first_page').fadeOut(1000);
            imgSlider();
        }
    }, 3000);
    //設定所有幻燈片圖片路徑
    $('#viewport .slider_img').each(function(){
        $(this).css({'background-image':'url('+$(this).data('url')+')'});
    })
    
    
    //監聽滿版幻燈片圖片的寬度
    $(window).resize(function(){
        $('#viewport .slider_img').css({'width':$(window).width()});
    })

    //首頁幻燈片效果
    var imgSlider = function(){
        var num = 0;
        $('.slider_item').eq(num).show();
        setInterval(function(){
            $('.slider_item').eq(num).css({'z-index':2});
            $('.slider_item').eq(num).fadeOut(1000);
            num++;
            if(num >= $('.slider_item').length){
                num = 0;
            }
            $('.slider_item').eq(num).css({'z-index':1});
            $('.slider_item').eq(num).fadeIn(500);
        },12000);

        var word = 0;
        $('.word_item').eq(word).show();
        setInterval(function(){
            $('.word_item').eq(word).fadeOut(1000);
            word++;
            if(word >= $('.word_item').length){
                word = 0;
            }
            $('.word_item').eq(word).fadeIn(1000);
        },12000);
    }
})