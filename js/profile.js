$(function(){
    //判斷是要去哪個分頁
    var strUrl = location.search;
    
    if(strUrl.indexOf('?') > -1){
        var getPara, ParaVal;
        var getSearch = strUrl.split("?");
        getPara = getSearch[1].split("&");
        ParaVal = getPara[0].split("=");
        if(ParaVal[0] == 'page'){
            if(ParaVal[1] == 'about'){
                $('.content_about').fadeIn(500);
            }else if(ParaVal[1] == 'news'){
                $('.content_news').fadeIn(500);
            }else{
                $('.content_about').fadeIn(500);
            }
        }else{
            $('.content_about').fadeIn(500);
        }
    }else{
        $('.content_about').fadeIn(500);
    }
    

    //點擊news圖片會談出細節頁視窗
    $('.news_item').on('click',function(){
        $('.overlay').fadeIn(500);
    })

    //關閉細節頁
    $('.news_detail_wrap .close').on('click',function(){
        $('.overlay').fadeOut(500);
    })
})