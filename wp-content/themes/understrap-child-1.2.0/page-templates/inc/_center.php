	<?php if( have_rows('universal_content') ): ?>
		<?php while( have_rows('universal_content') ): the_row(); ?>

				<?php if( get_row_layout() == 'accordion_layout' ): ?>

					<?php get_template_part( 'page-templates/inc/accordion' ); ?>

				<?php  elseif( get_row_layout() == 'card_layout' ): ?>
				
					<?php get_template_part( 'page-templates/inc/card' ); ?>

				<?php  elseif( get_row_layout() == 'toggle_layout' ): ?>
				
					<?php get_template_part( 'page-templates/inc/toggle' ); ?>
					
				<?php  elseif( get_row_layout() == 'carousel_layout' ): ?>

					<?php get_template_part( 'page-templates/inc/carousel' ); ?>

				<?php  elseif( get_row_layout() == 'button_layout' ): ?>
					 
					<?php get_template_part( 'page-templates/inc/button' ); ?>
				
				<?php  elseif( get_row_layout() == 'list_layout' ): ?>
					
					<?php get_template_part( 'page-templates/inc/list' ); ?>

				<?php  elseif( get_row_layout() == 'testimonial_layout' ): ?>
					
					<?php get_template_part( 'page-templates/inc/testimonial' ); ?>

				<?php  elseif( get_row_layout() == 'before_after_layout' ): ?>
					
					<?php get_template_part( 'page-templates/inc/before_after' ); ?>

			    <?php  elseif( get_row_layout() == 'call_to_action_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/call_to_action' ); ?>

				<?php  elseif( get_row_layout() == 'table_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/table' ); ?>

				<?php  elseif( get_row_layout() == 'process_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/process' ); ?>

				<?php  elseif( get_row_layout() == 'parallax_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/parallax' ); ?>

				<?php  elseif( get_row_layout() == 'divider_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/divider' ); ?>

				<?php  elseif( get_row_layout() == 'map_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/map' ); ?>

				<?php  elseif( get_row_layout() == 'alert_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/alert' ); ?>

				<?php  elseif( get_row_layout() == 'read_more_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/read_more' ); ?>

				<?php  elseif( get_row_layout() == 'cascading_image_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/cascading_image' ); ?>

				<?php  elseif( get_row_layout() == 'post_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/post' ); ?>

				<?php  elseif( get_row_layout() == 'profile_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/profile' ); ?>

				<?php  elseif( get_row_layout() == 'masonry_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/masonry' ); ?>

				<?php  elseif( get_row_layout() == 'masonry_gallery_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/masonry_gallery' ); ?>

				<?php  elseif( get_row_layout() == 'shortcode_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/shortcode' ); ?>

				<?php  elseif( get_row_layout() == 'chart_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/chart' ); ?>					

				<?php  elseif( get_row_layout() == 'heading_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/heading' ); ?>	

				<?php  elseif( get_row_layout() == 'vertical_space_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/vertical_space' ); ?>	  

				<?php  elseif( get_row_layout() == 'datatable_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/datatable' ); ?>	 

				<?php  elseif( get_row_layout() == 'video_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/video' ); ?>	

				<?php  elseif( get_row_layout() == 'two_box_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/two_box' ); ?>			

				<?php  elseif( get_row_layout() == 'flex_button_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/flex_button' ); ?>	

				<?php  elseif( get_row_layout() == 'text_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/text' ); ?>						

				<?php  elseif( get_row_layout() == 'tab_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/tab' ); ?>	

				<?php endif; ?> 
		 <?php endwhile; ?>
	<?php endif; ?>   