jQuery(window).load(function() {
      if(!jQuery(".footer3 .site-by").length) jQuery(".footer3").prepend("<p class=\"site-by\">Site by <a href=\"http://clickconsultingservices.com\">Click Consulting</a></p>");

      var menu = '.purim-minisite div#chabad_main_content .chabad_navigator_bar';
		var menuItem = jQuery(menu);

		menuItem.click(function() { jQuery(this).addClass("clicked") } );

		jQuery(document).click(function(e){

		      // Check if click was triggered on or within #menu_content
		      if( jQuery(e.target).closest(menu).length > 0) {
		      }

		      // Otherwise
		      // trigger your click function
		      menuItem.removeClass("clicked"); 
		  });


});

