$(document).ready(function() {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '4985027412',
        limit: 9,
        resolution: 'standard_resolution',
        accessToken: '4985027412.1677ed0.1da0aba3c77a4c60a1c5bf7864047f67',
        sortBy: 'most-recent',
        template: '<a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" style="width: 100px; height: 100px;"/></a>',
    });
 
    userFeed.run();
 
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });

});