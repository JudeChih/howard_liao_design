$(function(){
    var json = {
        'profile':[{'name':'ABOUT HLD','href':'/profile.html?page=about'},{'name':'NEWS','href':'/profile.html?page=news'}],
        'recruit':[{'name':'RECRUIT','href':'/recruit.html?page=recruit'},{'name':'TEAM INTRODUCTIO','href':'/recruit.html?page=team'}]
    }
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
            $('.nav_wrap').fadeOut(250);
        }, 250);
    })
    //主導覽列點擊滑出子導覽列
    $('.nav_bar .hasSubNav').on('click',function(){
        if($(this).data('page') == 'profile'){
            $('.subnav_bar ul').html('');
            $('.subnav_bar ul').append('<li class="subnav_title"><a href="javascript:void(0)"></a></li>');
            $('.subnav_title a').text('PROFILE');
            for(var i = 0 ; i < json.profile.length ; i++){
                var string = '<li><a href="'+ json.profile[i].href +'">'+ json.profile[i].name +'</a></li>';
                $('.subnav_bar ul').append(string);
            }
        }else if($(this).data('page') == 'recruit'){
            $('.subnav_bar ul').html('');
            $('.subnav_bar ul').append('<li class="subnav_title"><a href="javascript:void(0)"></a></li>');
            $('.subnav_title a').text('RECRUIT');
            for(var i = 0 ; i < json.recruit.length ; i++){
                var string = '<li><a href="'+ json.recruit[i].href +'">'+ json.recruit[i].name +'</a></li>';
                $('.subnav_bar ul').append(string);
            }
        }
        $('.nav_bar').animate({'right':$('.nav_wrap').width()},500);
        $('.subnav_bar').show();
        $('.subnav_bar').animate({'right':0},500);
        //子導覽列點擊回主導覽列
        $('.subnav_bar .subnav_title').on('click',function(){
            $('.nav_bar').animate({'right':0},500);
            $('.subnav_bar').animate({'right':'-'+$('.nav_wrap').width()},500);
            setTimeout(function(){
                $('.subnav_bar').hide();
            },500);
        })
    })
    
})