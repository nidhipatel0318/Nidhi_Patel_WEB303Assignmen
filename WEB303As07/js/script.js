$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here
         var $modal = $('<div class="modal"></div>');
        var $modalImage = $('<img>').attr('src', $content.attr('src'));
        var $modalHeading = $('<h2>' + $('h1').text() + '</h2>');
        var $closeButton = $('<button class="close-button">Close</button>');

        $modal.append($modalHeading, $modalImage, $closeButton);
        $('body').append($modal);

        $modalImage.on('click', function () {
            $modal.addClass('modal-open');
        });

        $closeButton.on('click', function () {
            $modal.removeClass('modal-open');
        }); 
    });
});