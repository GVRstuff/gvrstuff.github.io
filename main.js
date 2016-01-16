jQuery(window).on('load', function(){
    var masonryOptions = {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true 
    };
    $('.grid').masonry( masonryOptions );

    // destroy on mobile, works on other sizes
    if ($(window).innerWidth() < 450) {
        $('.grid').masonry('destroy'); // destroy
    } 
    // resize event
    $(window).resize(function () {
        if ($(window).innerWidth() < 450) {
            $('.grid').masonry('destroy'); // destroy
        } 
        else {
            $('.grid').masonry( masonryOptions );
        }
    }); 
});
    