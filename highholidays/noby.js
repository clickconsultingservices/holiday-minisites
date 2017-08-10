jQuery(window).load(function() {

      var menu = '.highholidays-minisite div#chabad_main_content .chabad_navigator_bar';
		var menuItem = jQuery(menu);

		menuItem.click(function() { jQuery(this).addClass("clicked") } );

		jQuery(document).click(function(e){

		      // Check if click was triggered on or within #menu_content
		      if( jQuery(e.target).closest(menu).length > 0) {
		      	
		      } else {

			      // Otherwise
			      // trigger your click function
			      menuItem.removeClass("clicked"); 
			  }
		  });


});

