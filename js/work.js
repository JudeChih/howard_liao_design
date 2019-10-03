$(function(){
    var work_json = [
        {'image':'/image/work_06_big.jpg','title':'STYLE01.COM','intro':'The 2011’s Concept for Millie’s Shoe Boutique is to create a comfortable','content':'cozy and carefree environment for the customers to pick their favorite pair of shoes. The whole interior design is The whole interior design is'},
        {'image':'/image/work_06_big.jpg','title':'STYLE02.COM','intro':'The 2012’s Concept for Millie’s Shoe Boutique is to create a comfortable','content':'cozy and carefree environment for the customers to pick their favorite pair of shoes. The whole interior design is The whole interior design is'},
        {'image':'/image/work_06_big.jpg','title':'STYLE03.COM','intro':'The 2013’s Concept for Millie’s Shoe Boutique is to create a comfortable','content':'cozy and carefree environment for the customers to pick their favorite pair of shoes. The whole interior design is The whole interior design is'},
        {'image':'/image/work_06_big.jpg','title':'STYLE04.COM','intro':'The 2014’s Concept for Millie’s Shoe Boutique is to create a comfortable','content':'cozy and carefree environment for the customers to pick their favorite pair of shoes. The whole interior design is The whole interior design is'},
        {'image':'/image/work_06_big.jpg','title':'STYLE05.COM','intro':'The 2015’s Concept for Millie’s Shoe Boutique is to create a comfortable','content':'cozy and carefree environment for the customers to pick their favorite pair of shoes. The whole interior design is The whole interior design is'},
        {'image':'/image/work_06_big.jpg','title':'STYLE06.COM','intro':'The 2016’s Concept for Millie’s Shoe Boutique is to create a comfortable','content':'cozy and carefree environment for the customers to pick their favorite pair of shoes. The whole interior design is The whole interior design is'},
    ];

    $('.work_item').on('click',function(){
        $('.content_work').fadeOut(500);
        var work = work_json[$(this).data('value') -1];
        $('.content_work_detail .content_left').find('img').attr('src',work.image);
        $('.content_work_detail .content_right').find('.title').text(work.title);
        $('.content_work_detail .content_right').find('.intro').text(work.intro);
        $('.content_work_detail .content_right').find('.content').text(work.content);
        $('.content_work_detail').fadeIn(500);
    })

    $('.back').on('click',function(){
        $('.content_work_detail').fadeOut(500);
        $('.content_work').fadeIn(500);
    })
    
})