/*
ASOS Button jQuery Plugin
**********************************************
Desc		If there's no support for 
			CSS3 box-shadow then makes a 
			custom ASOS drop shadow.
Dependency	Modernizr 1.0 or above
Version		1.0
Author		Ben Palmer (www.benpalmer.info)
Date		
**********************************************/

(function($){
    $.fn.extend({ 

        asosButton: function(options) {
 
            var defaults = {
				shadow : 3
			};
			var options =  $.extend(defaults, options);

            return this.each(function() {
             	var o = options;
				
				var obj = $(this); 
	
                if(!Modernizr.boxshadow){
					
					var shadow = o.shadow;
					var w = obj.outerWidth();
					var h = obj.outerHeight();
					obj.wrap('<div class="asos-button" />');
					obj.parent().width(w+shadow).height(h+shadow);
					obj.after('<div class="asos-shadow"></div>');
					obj.parent().find('div.asos-shadow').css({
						width : w,
						height : h,
						left : shadow + 'px',
						top : shadow + 'px'
					});
				}
             
            });
        }
    });
         
})(jQuery);