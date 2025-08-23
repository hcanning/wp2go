<?php
/**
 * The header for our theme
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link id="googleFonts" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CShadows+Into+Light&display=swap" rel="stylesheet" type="text/css">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> <?php understrap_body_attributes(); ?>data-plugin-page-transition>

<?php do_action( 'wp_body_open' ); ?>

<div class="body">

	<!-- ******************* The Navbar Area ******************* -->
	<header id="header" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 148, 'stickySetTop': '-148px', 'stickyChangeLogo': true}">

				<div class="header-body border-color-primary border-top-0 box-shadow-none">

					<div class="header-top header-top-default border-bottom-0 border-top-0">

						<div class="container">

							<div class="header-row py-2">

								<div class="header-column justify-content-start">

									<div class="header-row">

										<nav class="header-nav-top">

											<ul class="nav nav-pills text-uppercase text-2">

												<li class="nav-item nav-item-anim-icon">

													<a class="nav-link ps-0" href="about-us.html"><i class="fas fa-angle-right"></i> About Us</a>

												</li>

												<li class="nav-item nav-item-anim-icon">

													<a class="nav-link" href="contact-us.html"><i class="fas fa-angle-right"></i> Contact Us</a>

												</li>

											</ul>

										</nav>

									</div>

								</div>

								<div class="header-column justify-content-end">

									<div class="header-row">

										<ul class="header-social-icons social-icons d-none d-sm-block social-icons-clean">

											<li class="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>

											<li class="social-icons-x"><a href="http://www.x.com/" target="_blank" title="X"><i class="fab fa-x-twitter"></i></a></li>

											<li class="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>

										</ul>

									</div>

								</div>
<!-- SEARCH -->
								<div class="header-nav-features">
										<div class="header-nav-features-search-reveal-container">
											<div class="header-nav-feature header-nav-features-search header-nav-features-search-reveal d-inline-flex">
												<a href="#" class="header-nav-features-search-show-icon d-inline-flex text-decoration-none"><i class="fas fa-search header-nav-top-icon"></i></a>
											</div>
										</div>
									</div>
<!-- SEARCH -->



							</div>

						</div>

					</div>

					<div class="header-container container z-index-2">

						<div class="header-row py-2">

							<div class="header-column">

								<div class="header-row">

									<div class="header-logo header-logo-sticky-change">

										<a href="index.html">

											<img class="header-logo-sticky opacity-0" alt="Porto" width="100" height="48" data-sticky-width="89" data-sticky-height="43" data-sticky-top="88" src="<?php echo get_stylesheet_directory_uri(); ?>/porto-assets/img/logo-flat-light.png">

											<img class="header-logo-non-sticky opacity-0" alt="Porto" width="100" height="48" src="<?php echo get_stylesheet_directory_uri(); ?>/porto-assets/img/logo-default-slim.png">

										</a>

									</div>

								</div>

							</div>

							<div class="header-column justify-content-end">

								<div class="header-row">

									<ul class="header-extra-info d-flex align-items-center">

										<li class="d-none d-sm-inline-flex">

											<div class="header-extra-info-icon">

												<i class="far fa-envelope text-color-primary text-4 position-relative bottom-2"></i>

											</div>

											<div class="header-extra-info-text">

												<label>Contact Us</label>

												<strong><a href="mailto:mail@example.com" class="text-decoration-none text-color-hover-primary">info@hcann.com</a></strong>

											</div>

										</li>

										<li>

											<div class="header-extra-info-icon">

												<i class="fab fa-whatsapp text-color-primary text-4 position-relative bottom-1"></i>

											</div>

											<div class="header-extra-info-text">

												<label>Call us!</label>

												<strong><a href="tel:8001234567" class="text-decoration-none text-color-hover-primary">617-123-4567</a></strong>

											</div>

										</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="header-nav-bar bg-primary" data-sticky-header-style="{'minResolution': 991}" data-sticky-header-style-active="{'background-color': 'transparent'}" data-sticky-header-style-deactive="{'background-color': '#0088cc'}">

						<div class="container">

							<div class="header-row">

								<div class="header-column">

									<div class="header-row justify-content-end">

										<div class="header-nav header-nav-force-light-text justify-content-start py-2 py-lg-0 my-lg-0" data-sticky-header-style="{'minResolution': 991}" data-sticky-header-style-active="{'margin-left': '135px'}" data-sticky-header-style-deactive="{'margin-left': '0'}">

											<div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">

												<!-- OPEN NAVWALKER -->
													<?php
													wp_nav_menu(
														array(
															'theme_location'  => 'primary',
															'container'       => 'nav',
															'container_class' => 'collapse',
															'container_id'    => '',
															'menu_class'      => 'nav nav-pills',
															'fallback_cb'     => '',
															'menu_id'         => 'mainNav',
															//'add_li_class'    => 'dropdown-submenu',
															'link_class'      => 'dropdown-item',
															'depth'           => 4,
															'walker'          => new Understrap_WP_Bootstrap_Navwalker(),
														)
													);
													?>
												<!-- CLOSE NAVWALKER --->

											</div>

											<button class="btn header-btn-collapse-nav my-2" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">

												<i class="fas fa-bars"></i>

											</button>

										</div>

									</div>

								</div>

							</div>

						</div>

					</div>

				</div>
<!-- SEARCH POP -->
				<div class="header-nav-features header-nav-features-no-border p-static">
					<div class="header-nav-feature header-nav-features-search header-nav-features-search-reveal header-nav-features-search-reveal-big-search header-nav-features-search-reveal-big-search-full">
						<div class="container">
							<div class="row h-100 d-flex">
								<div class="col h-100 d-flex">
									<form role="search" method="get" class="d-flex h-100 w-100" action="<?php echo esc_url( home_url( '/' ) ); ?>">
									<div class="big-search-header input-group">
										<label for="headerSearch" class="screen-reader-text"><?php _e( 'Search for:', 'textdomain' ); ?></label>
										<input class="form-control text-1" id="headerSearch" name="s" type="search" value="<?php echo get_search_query(); ?>" placeholder="Type and hit enter...">
										<a href="#" class="header-nav-features-search-hide-icon"><i class="fas fa-times header-nav-top-icon"></i></a>
									</div>
								</form>
								</div>
							</div>
						</div>
					</div>
				</div>
<!-- SEARCH POP -->
			</header>