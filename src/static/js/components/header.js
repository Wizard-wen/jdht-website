
/**
 * 
 */
    $(function(){
	
        $('.sNavA').each(function(i){
            $(this).hover(
                function(){
                    $('.sNavA').eq(i).addClass('aNow1');
                    if(i<2){
                        $('.sNav').eq(i).css('left',$(this).offset().left);
                    }else if (i<4){
                        $('.sNav').eq(i).css('left',$(this).offset().left-200);
                    }else{
                        $('.sNav').eq(i).css('left',$(this).offset().left-430);
                        }
                    $('.sNav').eq(i).slideToggle(300);
                },
                function(){
                    $('.sNavA').removeClass('aNow1');
                    $('.sNav').hide();
                }
            )
        })	

        $('.sNav').each(function(i){
            $(this).hover(
            function(){
                $('.sNavA').eq(i).addClass('aNow1');
                $(this).show();
                },
            function(){
                $('.sNavA').removeClass('aNow1');
                $('.sNav').hide();
                }
            )
            })
	//--
	        $('.tabContentDiv').find('.tabContent:first').show();
	$('.tab').each(function(i){
		$(this).find('li').each(function(ii){
			$(this).hover(
			function(){
				$('.tab').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv').eq(i).find('.tabContent').hide();
				$('.tabContentDiv').eq(i).find('.tabContent').eq(ii).show();
				},
			function(){}	
				)
			})
		})
	//--
	$('.tabContentDiv2').find('.tabContent2:first').show();
	$('.tab2').each(function(i){
		$(this).find('li').each(function(ii){
			$(this).click(
			function(){
				$('.tab2').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv2').eq(i).find('.tabContent2').hide();
				$('.tabContentDiv2').eq(i).find('.tabContent2').eq(ii).show();
				}
				)
			})
		})
	//--	
	$('.navIco').click(function(){
		$('.navLayer').animate({right: "0",width:"100%"}, 500);
		$('.closeIco').fadeIn(500);
		$('.navIco').fadeOut(500);
		$('.searchLayerTel').fadeOut(500);
		})
	$('.closeIco').click(function(){
		$('.navLayer').animate({right: "-100%",width:0}, 500);
		$('.subNav1').siblings(".navContent").slideUp(500);
		$('.subNav1').removeClass("currentDt");
		$('.closeIco').fadeOut(500);
		$('.navIco').fadeIn(500);
		$('.pageBg').fadeOut(500);
		})
	//--
	$(".subNav1").click(function(){
			$(this).toggleClass("currentDt").siblings(".subNav1").removeClass("currentDt")
			$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500)
	})
	//--
	$('.header').find('.topSearchIco').click(function(){
		$('.searchLayerTel').fadeIn(500);
		$('.pageBg').fadeIn(500);
		$('.navLayer').animate({right: "-100%",width:0}, 500);
		$('.navIco').fadeIn(500);
		$('.closeIco').fadeOut(500);
		})
	//--
	$('.pageBg').click(function(){
		$('.searchLayerTel').fadeOut(500);
		$('.pageBg').fadeOut(500);
		})
	//--
	$('.sideTitleTel').find('.tan').toggle(
	   function(){
		   $('.sideTitleNav').show();
		   $('.sideTitleTel').find('.con').addClass('on');
		   },
	   function(){
		   $('.sideTitleNav').hide();
		   $('.sideTitleTel').find('.con').removeClass('on');
		   }
	)
	$('.sideTitleNav').find('.li01').find('em').find('a').toggle(
	   function () {
	       $('.sideTitleNav').find('.li01').find('em').find('a').addClass('on1');
	       $('.sideTitleNav').find('dl').show();
	   },
	   function () {
	       $('.sideTitleNav').find('.li01').find('em').find('a').removeClass('on1');
	       $('.sideTitleNav').find('dl').hide();
	   }
	)

	//--
	$('.listHover').find('li').hover(
	   function(){
		   $(this).addClass('on');
		   },
	   function(){
		   $(this).removeClass('on');
		   }
	)
	//--
	if($('.topA').length>0){
		$(window).scroll(function(){
			if($(window).scrollTop()>200){
				$('.topA').fadeIn(200);
				}else{
					$('.topA').fadeOut(200);
					}
			})
		}
	//--
	$('.topA').click(function(){
		$('body,html').animate({scrollTop: 0}, 500);
		})
	//--
	$('.header').find('.topRight').find('.li01').each(function(i){
		$(this).hover(
		  function(){
			  $('.header').find('.topRight').find('.li01').eq(i).find('.hideBox').slideToggle(300);
			  $('.header').find('.topRight').find('.li01').eq(i).addClass('liNow');
			  },
		  function(){
			  $('.header').find('.topRight').find('.li01').eq(i).find('.hideBox').hide();
			  $('.header').find('.topRight').find('.li01').eq(i).removeClass('liNow');
			  }
		)
		})
	//--
	$('.indexBox').find('.box4').find('li:odd').addClass('li01');
	$('.base').find('.list').find('li:odd').addClass('li01');
	$('.contact').find('.list2').find('li:odd').addClass('li01');
	$('.process').find('.list').find('li:odd').addClass('li01');
	//--
	if($(window).width()>=1004){
		$('.culture').find('li').hover(
		   function(){
			   $(this).find('.ico').stop().animate({top: -10}, 100);
			   $(this).find('.ico').delay(100).animate({top: 0}, 200);
			   },
		   function(){
			   }
		)	
	}
	//--
	$('.applyForm').find('.form').find('dd').click(function(){
		$('.applyForm').find('.form').find('dd').removeClass('ddNow');
		$(this).addClass('ddNow');
	})
	$('.foot').find('.links').hover(
           function(){
               $(this).find('dl').stop(true,true).slideDown(300);
           },
           function(){
               $(this).find('dl').stop(true,true).slideUp(300);
           }
        )
	//下拉通用
// 产品详情下拉功能
	$('.select').each(function(i){
	function showFn(selectObj) { //展开效果
	// 把其他的下拉收起
	$('.select').children("dd").slideUp(200);
	selectObj.children("dd").slideDown(200);
	} 
	function hideFn(selectObj){ //关闭效果
	selectObj.children("dd").slideUp(200);
	}
	function hideAll(){
	$('.select dd').slideUp(200);
	};

	$(this).children('dt').click(function(){
	var index = $(this).parent().index();
	// var z = selectObj.css("z-index");
	var selectObj = $(this).parent();
	$(this).next().is(":hidden")?showFn(selectObj):hideFn(selectObj);
	});
	$(this).children('dd').find("li").click(function(){ 
	var index = $(this).closest('.select').index();
	var dataId=$(this).attr('data-id');
	var selectObj = $(this).closest('.select');
	$(this).closest('.select').children("dt").find('a').html($(this).html());
	$(this).closest('.select').children("dt").find('a').attr('data-id',dataId);
	hideFn(selectObj);
	});
	$("body").click(function(i){ 
	!$(i.target).parents(".select").first().is($(".select")) ? hideAll():"";
	});

	});
	//--
	
})

// window.onresize=function(){
// 	var bigheight=$('.indexPart3').find('.leftDiv').find('img').height();
// 	$('.indexPart3').find('.rightDiv').height(bigheight+'px');
// 	}


// window.onload=function(){
// 	var bigheight=$('.indexPart3').find('.leftDiv').find('img').height();
// 	$('.indexPart3').find('.rightDiv').height(bigheight+'px');
// 	}


jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 600,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});	

$('.video-show-btn').find('a').click(function () {
    $('.videoImg').show();

})
//--
$('.videoImg').find('.close').click(function () {
    $('.videoImg').hide();

})

function search() {
        var keys = document.getElementById("txtk").value;
        location.href = "/NewsCenter/search.aspx?a=n&keys=" + keys;
    }
    function entersearch() {
        //alert(dd);
        var keys = document.getElementById("txtk").value;
        var event = window.event || arguments.callee.caller.arguments[0];
        if (event.keyCode == 13) {
            //search();
            window.location.href = "/NewsCenter/search.aspx?a=n&keys=" + keys;
            return false;
        }
    }
