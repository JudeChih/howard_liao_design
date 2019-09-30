$(function(){
    //判斷是要去哪個分頁
    var strUrl = location.search;
    if(strUrl.indexOf('?') > -1){
        var getPara, ParaVal;
        var getSearch = strUrl.split("?");
        getPara = getSearch[1].split("&");
        ParaVal = getPara[0].split("=");
        if(ParaVal[0] == 'page'){
            if(ParaVal[1] == 'recruit'){
                $('.content_recruit').fadeIn(500);
            }else if(ParaVal[1] == 'team'){
                $('.content_team').fadeIn(500);
                changeCardHeight();
            }else{
                $('.content_recruit').fadeIn(500);
            }
        }else{
            $('.content_recruit').fadeIn(500);
        }
    }else{
        $('.content_recruit').fadeIn(500);
    }
    
    changeCardHeight();

    function changeCardHeight(){
        $('.card').each(function(){
            $(this).css({'height':$('.image img').height()});
        })
    }

    $(window).resize(function(){
        changeCardHeight();
    })
    
})