jQuery(document).ready(function() {
	jQuery('#mycarousel').jcarousel();
	jQuery('li.jcarousel-item-horizontal').hover(function(){
		jQuery(this).append('<img class="album-hover" src="images/album-hover.png" alt="Image Hover" />');
	},function(){
		jQuery(this).find('.album-hover').remove(); 
	});
});