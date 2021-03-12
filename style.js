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
				{ name: 'T.04 Description', element: 'h4', attributes: { 'class': 'bck-title-4'} },
				{ name: 'T.05 Grammar Reference 5', element: 'h4', attributes: { 'class': 'bck-title-5'} },
				{ name: 'T.06', element: 'h4', attributes: { 'class': 'bck-title-6'} },

				{ name: 'E.01 AvenirLight', element: 'span', attributes: { 'class': 'bck-enfasis-1'} },
				{ name: 'E.02 Palatino', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'E.03 Tekton', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },
				{ name: 'E.04 Number Cover', element: 'span', attributes: { 'class': 'bck-enfasis-4'} },
				{ name: 'E.05 Audio', element: 'span', attributes: { 'class': 'bck-enfasis-5'} },
				{ name: 'E.06 Pink', element: 'span', attributes: { 'class': 'bck-enfasis-6'} },
				{ name: 'E.07 Example', element: 'span', attributes: { 'class': 'bck-enfasis-7'} },
				{ name: 'E.08 Higlight', element: 'span', attributes: { 'class': 'bck-enfasis-8'} },

				{ name: 'Box 01 Word Focus ', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-1' } },
				{ name: 'Box 02 Exam Tip', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-2' } },
				{ name: 'Box 03 Exam Task', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-3' } },
				{ name: 'Box 04 Lecture Dark', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-4' } },
				{ name: 'Box 05 Your ideas', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-5' } },
				{ name: 'Box 06 IMG 100%', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-6' } },
				{ name: 'Box 07 Cover', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-7' } },
				{ name: 'Box 08 Cover 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-8' } },
				{ name: 'Box 09 Look!', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-9' } },
				{ name: 'Box 10 Simple blue', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-10' } },
				{ name: 'Box 11 Simple orange', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-11' } },
				{ name: 'Box 12 Simple Gray', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-12' } },
				{ name: 'Box 13 Useful Language', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-13' } },
				{ name: 'Box 14 Learning Focus', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-14' } },
				{ name: 'Box 15 Chat Green', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-15' } },
				{ name: 'Box 16 Chat Blue', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-16' } },
				{ name: 'Box 17 Chat Organge', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-17' } },
				{ name: 'Box 18 Remember', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-18' } },
				{ name: 'Box 19 Mind', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-19' } },
				{ name: 'Box 20 Project icon', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-20' } },
				{ name: 'Box 21 Project ', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-21' } },
				{ name: 'Box 22 Lecture Light ', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-22' } },

				{ name: 'L.123 Pink Left', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-01' } },
				{ name: 'L.abc Black', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-02' } },
				{ name: 'L.abc pink', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-03' } },
				{ name: 'L.123 pink', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-04' } },

				{ name: 'U.List 01', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-01' } },
				{ name: 'U.List 02', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-02' } },

				{ name: 'Table 02', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-2'} },
				{ name: 'Table 03', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-3'} },

				{ name: 'Cell 02', element: 'td', attributes: { 'class': 'bck-td-2'} },
				{ name: 'Cell 03', element: 'td', attributes: { 'class': 'bck-td-3'} },
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
