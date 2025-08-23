<!-- slide open -->
<div class="position-relative overlay overlay-show overlay-op-8" role="img" aria-label="<?php echo esc_attr($img_alt); ?>" data-dynamic-height="['670px','670px','670px','550px','500px']" style="background-image: url(<?php echo esc_url($img_url); ?>); background-size: cover; background-position: center; height: 370px;">
	<?php if($caption_text_top) : ?> <!--lose graphic if empty-->
	<div class="container position-relative z-index-3 h-100">
		<div class="row justify-content-center align-items-center h-100">
			<div class="col-lg-6">
				<div class="d-flex flex-column align-items-center">
					<h3 class="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation" data-appear-animation="fadeInDownShorter" data-plugin-options="{'minWindowWidth': 0}">
						<span class="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
							<img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/slides/slide-title-border.png" class="w-auto appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="250" data-plugin-options="{'minWindowWidth': 0}" alt="" />
						</span>
						<?php echo $caption_text_top?>
						<span class="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
							<img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/slides/slide-title-border.png" class="w-auto appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="250" data-plugin-options="{'minWindowWidth': 0}" alt="" />
						</span>
					</h3>
					<h2 class="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation" data-appear-animation="blurIn" data-appear-animation-delay="500" data-plugin-options="{'minWindowWidth': 0}"><?php echo $caption_text_center?></h2>
					<p class="text-4 text-color-light font-weight-light opacity-7 text-center mb-0" data-plugin-animated-letters data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0, 'animationSpeed': 30}"><?php echo $caption_text_bottom?></p>
				</div>
			</div>
		</div>
	</div>
	<?php endif; ?>
</div>
<!-- slide close -->