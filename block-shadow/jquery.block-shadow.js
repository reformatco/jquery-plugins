/*
blockShadow jQuery Plugin
**********************************************
Desc		If there's no support for 
			CSS3 box-shadow then makes a 
			custom block shadow.
Dependency	Modernizr 1.0 or above
Version		1.0
Author		Ben Palmer (www.benpalmer.info)
Date		
**********************************************/

(function($){
    $.fn.extend({ 

        blockShadow: function(options) {
 
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
					obj.wrap('<div class="block-container" />');
					obj.parent().width(w+shadow).height(h+shadow);
					obj.after('<div class="block-shadow"></div>');
					obj.parent().find('div.block-shadow').css({
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