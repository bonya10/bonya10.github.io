$('.primary-nav a').each(function() {
        if ('http:/umiere10.github.io'+$(this).attr('href') == window.location.href)
        {
            $(this).addClass('active');
        }
    });
