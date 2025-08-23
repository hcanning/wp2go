<div class="col-md-4 order-md-2 mb-4 mb-lg-0 appear-animation" data-appear-animation="fadeInLeftShorter">
	
	<?php $image = get_sub_field('image');
			if( $image ):  
				$url = $image['url'];
				$alt = $image['alt'];
		?>                       
				<img src="<?php echo esc_url($url); ?>" class="img-fluid" alt="<?php echo esc_attr($alt); ?>">
			<?php endif; ?>
	</div>
 
	<div class="col order-2">
			<div class="overflow-hidden">
				<h2 class="text-color-dark font-weight-bold text-8 mb-0 pt-0 mt-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="300"><?php the_sub_field('name'); ?></h2>
			</div>
			<div class="overflow-hidden mb-3">
				<p class="font-weight-bold text-primary text-uppercase mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="500"><?php the_sub_field('position'); ?></p>
			</div>
		<p class="lead appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700"><?php the_sub_field('social_link'); ?></p>
		<p class="pb-3 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="800"><?php the_sub_field('text'); ?></p>
		<hr class="solid my-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="900">
		<div class="row align-items-center appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1000">
			<div class="col-lg-6">
			</div>
				<div class="col-sm-6 text-lg-end my-4 my-lg-0">
					<strong class="text-uppercase text-1 me-3 text-dark">social links</strong>
						<ul class="social-icons float-lg-end">
						<?php if( have_rows('social_repeater') ):?>
							<?php while ( have_rows('social_repeater') ) : the_row();?>
											<?php if ( get_sub_field('social_media_type') == 'facebook' ): ?>
											<li class="social-icons-facebook"><a href="<?php the_sub_field('social_link'); ?>" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
											
											<?php elseif ( get_sub_field('social_media_type') == 'twitter' ): ?>
											<li class="social-icons-twitter"><a href="<?php the_sub_field('social_link'); ?>" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
											
											<?php elseif ( get_sub_field('social_media_type') == 'linkedin' ): ?>
											<li class="social-icons-linkedin"><a href="<?php the_sub_field('social_link'); ?>" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
											
											<?php elseif ( get_sub_field('social_media_type') == 'instagram' ): ?>
											<li class="social-icons-linkedin"><a href="<?php the_sub_field('social_link'); ?>" target="_blank" title="Linkedin"><i class="fab fa-instagram"></i></a></li>
											
											<?php elseif ( get_sub_field('social_media_type') == 'youtube' ): ?>
											<li class="social-icons-linkedin"><a href="<?php the_sub_field('social_link'); ?>" target="_blank" title="Linkedin"><i class="fab fa-youtube"></i></a></li>

										    <?php endif; ?>
							<?php endwhile; ?>
						<?php endif; ?>
						</ul>
				</div>
		</div>
	</div>
