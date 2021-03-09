(function (blink) {
	'use strict';

	var newcloseupdevStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	newcloseupdevStyle.prototype = {
		//BK-15873 añadimos el estilo basic como parent para la herencia de los estilos del CKEditor
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_newcloseupdev',
		extraPlugins: ['cambridge_dropdown', 'blink_video_inline'],
		ckEditorStyles: {
			name: 'newcloseupdev',
			styles: [
				{ name: 'T.01 Cover', element: 'h4', attributes: { 'class': 'bck-title-1'} },
				{ name: 'T.02 Sections', element: 'h4', attributes: { 'class': 'bck-title-2'} },
				{ name: 'T.03 Lecture', element: 'h4', attributes: { 'class': 'bck-title-3'} },
				{ name: 'Título 4', element: 'h4', attributes: { 'class': 'bck-title-4'} },
				{ name: 'Título 5', element: 'h4', attributes: { 'class': 'bck-title-5'} },
				{ name: 'Título 6', element: 'h4', attributes: { 'class': 'bck-title-6'} },


				{ name: 'E.01 AvenirLight', element: 'span', attributes: { 'class': 'bck-enfasis-1'} },
				{ name: 'E.02 Palatino', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'E.03 Tekton', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },
				{ name: 'E.04 Number Cover', element: 'span', attributes: { 'class': 'bck-enfasis-4'} },
				{ name: 'E.05 Audio', element: 'span', attributes: { 'class': 'bck-enfasis-5'} },


				{ name: 'Box 01 Word Focus ', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-1' } },
				{ name: 'Box 02 Exam Tip', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-2' } },
				{ name: 'Box 03 Exam Task', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-3' } },
				{ name: 'Box 04 100%', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-4' } },
				{ name: 'Box 05 Your ideas', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-5' } },


				{ name: 'Lista Ordenada Alpha roja', element: 'ol', attributes: { 'class': 'bck-ol' } },
				{ name: 'Lista Ordenada Alpha negra', element: 'ol', attributes: { 'class': 'bck-ol-4' } },
				{ name: 'Lista Ordenada Numeral Negra', element: 'ol', attributes: { 'class': 'bck-ol-3' } },
				{ name: 'Lista Ordenada Lower-Alpha', element: 'ol', attributes: { 'class': 'bck-ol-5' } },

				{ name: 'Desplegable 2', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'desplegable-2' } }
			]
		},

		init: function () {
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.init.call(this);
			this.addActivityTitle();
			if(window.esWeb) return;
			this.formatCarouselindicators();
			this.addSlideNavigators();
		},

		removeFinalSlide: function () {
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.removeFinalSlide.call(this, true);
		},

		setCanvasSize: function (index) {
			if (blink.windowWidth < 1024) return;
			var prefix = 't'+index,
				slide = window[prefix+'_slide'],
				$slide = $('#transp' + index),
				slideHeight = $slide.closest('.item-container').show().height(),
				slideWidth = $slide.width(),
				$canvas = $slide.find('#canvas-wrapper canvas');

			if (slide && slide.isConcatenate) {
				$canvas.hideBlink();
			} else {
				$canvas.attr({height: slideHeight});
				if(typeof blink.tools.manager.tools.pencil !== 'undefined'){
					if(slideWidth){
						blink.tools.manager.tools.pencil.setCanvasSize(prefix, slideHeight, slideWidth);
					}else{
						blink.tools.manager.tools.pencil.setCanvasHeight(prefix, slideHeight);
					}
				}
				redrawCanvas();
			}
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html() + ' > ' + blink.courseInfo.unit;
			})
		},

		formatCarouselindicators: function () {
			var $navbarBottom = $('.navbar-bottom'),
				$carouselIndicators = $('.slider-indicators').find('li');

			$carouselIndicators.tooltip('destroy');

			var navigatorIndex = 0;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = eval('t'+index+'_slide'),
					slideTitle = slide.title;

				if (slide.isConcatenate) continue;

				$navbarBottom.find('li').eq(navigatorIndex).html('<span>'+stripHTML(slideTitle)+'</span>');
				navigatorIndex++;

			};

			$navbarBottom
				.attr('class', 'publisher-navbar')
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.wrap('<div id="top-navigator"/>');

			if (!blink.hasTouch) {
				$navbarBottom
					.find('ol').find('span')
						.tooltip({
							placement: 'bottom',
							container: 'body'
						});
			}
		},

		//BK-15873 Se quita la funcion getEditorStyles para que la herede de parent

		bindEventsToEditor: function (editor) {
			editor.on('paste', function (event) {
				event.data.dataValue = event.data.dataValue.replace(/ style="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, '');
			});
		}
	};

	newcloseupdevStyle.prototype = _.extend({}, new blink.theme.styles.basic(), newcloseupdevStyle.prototype);

	blink.theme.styles.newcloseupdev = newcloseupdevStyle;

})( blink );

$(document).ready(function () {

    $('.item').find('.header').find('.title')
		.filter(function () {
			return $(this).find('.empty').length;
		}).hideBlink();

    $('.item').find('.header').find('.title')
		.filter(function () {
			return !$(this).find('.empty').length;
		})
		.each(function () {
			var $header = $(this).find('h3');
			$header.length && $header.html($header.html().replace(' ', ''));
		});


	$('.bck-tooltip').popover('destroy');
	$('.bck-tooltip').popover({
		html:true,
		placement: 'auto top',
		trigger: 'click',
		container: 'body'
	}).off("mouseenter").off("mouseleave");

	$('#actividad').on('slide.bs.carousel', function (event) {
		$('.bck-tooltip').popover('hide');
	});

	$('#actividad').on('slid.bs.carousel', function (event) {
		$('.bck-tooltip').popover('hide');
	});

        $(".js-slider-item").on('scroll', function (e) {
                $('.bck-tooltip').popover('hide');
        });

        $('.slider-control').on('tap, click', function(e){
                $('.bck-tooltip').popover('hide');
        });

	$(".bck-cam-button").toggle(
		function(){
			$(this).parent('.bck-cam-dropdown').addClass('open').find(".bck-cam-dropdown-content").slideDown(300);
    	},
    	function(){
    		$(this).parent('.bck-cam-dropdown').removeClass('open').find(".bck-cam-dropdown-content").slideUp(300);
    	}
	);
});
