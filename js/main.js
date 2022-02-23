// program 영역 select 탭메뉴
// 기본형 
// const selectElement = document.querySelector('.ice-cream');

// selectElement.addEventListener('change', (event) => {
//   const result = document.querySelector('.result');
//   result.textContent = `You like ${event.target.value}`;
// });

$('.plus').on({
    "mouseover": function () {
        $(this).css({ 'animation': 'rotate1 0.5s ease-in-out' })
    },
    "mouseout": function () {
        $(this).css({ 'animation': 'rotate2 0.5s ease-in-out' });
    }
});

$('#program .more').on({
    "mouseover": function () {
        $(this)
            .css({ 'background': '#000' })
            .css({ 'color': '#fff' })
            .css({ 'transition': 'all 0.5s ease-in-out' })
            .css({ 'cursor': 'pointer' });
        $('#program .more figure img').attr("src", "./images/more_white.png")
    },
    "mouseout": function () {
        $(this)
            .css({ 'background': 'none' })
            .css({ 'color': '#000' });
        $('#program .more figure img').attr("src", "./images/more_black.png")
    }
});

$('#academy .more').on({
    "mouseover": function () {
        $(this)
            .css({ 'background': '#fff' })
            .css({ 'transition': 'all 0.5s ease-in-out' })
            .css({ 'cursor': 'pointer' });
        $('#academy .more > span').css({ 'color': '#000' });
        $('#academy .more figure img').attr("src", "./images/more_black.png")
    },
    "mouseout": function () {
        $(this).css({ 'background': 'none' });
        $('#academy .more > span').css({ 'color': '#fff' });
        $('#academy .more figure img').attr("src", "./images/more_white.png")
    }
});

$('.daily-content').on({
    "mouseover": function () {
        var width = $(window).width();
        if (width > 1023) {
            $(this)
                .css({ 'flex': '7' })
                .css({ 'transition': 'all 1s ease-in-out' })
                .css({ 'cursor': 'pointer' });
        }
    },
    "mouseout": function () {
        var width = $(window).width();
        if (width > 1023) {
            $(this)
                .css({ 'flex': '1' })
                .css({ 'transition': 'all 1s ease-in-out' })
                .css({ 'cursor': 'pointer' });
        }
    }
});

$('.news-content:nth-child(1) p').on({
    "mouseover": function () {
        $(this)
            .css({ 'color': '#999' })
            .css({ 'transition': 'all 0.3s ease-in-out' })
            .css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this)
            .css({ 'color': '#000' })
            .css({ 'cursor': 'auto' });
    }
});

$('.news-content:nth-child(2) p').on({
    "mouseover": function () {
        $(this)
            .css({ 'color': '#999' })
            .css({ 'transition': 'all 0.3s ease-in-out' })
            .css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this)
            .css({ 'color': '#000' })
            .css({ 'cursor': 'auto' });
    }
});

$('.news-content:nth-child(3) p').on({
    "mouseover": function () {
        $(this)
            .css({ 'color': '#999' })
            .css({ 'transition': 'all 0.3s ease-in-out' })
            .css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this)
            .css({ 'color': '#000' })
            .css({ 'cursor': 'auto' });
    }
});

$('.news-content:nth-child(1) figure').on({
    "mouseover": function () {
        $(this)
            .css({ 'animation': 'rotate1 0.5s ease-in-out' })
            .css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this)
            .css({ 'animation': 'rotate2 0.5s ease-in-out' })
            .css({ 'cursor': 'pointer' });
    }
});

$('.news-content:nth-child(2) figure').on({
    "mouseover": function () {
        $(this)
            .css({ 'animation': 'rotate1 0.5s ease-in-out' })
            .css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this)
            .css({ 'animation': 'rotate2 0.5s ease-in-out' })
            .css({ 'cursor': 'pointer' });
    }
});

$('.news-content:nth-child(3) figure').on({
    "mouseover": function () {
        $(this)
            .css({ 'animation': 'rotate1 0.5s ease-in-out' })
            .css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this)
            .css({ 'animation': 'rotate2 0.5s ease-in-out' })
            .css({ 'cursor': 'pointer' });
    }
});

// academy영역 select 탭메뉴
var selectTab = document.getElementById("academyTab");
var con = document.getElementsByClassName("academy-content");
selectTab.addEventListener("change", function () {
    var val = selectTab
        .options[selectTab.selectedIndex]
        .value;
    for (var i = 0; i < selectTab.length; i++) {
        con[i].style.display = "none";
        if (val == "academy1") {
            con[0].style.display = "block";
            con[1].style.display = "none";
            documnet
                .getElementById("select1")
                .selected = true;
        } else if (val == "academy2") {
            con[1].style.display = "block";
            documnet
                .getElementById("select2")
                .selected = true;
        }
    }
});

// btn
$('.top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

$('.ticket').click(function () {
    alert('예매 기간이 아닙니다.');
});

// 모바일 메뉴
$('.hamburger').on("click", function (e) {
    e.preventDefault();
    if ($(this).is(":visible")) {
        $('.hamburger').hide();
        $('.close').show();
        $('.h-contents').hide();
        $('.m-header').show();
        $('.search').hide();
        $('main').hide();
        $('#footer').hide();
        $('.btn').hide();
    }
});

$('.close').on("click", function (e) {
    e.preventDefault();
    if ($(this).is(":visible")) {
        $('.close').hide();
        $('.hamburger').show();
        $('.h-contents').show();
        $('.m-header').hide();
        $('.m-gnb').hide();
        $('.m-lnb').hide();
        $('.search').show();
        $('main').show();
        $('#footer').show();
        $('.btn').show();
        $('.m-lnb1').hide();
        $('.m-lnb2').hide();
        $('.m-lnb3').hide();
        $('.m-lnb4').hide();
        $('.m-lnb5').hide();
        $('.m-lnb6').hide();
        $('.m-lnb7').hide();
        $('.m-lnb8').hide();
        $('.m-lnb9').hide();
    }
});

$(window).resize(function () {
    var width = $(window).width();

    if (width > 1024) {
        $('.close').hide();
        $('.hamburger').hide();
        $('.h-contents').show();
        $('.m-header').hide();
        $('.m-gnb').hide();
        $('.m-lnb').hide();
        $('.search').show();
        $('main').show();
        $('#footer').show();
        $('.btn').show();
    }
});

$(function() {
    $('.m-gnb1').on({
        "click": function(e) {
            e.preventDefault();
            $(this).css({"background": "#000"});
            $('.m-gnb1 a').css({"color": "#fff"});
            $('.m-gnb2').css({"background": "unset"});
            $('.m-gnb2 a').css({"color": "unset"});
            $('.m-gnb3').css({"background": "unset"});
            $('.m-gnb3 a').css({"color": "unset"});
            $('.m-gnb4').css({"background": "unset"});
            $('.m-gnb4 a').css({"color": "unset"});
            $('.m-gnb5').css({"background": "unset"});
            $('.m-gnb5 a').css({"color": "unset"});
            $('.m-gnb6').css({"background": "unset"});
            $('.m-gnb6 a').css({"color": "unset"});
            $('.m-gnb7').css({"background": "unset"});
            $('.m-gnb7 a').css({"color": "unset"});
            $('.m-gnb8').css({"background": "unset"});
            $('.m-gnb8 a').css({"color": "unset"});
            $('.m-gnb9').css({"background": "unset"});
            $('.m-gnb9 a').css({"color": "unset"});
            $('.m-lnb1').css({"display": "block"});
            $('.m-lnb2').css({"display": "none"});
            $('.m-lnb3').css({"display": "none"});
            $('.m-lnb4').css({"display": "none"});
            $('.m-lnb5').css({"display": "none"});
            $('.m-lnb6').css({"display": "none"});
            $('.m-lnb7').css({"display": "none"});
            $('.m-lnb8').css({"display": "none"});
            $('.m-lnb9').css({"display": "none"});
        }
    });
    $('.m-gnb2').on({
        "click": function(e) {
            e.preventDefault();
            $(this).css({"background": "#000"});
            $('.m-gnb2 a').css({"color": "#fff"});
            $('.m-gnb1').css({"background": "unset"});
            $('.m-gnb1 a').css({"color": "unset"});
            $('.m-gnb3').css({"background": "unset"});
            $('.m-gnb3 a').css({"color": "unset"});
            $('.m-gnb4').css({"background": "unset"});
            $('.m-gnb4 a').css({"color": "unset"});
            $('.m-gnb5').css({"background": "unset"});
            $('.m-gnb5 a').css({"color": "unset"});
            $('.m-gnb6').css({"background": "unset"});
            $('.m-gnb6 a').css({"color": "unset"});
            $('.m-gnb7').css({"background": "unset"});
            $('.m-gnb7 a').css({"color": "unset"});
            $('.m-gnb8').css({"background": "unset"});
            $('.m-gnb8 a').css({"color": "unset"});
            $('.m-gnb9').css({"background": "unset"});
            $('.m-gnb9 a').css({"color": "unset"});
            $('.m-lnb1').css({"display": "none"});
            $('.m-lnb2').css({"display": "block"});
            $('.m-lnb3').css({"display": "none"});
            $('.m-lnb4').css({"display": "none"});
            $('.m-lnb5').css({"display": "none"});
            $('.m-lnb6').css({"display": "none"});
            $('.m-lnb7').css({"display": "none"});
            $('.m-lnb8').css({"display": "none"});
            $('.m-lnb9').css({"display": "none"});
        }
    });
    $('.m-gnb3').on({
        "click": function(e) {
            e.preventDefault();
            $(this).css({"background": "#000"});
            $('.m-gnb3 a').css({"color": "#fff"});
            $('.m-gnb1').css({"background": "unset"});
            $('.m-gnb1 a').css({"color": "unset"});
            $('.m-gnb2').css({"background": "unset"});
            $('.m-gnb2 a').css({"color": "unset"});
            $('.m-gnb4').css({"background": "unset"});
            $('.m-gnb4 a').css({"color": "unset"});
            $('.m-gnb5').css({"background": "unset"});
            $('.m-gnb5 a').css({"color": "unset"});
            $('.m-gnb6').css({"background": "unset"});
            $('.m-gnb6 a').css({"color": "unset"});
            $('.m-gnb7').css({"background": "unset"});
            $('.m-gnb7 a').css({"color": "unset"});
            $('.m-gnb8').css({"background": "unset"});
            $('.m-gnb8 a').css({"color": "unset"});
            $('.m-gnb9').css({"background": "unset"});
            $('.m-gnb9 a').css({"color": "unset"});
            $('.m-lnb1').css({"display": "none"});
            $('.m-lnb2').css({"display": "none"});
            $('.m-lnb3').css({"display": "block"});
            $('.m-lnb4').css({"display": "none"});
            $('.m-lnb5').css({"display": "none"});
            $('.m-lnb6').css({"display": "none"});
            $('.m-lnb7').css({"display": "none"});
            $('.m-lnb8').css({"display": "none"});
            $('.m-lnb9').css({"display": "none"});
        }
    });
    $('.m-gnb4').on({
        "click": function(e) {
            e.preventDefault();
            $(this).css({"background": "#000"});
            $('.m-gnb4 a').css({"color": "#fff"});
            $('.m-gnb1').css({"background": "unset"});
            $('.m-gnb1 a').css({"color": "unset"});
            $('.m-gnb2').css({"background": "unset"});
            $('.m-gnb2 a').css({"color": "unset"});
            $('.m-gnb3').css({"background": "unset"});
            $('.m-gnb3 a').css({"color": "unset"});
            $('.m-gnb5').css({"background": "unset"});
            $('.m-gnb5 a').css({"color": "unset"});
            $('.m-gnb6').css({"background": "unset"});
            $('.m-gnb6 a').css({"color": "unset"});
            $('.m-gnb7').css({"background": "unset"});
            $('.m-gnb7 a').css({"color": "unset"});
            $('.m-gnb8').css({"background": "unset"});
            $('.m-gnb8 a').css({"color": "unset"});
            $('.m-gnb9').css({"background": "unset"});
            $('.m-gnb9 a').css({"color": "unset"});
            $('.m-lnb1').css({"display": "none"});
            $('.m-lnb2').css({"display": "none"});
            $('.m-lnb3').css({"display": "none"});
            $('.m-lnb4').css({"display": "block"});
            $('.m-lnb5').css({"display": "none"});
            $('.m-lnb6').css({"display": "none"});
            $('.m-lnb7').css({"display": "none"});
            $('.m-lnb8').css({"display": "none"});
            $('.m-lnb9').css({"display": "none"});
        }
    });
    $('.m-gnb5').on({
        "click": function(e) {
            e.preventDefault();
            $(this).css({"background": "#000"});
            $('.m-gnb5 a').css({"color": "#fff"});
            $('.m-gnb1').css({"background": "unset"});
            $('.m-gnb1 a').css({"color": "unset"});
            $('.m-gnb2').css({"background": "unset"});
            $('.m-gnb2 a').css({"color": "unset"});
            $('.m-gnb3').css({"background": "unset"});
            $('.m-gnb3 a').css({"color": "unset"});
            $('.m-gnb4').css({"background": "unset"});
            $('.m-gnb4 a').css({"color": "unset"});
            $('.m-gnb6').css({"background": "unset"});
            $('.m-gnb6 a').css({"color": "unset"});
            $('.m-gnb7').css({"background": "unset"});
            $('.m-gnb7 a').css({"color": "unset"});
            $('.m-gnb8').css({"background": "unset"});
            $('.m-gnb8 a').css({"color": "unset"});
            $('.m-gnb9').css({"background": "unset"});
            $('.m-gnb9 a').css({"color": "unset"});
            $('.m-lnb1').css({"display": "none"});
            $('.m-lnb2').css({"display": "none"});
            $('.m-lnb3').css({"display": "none"});
            $('.m-lnb4').css({"display": "none"});
            $('.m-lnb5').css({"display": "block"});
            $('.m-lnb6').css({"display": "none"});
            $('.m-lnb7').css({"display": "none"});
            $('.m-lnb8').css({"display": "none"});
            $('.m-lnb9').css({"display": "none"});
        }
    });
    $('.m-gnb6').on({
        "click": function(e) {
            e.preventDefault();
            $(this).css({"background": "#000"});
            $('.m-gnb6 a').css({"color": "#fff"});
            $('.m-gnb1').css({"background": "unset"});
            $('.m-gnb1 a').css({"color": "unset"});
            $('.m-gnb2').css({"background": "unset"});
            $('.m-gnb2 a').css({"color": "unset"});
            $('.m-gnb3').css({"background": "unset"});
            $('.m-gnb3 a').css({"color": "unset"});
            $('.m-gnb4').css({"background": "unset"});
            $('.m-gnb4 a').css({"color": "unset"});
            $('.m-gnb5').css({"background": "unset"});
            $('.m-gnb5 a').css({"color": "unset"});
            $('.m-gnb7').css({"background": "unset"});
            $('.m-gnb7 a').css({"color": "unset"});
            $('.m-gnb8').css({"background": "unset"});
            $('.m-gnb8 a').css({"color": "unset"});
            $('.m-gnb9').css({"background": "unset"});
            $('.m-gnb9 a').css({"color": "unset"});
            $('.m-lnb1').css({"display": "none"});
            $('.m-lnb2').css({"display": "none"});
            $('.m-lnb3').css({"display": "none"});
            $('.m-lnb4').css({"display": "none"});
            $('.m-lnb5').css({"display": "none"});
            $('.m-lnb6').css({"display": "block"});
            $('.m-lnb7').css({"display": "none"});
            $('.m-lnb8').css({"display": "none"});
            $('.m-lnb9').css({"display": "none"});
        }
    });
    $('.m-gnb7').on({
        "click": function(e) {
            e.preventDefault();
            $(this).css({"background": "#000"});
            $('.m-gnb7 a').css({"color": "#fff"});
            $('.m-gnb1').css({"background": "unset"});
            $('.m-gnb1 a').css({"color": "unset"});
            $('.m-gnb2').css({"background": "unset"});
            $('.m-gnb2 a').css({"color": "unset"});
            $('.m-gnb3').css({"background": "unset"});
            $('.m-gnb3 a').css({"color": "unset"});
            $('.m-gnb4').css({"background": "unset"});
            $('.m-gnb4 a').css({"color": "unset"});
            $('.m-gnb5').css({"background": "unset"});
            $('.m-gnb5 a').css({"color": "unset"});
            $('.m-gnb6').css({"background": "unset"});
            $('.m-gnb6 a').css({"color": "unset"});
            $('.m-gnb8').css({"background": "unset"});
            $('.m-gnb8 a').css({"color": "unset"});
            $('.m-gnb9').css({"background": "unset"});
            $('.m-gnb9 a').css({"color": "unset"});
            $('.m-lnb1').css({"display": "none"});
            $('.m-lnb2').css({"display": "none"});
            $('.m-lnb3').css({"display": "none"});
            $('.m-lnb4').css({"display": "none"});
            $('.m-lnb5').css({"display": "none"});
            $('.m-lnb6').css({"display": "none"});
            $('.m-lnb7').css({"display": "block"});
            $('.m-lnb8').css({"display": "none"});
            $('.m-lnb9').css({"display": "none"});
        }
    });
    $('.m-gnb8').on({
        "click": function(e) {
            e.preventDefault();
            $(this).css({"background": "#000"});
            $('.m-gnb8 a').css({"color": "#fff"});
            $('.m-gnb1').css({"background": "unset"});
            $('.m-gnb1 a').css({"color": "unset"});
            $('.m-gnb2').css({"background": "unset"});
            $('.m-gnb2 a').css({"color": "unset"});
            $('.m-gnb3').css({"background": "unset"});
            $('.m-gnb3 a').css({"color": "unset"});
            $('.m-gnb4').css({"background": "unset"});
            $('.m-gnb4 a').css({"color": "unset"});
            $('.m-gnb5').css({"background": "unset"});
            $('.m-gnb5 a').css({"color": "unset"});
            $('.m-gnb6').css({"background": "unset"});
            $('.m-gnb6 a').css({"color": "unset"});
            $('.m-gnb7').css({"background": "unset"});
            $('.m-gnb7 a').css({"color": "unset"});
            $('.m-gnb9').css({"background": "unset"});
            $('.m-gnb9 a').css({"color": "unset"});
            $('.m-lnb1').css({"display": "none"});
            $('.m-lnb2').css({"display": "none"});
            $('.m-lnb3').css({"display": "none"});
            $('.m-lnb4').css({"display": "none"});
            $('.m-lnb5').css({"display": "none"});
            $('.m-lnb6').css({"display": "none"});
            $('.m-lnb7').css({"display": "none"});
            $('.m-lnb8').css({"display": "block"});
            $('.m-lnb9').css({"display": "none"});
        }
    });
    $('.m-gnb9').on({
        "click": function(e) {
            e.preventDefault();
            $(this).css({"background": "#000"});
            $('.m-gnb9 a').css({"color": "#fff"});
            $('.m-gnb1').css({"background": "unset"});
            $('.m-gnb1 a').css({"color": "unset"});
            $('.m-gnb2').css({"background": "unset"});
            $('.m-gnb2 a').css({"color": "unset"});
            $('.m-gnb3').css({"background": "unset"});
            $('.m-gnb3 a').css({"color": "unset"});
            $('.m-gnb4').css({"background": "unset"});
            $('.m-gnb4 a').css({"color": "unset"});
            $('.m-gnb5').css({"background": "unset"});
            $('.m-gnb5 a').css({"color": "unset"});
            $('.m-gnb6').css({"background": "unset"});
            $('.m-gnb6 a').css({"color": "unset"});
            $('.m-gnb7').css({"background": "unset"});
            $('.m-gnb7 a').css({"color": "unset"});
            $('.m-gnb8').css({"background": "unset"});
            $('.m-gnb8 a').css({"color": "unset"});
            $('.m-lnb1').css({"display": "none"});
            $('.m-lnb2').css({"display": "none"});
            $('.m-lnb3').css({"display": "none"});
            $('.m-lnb4').css({"display": "none"});
            $('.m-lnb5').css({"display": "none"});
            $('.m-lnb6').css({"display": "none"});
            $('.m-lnb7').css({"display": "none"});
            $('.m-lnb8').css({"display": "none"});
            $('.m-lnb9').css({"display": "block"});
        }
    });
});

// sns width:890px 미만일 경우에 마지막 content 제거
$(window).ready(function () {
    var width = $(window).width();

    if (width < 890) {
        $('.sns-content:last-child').hide();
    } else {
        $('.sns-content:last-child').show();
    }
});

$(window).resize(function () {
    var width = $(window).width();

    if (width < 890) {
        $('.sns-content:last-child').hide();
    } else {
        $('.sns-content:last-child').show();
    }
});


