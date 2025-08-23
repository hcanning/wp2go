	<?php if( have_rows('left_sidebar_content') ): ?>
		<?php while( have_rows('left_sidebar_content') ): the_row(); ?>


				<?php  if( get_row_layout() == 'sidebar_navigation_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/sidebar/side_nav' ); ?>	

				<?php  elseif( get_row_layout() == 'text_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/sidebar/text' ); ?>	

				<?php  elseif( get_row_layout() == 'button_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/sidebar/button' ); ?>	

				<?php  elseif( get_row_layout() == 'call_to_action_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/sidebar/cta' ); ?>	
					
				<?php  elseif( get_row_layout() == 'video_layout' ): ?>
			
					<?php get_template_part( 'page-templates/inc/sidebar/video' ); ?> 	






				<?php endif; ?> 
		 <?php endwhile; ?>
	<?php endif; ?>   