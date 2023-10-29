$(document).ready(function () {
    // Accordion functionality
    $('.accordion-control').click(function () {
        var panel = $(this).next('.accordion-panel');
        if (panel.is(':visible')) {
            panel.slideUp();
        } else {
            $('.accordion-panel').slideUp();
            panel.slideDown();
        }
    });

    // Tab functionality
    $('.tab-control').click(function (e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        $('.tab-panel').removeClass('active');
        target.addClass('active');
        $('.tab-list li').removeClass('active');
        $(this).parent('li').addClass('active');
    });
});
