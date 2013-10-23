/**
* Autor: Jose Manuel Santibañez Villanueva
* E-mail: jmsv23@gmail.com
* Github: https://github.com/jmsv23
* Licencia: GNU GPL V3
**/

(function($) {
    $.fn.jmYoutubeFluid = function(options) {
    	var settings = $.extend({
    		maxWidth : 600,
    		changeRatio : false,
    		rel : false
    	}, options);

    	return this.each( function() {
    		var container = $(this);
    		var size = container.outerWidth(false);
    		var yid = container.attr( 'data-youtubeid' );
    		var ratio = (!settings.changeRatio) ? (9 / 16) : (3 / 4);
    		var url = 'http://www.youtube.com/embed/' + yid;
    		url += (!settings.rel) ? '?rel=0' : '';
    		//creamos el iframe que contiene el video
    		var rep = $('<iframe></iframe');
    		if(size <= settings.maxWidth) {
    			rep.attr('width', size);
    			rep.attr('height', Math.ceil(size * ratio));	
    		} else {
    			rep.attr('width', settings.maxWidth);
    			rep.attr('height', Math.ceil(settings.maxWidth * ratio));
    		}
    		rep.attr('frameborder', 0);
    		rep.attr('src', url );
    		rep.css({'display': 'block', 'margin' : 'auto'});
    		//insertamos el video
    		container.html(rep);


    		$( window ).resize(function() {
    			size = container.outerWidth(false);
    			if(size <= settings.maxWidth) {
    				rep.attr('width', size);
    				rep.attr('height', Math.ceil(size * ratio));	
    			} else {
    				rep.attr('width', settings.maxWidth);
    				rep.attr('height', Math.ceil(settings.maxWidth * ratio));
    			}
            	
            });


    	});
   	}
}(jQuery));
