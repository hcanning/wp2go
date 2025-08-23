<?php

/**

 * Template Name: Universal

 *

 * Template for displaying a page without sidebar even if a sidebar widget is published.

 *

 * @package Understrap

 */

// Exit if accessed directly.

defined( 'ABSPATH' ) || exit;

// $bootstrap_version = get_theme_mod( 'understrap_bootstrap_version', 'bootstrap5' );

// $navbar_type       = get_theme_mod( 'understrap_navbar_type', 'collapse' );
 get_header();
?>
			<div role="main" class="main">
				<?php include get_stylesheet_directory() . '/page-templates/inc/slider_front.php'; ?> 
					<div class="container">
						 <div class="row my-5">	
							<?php if ( ! is_front_page() && ! is_home() ) : ?>
								<h1><strong><?php the_title(); ?></strong></h1>
							<?php endif; ?>
						

						
						<?php
						if( get_field('layout') == 'left' ) {
							?>
							<div class="col-lg-3">
								<?php get_template_part( 'page-templates/inc/_left' ); ?>
							</div>
							<div class="col-lg-9">
								<?php get_template_part( 'page-templates/inc/_center' ); ?>
							</div>
							<?php
						} elseif ( get_field('layout') == 'center') {
							?>
							<div class="col-lg-12">
								<?php get_template_part( 'page-templates/inc/_center' ); ?>
							</div>
							<?php
						} elseif ( get_field('layout') == 'right') {
							?>
							<div class="col-lg-9">
								<?php get_template_part( 'page-templates/inc/_center' ); ?>
							</div>
							<div class="col-lg-3">
								<?php get_template_part( 'page-templates/inc/_right' ); ?>
							</div>
							<?php
						} elseif ( get_field('layout') == 'both') {
							?>
							<div class="col-lg-3">
								<?php get_template_part( 'page-templates/inc/_left' ); ?>
							</div>
							<div class="col-lg-6">
								<?php get_template_part( 'page-templates/inc/_center' ); ?>
							</div>
							<div class="col-lg-3">
								<?php get_template_part( 'page-templates/inc/_right' ); ?>
							</div>
							<?php
						} else {
							echo 'Invalid layout specified';
						}
						?>
						</div> <!--close row-->
						
					</div> <!-- close container -->
		

			</div> <!--close main -->

<?php get_footer(); ?>