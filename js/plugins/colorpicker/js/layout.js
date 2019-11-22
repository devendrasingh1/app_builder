(function($){
	var initLayout = function() {
		//header color change
		$('.header_color').ColorPicker({
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.header_color .color_preview, .app_header').css('backgroundColor', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
		//Tab bar color change
		$('.tab_bar_color').ColorPicker({
			backgroundColor: '#000000',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.tab_bar_color .color_preview, .app_tabbar').css('backgroundColor', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
		//Tab bar icon color change
		$('.tab_bar_icon').ColorPicker({
			backgroundColor: '#00c683',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.tab_bar_icon .color_preview').css('backgroundColor', '#' + hex),
				$('.tabbar_menu li').css('color', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
		//Tab bar icon color change
		$('.tab_icon_active').ColorPicker({
			backgroundColor: '#000000',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.tab_icon_active .color_preview').css('backgroundColor', '#' + hex),
				$('.tabbar_menu li.active').css('color', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
		//Tab bar icon color change
		$('.preview_bg').ColorPicker({
			backgroundColor: '#555555',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.preview_bg .color_preview, .previewinner').css('backgroundColor', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
		//Tab bar icon color change
		$('.nav_line_color').ColorPicker({
			backgroundColor: '#000000',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.nav_line_color .color_preview').css('backgroundColor', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
		//Tab bar icon color change
		$('.app_bg_clr').ColorPicker({
			color: '#000000',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.app_bg_clr .color_preview, .app_screen_inr').css('backgroundColor', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
		//Tab list icon color change
		$('.list_icn_clr').ColorPicker({
			backgroundColor: '#c151c1',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.list_icn_clr .color_preview').css('backgroundColor', '#' + hex),
				$('.app_panel .drag_tabs_text .icon').css('color', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
		//Change odd row bg
		$('.odd_row_bg').ColorPicker({
			backgroundColor: '#c151c1',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.odd_row_bg .color_preview').css('backgroundColor', '#' + hex),
				$('.app_panel .drag_ap_list > li:nth-child(odd)').css('backgroundColor', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
	    //Change Even row bg
		$('.even_row_bg').ColorPicker({
			backgroundColor: '#c151c1',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.even_row_bg .color_preview').css('backgroundColor', '#' + hex),
				$('.app_panel .drag_ap_list > li:nth-child(even)').css('backgroundColor', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
		//Change Odd row text
		$('.odd_row_txt').ColorPicker({
			backgroundColor: '#c151c1',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.odd_row_txt .color_preview').css('backgroundColor', '#' + hex),
				$('.app_panel .drag_ap_list > li:nth-child(odd)').css('color', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
		//Change Odd row text
		$('.even_row_txt').ColorPicker({
			backgroundColor: '#c151c1',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.even_row_txt .color_preview').css('backgroundColor', '#' + hex),
				$('.app_panel .drag_ap_list > li:nth-child(even)').css('color', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
		//Saprate line color
		$('.saprate_line').ColorPicker({
			backgroundColor: '#c151c1',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('.saprate_line .color_preview').css('backgroundColor', '#' + hex),
				$('.app_panel .drag_ap_list > li').css('borderColor', '#' + hex);
			},
			onSubmit:function (hsb, hex, rgb,el) {
                $(el).ColorPickerHide();
            }
		});
	};
	
	EYE.register(initLayout, 'init');
})(jQuery)