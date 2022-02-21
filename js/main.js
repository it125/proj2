$('#program .plus').mouseover(function () {
    $(this).css({ 'animation': 'rotate1 0.5s ease-in-out' });
});

$('#program .plus').mouseout(function () {
    $(this).css({ 'animation': 'rotate2 0.5s ease-in-out' });
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

// select 탭메뉴
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
        $('.m-gnb').show();
        $('.m-lnb').show();
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
    } else {
        $('.hamburger').show();
    }
});

$(function () {
    $('.m-gnb1').on({
        "mouseover": function () {
            $('.m-lnb1').show();
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

    $('.m-gnb2').on({
        "mouseover": function () {
            $('.m-lnb2').show();
            $('.m-lnb1').hide();
            $('.m-lnb3').hide();
            $('.m-lnb4').hide();
            $('.m-lnb5').hide();
            $('.m-lnb6').hide();
            $('.m-lnb7').hide();
            $('.m-lnb8').hide();
            $('.m-lnb9').hide();
        }
    });

    $('.m-gnb3').on({
        "mouseover": function () {
            $('.m-lnb3').show();
            $('.m-lnb1').hide();
            $('.m-lnb2').hide();
            $('.m-lnb4').hide();
            $('.m-lnb5').hide();
            $('.m-lnb6').hide();
            $('.m-lnb7').hide();
            $('.m-lnb8').hide();
            $('.m-lnb9').hide();
        }
    });

    $('.m-gnb4').on({
        "mouseover": function () {
            $('.m-lnb4').show();
            $('.m-lnb1').hide();
            $('.m-lnb2').hide();
            $('.m-lnb3').hide();
            $('.m-lnb5').hide();
            $('.m-lnb6').hide();
            $('.m-lnb7').hide();
            $('.m-lnb8').hide();
            $('.m-lnb9').hide();
        }
    });

    $('.m-gnb5').on({
        "mouseover": function () {
            $('.m-lnb5').show();
            $('.m-lnb1').hide();
            $('.m-lnb2').hide();
            $('.m-lnb3').hide();
            $('.m-lnb4').hide();
            $('.m-lnb6').hide();
            $('.m-lnb7').hide();
            $('.m-lnb8').hide();
            $('.m-lnb9').hide();
        }
    });

    $('.m-gnb6').on({
        "mouseover": function () {
            $('.m-lnb6').show();
            $('.m-lnb1').hide();
            $('.m-lnb2').hide();
            $('.m-lnb3').hide();
            $('.m-lnb4').hide();
            $('.m-lnb5').hide();
            $('.m-lnb7').hide();
            $('.m-lnb8').hide();
            $('.m-lnb9').hide();
        }
    });

    $('.m-gnb7').on({
        "mouseover": function () {
            $('.m-lnb7').show();
            $('.m-lnb1').hide();
            $('.m-lnb2').hide();
            $('.m-lnb3').hide();
            $('.m-lnb4').hide();
            $('.m-lnb5').hide();
            $('.m-lnb6').hide();
            $('.m-lnb8').hide();
            $('.m-lnb9').hide();
        }
    });

    $('.m-gnb8').on({
        "mouseover": function () {
            $('.m-lnb8').show();
            $('.m-lnb1').hide();
            $('.m-lnb2').hide();
            $('.m-lnb3').hide();
            $('.m-lnb4').hide();
            $('.m-lnb5').hide();
            $('.m-lnb6').hide();
            $('.m-lnb7').hide();
            $('.m-lnb9').hide();
        }
    });

    $('.m-gnb9').on({
        "mouseover": function () {
            $('.m-lnb9').show();
            $('.m-lnb1').hide();
            $('.m-lnb2').hide();
            $('.m-lnb3').hide();
            $('.m-lnb4').hide();
            $('.m-lnb5').hide();
            $('.m-lnb6').hide();
            $('.m-lnb7').hide();
            $('.m-lnb8').hide();
        }
    });
});