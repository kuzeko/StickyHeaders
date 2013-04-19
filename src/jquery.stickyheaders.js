/*!
 * Copyright 2011 Matteo Lissandrini, Ragnis Armus
 * Licensed under the BSD 3-clause license.
 * Modified by Andrew Kester.  Those changes (marked) are copyright 2013 and
 * released under GNU-GPL v3
 */

(function ($)
{
	$.fn.stickyheaders = function ()
	{
		var self = this;

		var $standing = $('<aside id="standing"></aside>')
			.appendTo('body');

		this.each(function (id, element)
		{
			var $ref = $(element)
				.clone()
				.addClass('stand')
				.attr('id', 'multisticky_' + id)
				.hide()
				.data('from-top', $(element).offset().top);

			$standing.append($ref);
		});

		function updateStanding (dist)
		{
			self.each(function (id, element)
			{
				var $ref = $('#multisticky_' + id);

				var $next = $('#multisticky_' + (id + 1));
				var $prev = $('#multisticky_' + (id - 1));
				
				var currentdist = dist + $standing.height() - 20

				if ((currentdist  >= $ref.data('from-top'))
						&& ( currentdist > $prev.data('from-top') - 20)
						&& ( currentdist < $next.data('from-top') - 20))
				{
					$ref.slideDown();
				}
				else
				{
					$ref.slideUp();
				}
			});
		}

		$(document).scroll(function ()
		{
			updateStanding($(this).scrollTop());
		});
	};
})(jQuery);

