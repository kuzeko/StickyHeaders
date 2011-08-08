/*!
 * Copyright 2011 Matteo Lissandrini, Ragnis Armus
 * Licensed under the BSD 3-clause license.
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

				if ((dist + $standing.height() - 20)  >= $ref.data('from-top'))
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

