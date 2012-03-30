/*
Maxify jQuery Plugin
**********************************************
Desc		Simply gets a set of sibling elements 
			and makes them all the height of the tallest
Version		1.0
Author		Ben Palmer (www.benpalmer.info)
**********************************************/
(function($){
	
	$.fn.extend({
	
		maxify: function(options){
			var defaults = {
				maxHeight : -1
			};
			var options = $.extend(defaults,options);
			
			
			this.each(function(){
				var obj = $(this);
				options.maxHeight = options.maxHeight > obj.height() ? options.maxHeight : obj.height();
			});
			
			return this.each(function(){
				var obj = $(this);
				obj.height(options.maxHeight);
			});
			
		}
		
	});
	
})(jQuery);