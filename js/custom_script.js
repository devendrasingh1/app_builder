(function($) {
	"use strict";
	//jquery accordion
	$(".accordio_panel").hide();
	$(".accordio_panel.content_open").show();
	$('.acordion_heading').on('click',function(){
		//$('.acordion_heading').removeClass("active");
		$(this).toggleClass("active");
		$(this).next(".accordio_panel").slideToggle("200").toggleClass("content_open");
		$(".acordion_heading").not(this).next().slideUp("200").removeClass("content_open");
		$(".acordion_heading").not(this).removeClass("active");
	});
	//Discount accordion
	$('.discount_head').on('click', function(){
		$(this).toggleClass("active");
		$(this).next(".discount_content").slideToggle(100);
	});
	//tabs Menu
	$('.tab_menu .tab_link').on('click', function(){
		$(".tab_content").removeClass("active");
		var tab_data = $(this).attr("data-tab");
		$('.tab_menu .tab_link').removeClass("active");
		$(this).addClass("active");
		$("#"+tab_data).addClass("active");
	});

	//app tab bar
	$('.app_tabbar .tab_link').on('click', function(){
		$(".app_screen_tabs").removeClass("active");
		var tab_data = $(this).attr("data-tab");
		$('.app_tabbar .tab_link').removeClass("active");
		$(this).addClass("active");
		$("#"+tab_data).addClass("active");
		$(".ap_sidbarmenu").removeClass("open");
	});
	//app sidebar menu open js
	$('.side_menu_open').on('click', function(){
		$(".ap_sidbarmenu").addClass("open");
	});
	//app sidebar menu close js
	$('.side_menu_close').on('click', function(){
		$(".ap_sidbarmenu").removeClass("open");
	});
	//filter tabs Menu
	$('.filter_tag li').on('click', function(){
		$(".filter_tab_content").removeClass("active");
		var tab_data = $(this).attr("data-tab");
		$('.filter_tag li').removeClass("active");
		$(this).addClass("active");
		$("#"+tab_data).addClass("active");
	});
	//Direction tab Menu
	$('.dir_tabs li').on('click', function(){
		$(".dir_tab_content").removeClass("active");
		var tab_data = $(this).attr("data-tab");
		$('.dir_tabs li').removeClass("active");
		$(this).addClass("active");
		$("#"+tab_data).addClass("active");
	});
	//feature tab Menu
	$('.feature_tabs li').on('click', function(){
		$(".feature_tab_content").removeClass("active");
		var f_tab_data = $(this).attr("data-tab");
		$('.feature_tabs li').removeClass("active");
		$(this).addClass("active");
		$("#"+f_tab_data).addClass("active");
	});
	//radio color tabs
	$('.color_radio input').change(function(){
		$(".rd_tab_content").removeClass("active");
		if ($(this).is(':checked')) {
		var check_val = $(this).val();
		$("#"+check_val).addClass("active");
		}
	});
	//portfolio filter
	if ($("#porfolio_filter").length > 0) {
		$('#porfolio_filter').mixItUp();
			filterSelector: ".filter"
			$(".filter").on("click", function(e) {
			e.preventDefault()
		});
	}
	//dropdown menu js
	$('.menu_toggle').on('click', function(){
		$(".dropdown_navs").toggleClass("menu_open");
		$(".dropdown_navs").slideToggle(300);
	});
	//Responsive Menu in mobile
	$('.app_nav_toggle').on('click', function(){
		$(".app_navigation").slideToggle(300);
	});
	//Responsive Mobile Menu
	if ($(window).width () < 991){
		$(".app_navigation > ul > li> ul").parents("li").addClass("dropdown_toggle");
		$(".app_navigation > ul > li> ul > li > ul").parents("li").addClass("dropdown_toggle");
		$(".dropdown_toggle").append("<span class='caret_down'><i class='fas fa-chevron-down'></i></span>");
		$(".app_navigation ul li").children(".caret_down").on("click",function(){
			$(this).toggleClass("caret_up");
			$(this).prev("ul").slideToggle();
		});
	}
	else {
		
	}
	//Datepicker
	if($(".calendar_dv").length > 0){
		$( ".calendar_dv" ).datepicker({
		  dateFormat: "dd-mm-yy",
		  firstDay: 1,
		});
	}
	//Timepicker
	if($(".time_picker").length > 0){
		$('.date_timepicker').datetimepicker();
		$('.time_picker').timepicker();
	}
	//Date Timepicker
	if($(".date_timepicker").length > 0){
		$('.date_timepicker').datetimepicker();
	}
	//bootsrape selectpicker
    if ($(".selectpicker").length > 0) {
      $('.selectpicker').selectpicker();
    }
    //dropdown menu
	$(".dropdown_btn").on('click',function(){
		$(this).next(".dropdown_menu").slideToggle(300);
		$(".dropdown_btn").not(this).next().slideUp("slow");
	});
	//home slider
	if ($(".home_slider").length > 0) {
		$(".home_slider").owlCarousel({
			mode:"fade",
			items:1,
			loop:true,
			margin:10,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:true,
			nav:false,
		});
	}
	//app gallery slider
	if ($(".app_gallery_slider").length > 0) {
		$(".app_gallery_slider").owlCarousel({
			mode:"fade",
			items:1,
			loop:false,
			margin:0,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1000,
			dots:true,
			nav:false,
		});
	}
	//gallery modal close
	$('.gallery_link').on('click', function(){
		$(".gallery_modal").addClass("modal_open");
	});
	$('.modal_close').on('click', function(){
		$(this).parents(".gallery_modal").removeClass("modal_open");
	});
	//progressbar js
	$(window).on('load', function() {
		$(".progress_panel").each(function() {
			var slide = $(this).children(".prog_slide");
			var slide_val = slide.attr("slide-value");
		  //slide amimate
		 slide.animate({
		    'width': slide_val+'%',
		    easing: 'ease'
		  }, 2000);
		});
	});
	//Jqeury counter
	$('.number_counter').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'linear',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	
	//upload
	$('#file_upload').change(function() {
	  var i = $(this).prev('label').clone();
	  var file = $('#file_upload')[0].files[0].name;
	  $(this).next('.img_path').html(file);
	});

  //file upload drag $ drop code
  $('.upload_input').change(function() {
    //var i = $(this).parents('.upload_label').clone();
    var file = $(this)[0].files[0].name;
    $(this).next(".upload_text").next('.img_path').html(file);
  });
  //sidebar show in mobile
	$('.sidebar_toggle').on('click', function(){
		$(".dashboard_sidbar").toggleClass("side_open");
		$(".dashboard_sidbar").slideToggle(300);
	});
	//add dymanic field on click
	var l = 1;
	$('.add_holiday_btn').on('click', function(){
		l++;
		var html = '<div class="more_field_group" id="row'+l+'">\
            <div class="h_field_row">\
                <div class="check_box">\
                    <label>\
                        <input type="checkbox" name="holiday" value="holiday closure">\
                        <span class="c_box"></span>\
                        <span class="c_text">Enable holiday closure</span>\
                        <span class="check_warning">\
        					The app will not accept orders during this closure!\
        				</span>\
                    </label>\
                </div>\
            </div>\
            <div class="h_field_row">\
                <label class="holiday_label">Description</label>\
                <div class="h_input"><input type="text" name=""></div>\
            </div>\
            <div class="h_field_row">\
                <label class="holiday_label">closed from</label>\
                <div class="h_input"><input type="" name="" class="date_timepicker"></div>\
                <div class="h_input_txt">Blank: Start the closure now</div>\
            </div>\
            <div class="h_field_row">\
                <label class="holiday_label">closed to</label>\
                <div class="h_input"><input type="" name="" class="date_timepicker"></div>\
                <div class="h_input_txt">Blank: The closure must be manually disabled</div>\
                <button type="button" class="remove_holiday green_button">&times; Remove</button>\
            </div>\
		</div>';
		$('.holiday_time_form').append(html);
		//datetimepicker append code
        if($(".date_timepicker").length > 0){
            $('.date_timepicker').datetimepicker();
        }
		  
	});
	//remove field
	$(document).on('click', '.remove_holiday', function(){
		//var button_id = $(this).attr("id");
		var remove_prnt = $(this).parents(".more_field_group");
		$(remove_prnt).remove();
	});

	//all app detail
	$(document).on('click', '.add_in_app_btn', function(){
		$(this).parents(".all_app_row").next(".purchase_box").slideToggle(300);
	});
	//hide modal custom
	$(".close_modal").on('click',function(){
		$(this).parents ('.modal').modal('hide');
	});
	$(".icon_material").on('click',function(){
		$(this).parents ('.modal').modal('hide');
	});
	 //add image on click
   	$(".temp_grid").on("click", function () {
	   	var imgpath = $(this).children('.temp_img').attr('src');
	   	$(".preview_screen_inr img").attr('src',imgpath);
   	});
	//drag drop list
	if($('.sortable_list, #sortable_menu').length > 0){
		$( ".sortable_list, #sortable_menu" ).sortable({
		  connectWith: ".drag_lists"
		}).disableSelection();
	}
	//nav type radio 
	$('.nav_radio input').change(function() {
		$(".nav_setting_form").removeClass("active");
		if ($(".nav_radio input").is(':checked')) {
			var input_val = $(this).val();
			$("#"+input_val).addClass("active");
		}
	});
	//
	//navigation column click 
	$('.navigation_column').on('click', function(){
		$(this).parents(".navigation_page_wrap").removeClass("customize_page");
		$(".navigation_column").removeClass("nav_selected");
		$(this).addClass("nav_selected");
	});
	$('.nav_custom').on('click', function(){
		$(this).parents(".navigation_page_wrap").toggleClass("customize_page");
	});
	//add class active in Template
	$('.temp_grid').on('click', function(){
		$(".temp_grid").removeClass("active");
		$(this).addClass("active");
	});
	//change icon on click
	$('.icon_material').on('click', function(){
		var iconpath = $(this).children("i").attr('class');
		$(".icon_holder").children("i").attr('class',iconpath);
		$(".icon_material").removeClass("active");
		$(this).addClass("active");
	});

	//change color of app_header
	$('.color_picker input[name="head_color"]').on('change, blur', function(){
		var bgcolor = $(this).val();
		$(".app_header").css('background-color',bgcolor);
	});
	//change color of Tab bar
	$('.color_picker input[name="tab_color"]').on('change, blur', function(){
		var bgcolor1 = $(this).val();
		$(".app_tabbar").css('background-color',bgcolor1);
	});
	//change color of Tab bar icon
	$('.color_picker input[name="tab_icon_color"]').on('change, blur', function(){
		var tab_color = $(this).val();
		$(".tabbar_menu li").css('color',tab_color);
	});
	//change color of active Tab bar icon
	$('.color_picker input[name="tab_icon_active"]').on('change, blur', function(){
		var tab_color_a = $(this).val();
		$(".tabbar_menu li.active").css('color',tab_color_a);
	});
	//change body font on selectbox
	$(".select_fonts").on('change', function(){
		var font_val = $(this).val();
		$("head").append("<style>.app_build_img{font-family:" + font_val + "}</style>");
		//$('.app_screen').css("font-family", font_val);

	});
	//offset menu
	$('.tabbar_menu li').hover(function() {
	    var menu = $(this).find(".tab_overlay_links");
	    var menupos = $(menu).offset();
	    if (menupos.left + menu.width() > $(window).width()) {
	        $(".tab_overlay_links").addClass("offset_menu");
	    }
	    else{
	    	$(".tab_overlay_links").removeClass("offset_menu");
	    }
	});
	//gallery popup js

})(jQuery);
//copy to clip board on click
function copybutton() {
  /* Get the text field */
  var copyText = document.getElementById("ref_code");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  document.execCommand("copy");
}