$('#program .plus').on({
    "mouseover": function () {
        $(this).css({ 'animation': 'rotate1 0.5s ease-in-out' });
    },
    "mouseout": function () {
        $(this).css({ 'animation': 'none' });
    }
});

$('#program .more').on({
    "mouseover": function() {
        $(this).css({'background': '#000'}).css({'color': '#fff'}).css({'cursor': 'pointer'});
        $('#program .more figure img').attr("src", "./images/more_white.png")
    },
    "mouseout": function() {
        $(this).css({'background': 'none'}).css({'color': '#000'});
        $('#program .more figure img').attr("src", "./images/more_black.png")
    }
});

$('#academy .more').on({
    "mouseover": function() {
        $(this).css({'background': '#fff'}).css({'cursor': 'pointer'});
        $('#academy .more > span').css({'color': '#000'});
        $('#academy .more figure img').attr("src", "./images/more_black.png")
    },
    "mouseout": function() {
        $(this).css({'background': 'none'});
        $('#academy .more > span').css({'color': '#fff'});
        $('#academy .more figure img').attr("src", "./images/more_white.png")
    }
});

$('.daily-content').on({
    "mouseover": function () {
        $(this).css({ 'flex': '7' }).css({ 'transition': 'all 1s ease-in-out' }).css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this).css({ 'flex': '1' }).css({ 'transition': 'all 1s ease-in-out' }).css({ 'cursor': 'pointer' });
    }
});

$('.news-content:nth-child(1) p').on({
    "mouseover": function () {
        $(this).css({ 'color': '#999' }).css({ 'transition': 'all 0.3s ease-in-out' }).css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this).css({ 'color': '#000' }).css({ 'cursor': 'auto' });
    }
});

$('.news-content:nth-child(2) p').on({
    "mouseover": function () {
        $(this).css({ 'color': '#999' }).css({ 'transition': 'all 0.3s ease-in-out' }).css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this).css({ 'color': '#000' }).css({ 'cursor': 'auto' });
    }
});

$('.news-content:nth-child(3) p').on({
    "mouseover": function () {
        $(this).css({ 'color': '#999' }).css({ 'transition': 'all 0.3s ease-in-out' }).css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this).css({ 'color': '#000' }).css({ 'cursor': 'auto' });
    }
});

$('.news-content:nth-child(1) figure').on({
    "mouseover": function () {
        $(this).css({ 'animation': 'rotate1 0.5s ease-in-out' }).css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this).css({ 'animation': 'rotate2 0.5s ease-in-out' }).css({ 'cursor': 'pointer' });
    }
});

$('.news-content:nth-child(2) figure').on({
    "mouseover": function () {
        $(this).css({ 'animation': 'rotate1 0.5s ease-in-out' }).css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this).css({ 'animation': 'rotate2 0.5s ease-in-out' }).css({ 'cursor': 'pointer' });
    }
});

$('.news-content:nth-child(3) figure').on({
    "mouseover": function () {
        $(this).css({ 'animation': 'rotate1 0.5s ease-in-out' }).css({ 'cursor': 'pointer' });
    },
    "mouseout": function () {
        $(this).css({ 'animation': 'rotate2 0.5s ease-in-out' }).css({ 'cursor': 'pointer' });
    }
});