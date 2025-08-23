	<!--slide open-->
	<div class="owl-carousel owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-horizontal-center show-dots-hover nav-inside nav-inside-plus nav-dark nav-md nav-font-size-md show-nav-hover mb-0" data-plugin-options="{'autoplayTimeout': 7000}" data-dynamic-height="['670px','670px','670px','550px','500px']" style="height: <?php the_sub_field('slider_height'); ?>px;">
		<div class="owl-stage-outer">
			<div class="owl-stage">
		<?php 
			// Check rows existexists.
			if( have_rows('slider_repeater') ): 
				while ( have_rows('slider_repeater') ) : the_row(); 
					$image = get_sub_field('img');
					$url = $image['url'];
					$title = $image['title'];
					$alt = $image['alt'];
					$caption_top = get_sub_field('caption_top');
					$caption_center = get_sub_field('caption_center');
					$caption_bottom = get_sub_field('caption_bottom');
					$ver = get_sub_field('caption_vertical_position');
					$hor = get_sub_field('caption_horizontal_position');+
					$overlay = get_sub_field('overlay');
					$cpt = get_sub_field('caption_text_col');
					$text_size_top = get_sub_field('text_size_top');
					$text_size_center = get_sub_field('text_size_center');
					$text_size_bottom = get_sub_field('text_size_bottom');
					?>
					<!-- slide open -->
			
			<!-- Carousel Slide 1 -->
		
			<div class="owl-item position-relative <?php if($overlay != '0'){echo 'overlay overlay-show overlay-op-' . $overlay;}?> lazyload" data-bg-src="<?php echo esc_url($url); ?>" role="img" aria-label="<?php echo esc_attr($alt); ?>" style="background-size: cover; background-position: center;">
					<div class="container position-relative z-index-3 h-100">
						<div class="row justify-content-<?php echo $hor;?> align-items-<?php echo $ver;?> h-100">
							<div class="col-lg-6">
								<div class="d-flex flex-column align-items-center py-5">
									<?php if($caption_top) { ?>
										<h3 class="position-relative text-<?php echo $text_size_top; ?>  line-height-5 font-weight-medium px-4 mb-2 appear-animation" style="color: <?php echo $cpt ?>;" data-appear-animation="fadeInDownShorter" data-plugin-options="{'minWindowWidth': 0}">
										<span class="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
										<img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/slides/slide-title-border.png" class="w-auto appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="250" data-plugin-options="{'minWindowWidth': 0}" alt="" />
									</span>
										<?php echo $caption_top;?>
										<span class="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
										<img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/slides/slide-title-border.png" class="w-auto appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="250" data-plugin-options="{'minWindowWidth': 0}" alt="" />
									</span>
										</h3>
									<?php } ?>
									<?php if($caption_center) { ?>
									<h2 class="font-weight-extra-bold text-<?php echo $text_size_center; ?> mb-3 appear-animation" style="color: <?php echo $cpt; ?>;" data-appear-animation="blurIn" data-appear-animation-delay="500" data-plugin-options="{'minWindowWidth': 0}"><?php echo $caption_center?></h2>
									<?php } ?>
									<?php if($caption_bottom) { ?>
									<p class="text-<?php echo $text_size_bottom; ?> font-weight-light opacity-7 text-center mb-0" style="color: <?php echo $cpt; ?>;" data-plugin-animated-letters data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0, 'animationSpeed': 30}"><?php echo $caption_bottom?></p>
									<?php } ?>
								</div> 
							</div>
						</div>
					</div>
				</div>
				
				
					<?php
				endwhile;
			endif; 
			?>
		</div>
	</div>
	<div class="owl-nav">
			<button type="button" role="presentation" class="owl-prev"></button>
			<button type="button" role="presentation" class="owl-next"></button>
		</div>
		<div class="owl-dots mb-5">
			<?php 
			// set dots
			if( have_rows('slider_repeater') ): while ( have_rows('slider_repeater') ) : the_row(); 
			?>

			<button role="button" class="owl-dot"><span></span></button>

			<?php
			endwhile;
			endif;
			?>
		</div> 
</div>
<!--slide close-->