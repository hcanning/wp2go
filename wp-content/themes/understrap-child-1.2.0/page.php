<?php

/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
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