$('#program .plus').mouseover(function () {
    $(this).css({'animation': 'rotate1 0.5s ease-in-out'});
});

$('#program .plus').mouseout(function () {
    $(this).css({'animation': 'rotate2 0.5s ease-in-out'});
});

$('#program .more').on({
    "mouseover": function () {
        $(this)
            .css({'background': '#000'})
            .css({'color': '#fff'})
            .css({'transition': 'all 0.5s ease-in-out'})
            .css({'cursor': 'pointer'});
        $('#program .more figure img').attr("src", "./images/more_white.png")
    },
    "mouseout": function () {
        $(this)
            .css({'background': 'none'})
            .css({'color': '#000'});
        $('#program .more figure img').attr("src", "./images/more_black.png")
    }
});

$('#academy .more').on({
    "mouseover": function () {
        $(this)
            .css({'background': '#fff'})
            .css({'transition': 'all 0.5s ease-in-out'})
            .css({'cursor': 'pointer'});
        $('#academy .more > span').css({'color': '#000'});
        $('#academy .more figure img').attr("src", "./images/more_black.png")
    },
    "mouseout": function () {
        $(this).css({'background': 'none'});
        $('#academy .more > span').css({'color': '#fff'});
        $('#academy .more figure img').attr("src", "./images/more_white.png")
    }
});

$(window).resize(function () {
    if (window.innerWidth > 1023) {
        $('.daily-content').on({
            "mouseover": function () {
                $(this)
                    .css({'flex': '7'})
                    .css({'transition': 'all 1s ease-in-out'})
                    .css({'cursor': 'pointer'});
            },
            "mouseout": function () {
                $(this)
                    .css({'flex': '1'})
                    .css({'transition': 'all 1s ease-in-out'})
                    .css({'cursor': 'pointer'});
            }
        });
    }
});

$('.news-content:nth-child(1) p').on({
    "mouseover": function () {
        $(this)
            .css({'color': '#999'})
            .css({'transition': 'all 0.3s ease-in-out'})
            .css({'cursor': 'pointer'});
    },
    "mouseout": function () {
        $(this)
            .css({'color': '#000'})
            .css({'cursor': 'auto'});
    }
});

$('.news-content:nth-child(2) p').on({
    "mouseover": function () {
        $(this)
            .css({'color': '#999'})
            .css({'transition': 'all 0.3s ease-in-out'})
            .css({'cursor': 'pointer'});
    },
    "mouseout": function () {
        $(this)
            .css({'color': '#000'})
            .css({'cursor': 'auto'});
    }
});

$('.news-content:nth-child(3) p').on({
    "mouseover": function () {
        $(this)
            .css({'color': '#999'})
            .css({'transition': 'all 0.3s ease-in-out'})
            .css({'cursor': 'pointer'});
    },
    "mouseout": function () {
        $(this)
            .css({'color': '#000'})
            .css({'cursor': 'auto'});
    }
});

$('.news-content:nth-child(1) figure').on({
    "mouseover": function () {
        $(this)
            .css({'animation': 'rotate1 0.5s ease-in-out'})
            .css({'cursor': 'pointer'});
    },
    "mouseout": function () {
        $(this)
            .css({'animation': 'rotate2 0.5s ease-in-out'})
            .css({'cursor': 'pointer'});
    }
});

$('.news-content:nth-child(2) figure').on({
    "mouseover": function () {
        $(this)
            .css({'animation': 'rotate1 0.5s ease-in-out'})
            .css({'cursor': 'pointer'});
    },
    "mouseout": function () {
        $(this)
            .css({'animation': 'rotate2 0.5s ease-in-out'})
            .css({'cursor': 'pointer'});
    }
});

$('.news-content:nth-child(3) figure').on({
    "mouseover": function () {
        $(this)
            .css({'animation': 'rotate1 0.5s ease-in-out'})
            .css({'cursor': 'pointer'});
    },
    "mouseout": function () {
        $(this)
            .css({'animation': 'rotate2 0.5s ease-in-out'})
            .css({'cursor': 'pointer'});
    }
});

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
