
$(document).ready(function(){

    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })

})

$(Window).scroll(function(){
    let position = $(this).scrollTop();
    
    if(position >= 200){
        $('.nav-menu').addClass('custom-navbar')
    }else{
        $('.nav-menu').removeClass('custom-navbar')
    }
})

$(Window).scroll(function(){
    let position = $(this).scrollTop();
    
    if(position >= 700){
        $('#award-text').addClass('fromright')
        $('#award-img').addClass('fromleft')
    }else{
        $('#award-text').removeClass('fromright')
        $('#award-img').removeClass('fromleft')
    }
})


$('.gallery-item').click(function(){

    let value = $(this).attr('data-filter');
    $(this).addClass('activeitem').siblings().removeClass('activeitem')
    if(value === 'all'){
        $('.filter').show(300)
    }else{
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
    }
})





$(Window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position)
    if(position >= 4400){
        $('#card-1').addClass('move-from-right')
        $('#card-3').addClass('move-from-left')
        $('#card-2').addClass('move-from-center')
    }else{
        $('#card-1').removeClass('move-from-right')
        $('#card-3').removeClass('move-from-left')
        $('#card-2').removeClass('move-from-center')
    }
})