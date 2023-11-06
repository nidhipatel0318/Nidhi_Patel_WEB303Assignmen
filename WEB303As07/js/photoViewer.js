(function ($) {
    $.fn.customPhotoViewer = function () {
        return this.each(function () {
            var $viewer = $(this);
            var $thumbnails = $viewer.find('.thumbnail-anchor');

            // Initialize the photo viewer with the first image
            var $photoBox = $viewer.find('.photo-box');
            var $activeThumbnail = $thumbnails.filter('.active');

            // Set the initial image source
            $photoBox.html('<img src="' + $activeThumbnail.attr('href') + '">');

            // Handle thumbnail click events
            $thumbnails.on('click', function (e) {
                e.preventDefault();

                // Set the active thumbnail
                $thumbnails.removeClass('active');
                $(this).addClass('active');

                // Update the main image source
                $photoBox.html('<img src="' + $(this).attr('href') + '">');
            });

            // Return the $viewer element for method chaining
            return $viewer;
        });
    };
})(jQuery);

 









