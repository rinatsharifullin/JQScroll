$(document).ready(function(){
    
    // $('p').animate({'opacity': 0}, 500)
    //         .delay(1000)
    //         .animate({opacity : 1 }, 1000)
    //         .animate({padding: '10vw'}, 1000)
    //         .queue(function(){
    //             $('div').animate({'height': '100vh'},1000)
    //                     .css('background-color','goldenrod');
    //             $('p').dequeue();
    //         })
    //         .delay(1000)
    //         .animate({'font-size': '5rem'}, 1000);


    // $('#hi').animate({
    //     top:'50vh',
    //     left:'40vw'
    // },1000)
    // .animate({'font-size':'3vw'},1000)
    // .queue(function(){
    //     $(this).css('color','red');
    //     $(this).dequeue();
    // })
    // .delay(1000)
    // .queue(function(){
    //     $(this).css('color','maroon');
    //     $(this).dequeue();
    // })
    // .queue(function(){
    //     $('#im')
    //         .css({'left': '100vw', 'top': '50vh'})
    //         .animate({'left': '50vw'}, 1000)
    //         .animate({'font-size':'3vw'},1000)
    //     $('#hi').dequeue();
    // })
    // .delay(2000)
    // .queue(function(){
    //     $('#rs')
    //     .css({'left': '60vw', 'top': '100vh'})
    //     .animate({'top': '50vh','font-size':'3vw'},2000)
    // })
    $(window).scrollTop(0);
    $('#hi').css({'left': '-10vw', 'top': '-10vh'})
    $('#im').css({'left': '50vw', 'top': '-10vh'})
    $('#rs').css({'left': '100vw', 'top': '00vh'})
    $('#front').css({'left': '0vw', 'top': '100vh'})
    $('#end').css({'left': '33vw', 'top': '100vh'})
    $('#web').css({'left': '67vw', 'top': '100vh'})
    $('#developer').css({'left': '100vw', 'top': '100vh'})
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top < 50){$('#hi').css({left: 10 + '%', top: top/2 + '%', 'font-size': top/7 + 'vw'})
        }else if(top < 150){$('#im').css({left: 25 + '%', top: (top-95)/2 + '%', 'font-size': (top-100)/7 + 'vw'})}
        else if(top < 250){$('#rs').css({left: 40 + '%', top: (top-190)/2 + '%', 'font-size': (top-200)/7 + 'vw'})}
        else if(top < 350){$('#front').css({left: 10 + '%', top: (top-250)/2 + '%', 'font-size': (top-300)/7 + 'vw'})}
        else if(top < 450){$('#end').css({left: 30 + '%', top: (top-340)/2 + '%', 'font-size': (top-400)/7 + 'vw'})}
        else if(top < 550){$('#web').css({left: 45 + '%', top: (top-440)/2 + '%', 'font-size': (top-500)/7 + 'vw'})}
        else if(top < 650){$('#developer').css({left: 60 + '%', top: (top-540)/2 + '%', 'font-size': (top-600)/7 + 'vw'})}
        else if(top > 750){$('div').css({'position': 'absolute', 'top': '750px'})}
        else if(top < 750){$('div').css({'position': 'fixed', 'top': '0px'})}
        if(top > 750){$('img').css({'left': '0%', 'top': '73%', 'opacity': (top-750)/1000})}
    });
    


});