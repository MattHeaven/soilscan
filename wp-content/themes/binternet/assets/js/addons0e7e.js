jQuery(document).ready(function($){

    theme_uri = pa_vars.global_settings;

    $(window).on('scroll', function (ev) {
        var currentHeight = $(window).scrollTop();

        if(currentHeight > 103){
            $('.main__down').fadeOut();
        }else{
            $('.main__down').fadeIn();
        }
    });

    var map = 'map';
    var mapId = jQuery('#map_contact');
    var lat = $('#map_contact').attr('data-lat');
    var lng = $('#map_contact').attr('data-lng');

    var centerCords = {lat: lat, lng: lng};

    if ( mapId.length ) {

        initMap(centerCords);

        $(window).on('resize', function(){

            $('#map_contact > div').remove();
            initMap(centerCords);

        });

    }

    // Init
    initWPCF7Loader();
    initWPCF7AddErrorClass();

    // Init Functions
    function initWPCF7Loader() {
        // on click submit add loading class
        $('.wpcf7-submit').on('click', function () {
            var $form = $(this).closest('form');
            $form.addClass('form-loading');
        });

        // remove loading class
        document.addEventListener('wpcf7submit', removeLoading, false);
        document.addEventListener('wpcf7invalid', removeLoading, false);
        document.addEventListener('wpcf7mailsent', removeLoading, false);
        document.addEventListener('wpcf7mailfailed', removeLoading, false);

        function removeLoading(event) {
            var $form = $(event.target).parent().find('form');
            $form.removeClass('form-loading');
        }
    }

    function initWPCF7AddErrorClass() {
        // remove loading class
        document.addEventListener('wpcf7submit', updateErrorClass, false);
        document.addEventListener('wpcf7invalid', updateErrorClass, false);
        document.addEventListener('wpcf7mailsent', updateErrorClass, false);
        document.addEventListener('wpcf7mailfailed', updateErrorClass, false);

        function updateErrorClass(event) {
            var $form = $(event.target).find('form');
            $form.find('.input').removeClass('error');
            $form.find('.wpcf7-not-valid').each(function() {
                $(this).closest('.input').addClass('error');
            });
        }
    }

    var introHeader = $('.intro'),
        intro = $('.intro');

    buildModuleHeader(introHeader);

    $(window).resize(function() {
        var width = Math.max($(window).width(), window.innerWidth);
        buildModuleHeader(introHeader);
    });

    $(window).scroll(function() {
        effectsModuleHeader(introHeader, this);
    });

    intro.each(function(i) {

        if ($(this).attr('data-background')) {
            $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
        }

    });

    function buildModuleHeader(introHeader) {
    };
    function effectsModuleHeader(introHeader, scrollTopp) {
        if (introHeader.length > 0) {
            var homeSHeight = introHeader.height();
            var topScroll = $(document).scrollTop();
            if ((introHeader.hasClass('intro')) && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                introHeader.css('top', (topScroll * .4));
                introHeader.find('.contacts__bg').css('top', (topScroll * .4));
                introHeader.find('.main__bg').css('top', (topScroll * .4));
                // introHeader.find('img').css('top', (topScroll * .4));
            }
            if (introHeader.hasClass('intro') && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                introHeader.find('.contacts__bg').css('opacity', (1 - topScroll/introHeader.height() * 1));
                introHeader.find('.main__bg').css('opacity', (1 - topScroll/introHeader.height() * 1));
            }
        }
    };

    $('.more-items').on('click', function(e){
        e.preventDefault();

        news_loadmore();
    });

    function news_loadmore(){

        $('.news__block.hide-me:lt(3)').removeClass('hide-me').slideDown();

        if (!$('.news__block.hide-me').length) {
            $('.more-items').hide();
        }

    }


    $('.inthenews-more-items').on('click', function(e){
        e.preventDefault();

        inthenews_loadmore();
    });

    function inthenews_loadmore(){

        $('.inthenews__details-wrapper div.hide-me:lt(5)').removeClass('hide-me').slideDown();

        if (!$('.inthenews__details-wrapper div.hide-me').length) {
            $('.inthenews-more-items').hide();
        }

    }






    $('.videos-more-items').on('click', function(e){
        e.preventDefault();

        videos_loadmore();
    });

    function videos_loadmore(){

        $('.videos__lmore_wrap div.hide-me:lt(3)').removeClass('hide-me').slideDown();

        if (!$('.videos__lmore_wrap div.hide-me').length) {
            $('.videos-more-items').hide();
        }

    }

    $.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {

        // Prevent default anchor event
        e.preventDefault();

        // Set values for window
        intWidth = intWidth || '600';
        intHeight = intHeight || '500';
        strResize = (blnResize ? 'yes' : 'no');

        // Set title and open popup with focus on it
        var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
            strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,
            objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
    }

    $('.social-popup').on("click", function(e) {
        $(this).customerPopup(e);
    });

});

function initMap(centerCords) {

    // If no lat defined set default
    if (typeof(centerCords.lat) == 'undefined') {
        centerCords = {
            lat: 32.0882514,
            lng: 34.7767238
        }
    }

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)

        zoom: 16,

        //bounds: new google.maps.LatLngBounds(new google.maps.LatLng(centerCords.lat, centerCords.lng), new google.maps.LatLng(51.526, centerCords.lng)),

        disableDefaultUI: true, // a way to quickly hide all controls,
        zoomControl: true,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(centerCords.lat, centerCords.lng),

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles:
            [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":-35},{"gamma":8},{"hue":"#f7f7f7"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"hue": "#0008ff"},{"lightness": "8"},{"saturation": "-20"}]}]
    };

    if ( window.innerWidth <= 480 ) {
        mapOptions.zoom = 18;
        mapOptions.center = new google.maps.LatLng(centerCords.lat, centerCords.lng);

    }

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map_contact');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Resize Function
    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

    var icon = {
        url: theme_uri + "/assets/images/map-marker.png" // url
        // scaledSize: new google.maps.Size(95, 95), // scaled size
    };

    var marker446 = new google.maps.Marker({
        position: new google.maps.LatLng(centerCords.lat, centerCords.lng),
        map: map,
        title: '',
        icon: icon
    });


}

function zooMap() {
    map.setZoom('16');
}
