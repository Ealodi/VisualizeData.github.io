$(function(){
    $('.one').mouseenter(function(){
        $(this).find(".im").stop(true, true).hide(500);
        
        //  $(".im").mouseenter(function(){
        // $(this).hide(500);
        // }); 

//  $(".hid").focus(function(){
$(this).find(".hid").stop(true, true).delay(300).animate({        
    height:70
}, 500);
// });5
// 
//  $(".top").focus(function(){
$(this).find(".top").stop(true, true).animate({        
    fontSize:"20px",	
     top: "10px"
}, 400);
// });
// // 
//  $(".second").focus(function(){
$(this).find(".second").stop(true, true).animate({        
    width:"80px",	
     top: "10px"
}, 400);
// });
// 
// $(".link").mouseenter(function(){
$(this).find(".link").stop(true, true).delay(300).animate({        
    height:"show",
    opacity: 1
}, 500);
// });

});

$('.one').mouseleave(function(){
    $(this).find(".im").stop(true, true).show(500);
// $(".im").mouseleave(function(){	
// $(this).delay(800).show(500);
// });

// $(".hid").focus(function(){	
    $(this).find(".hid").stop(true, true).animate({        
        height:0
    }, 500);
// 	});
// 	
// 	$(".top").focus(function(){	
    $(this).find(".top").stop(true, true).delay(600).animate({        	
        fontSize:"28px",
         top: "44px"
    }, 500);
// 	});
// 	// 
// 	$(".second").focus(function(){
// 	});
    // 
    // $(".link").mouseleave(function(){
    $(this).find(".link").stop(true, true).animate({        
        height:"hide",
        opacity: 0
    }, 0);
    // });
    
});		

})