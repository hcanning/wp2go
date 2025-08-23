<?php
/**
 * The template for displaying search results pages
 *
 * @package Understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();

$container = get_theme_mod( 'understrap_container_type' );

?>

<div class="wrapper" id="search-wrapper">

	<div class="<?php echo esc_attr( $container ); ?>" id="content" tabindex="-1">

		<div class="row">

			<?php
			// Do the left sidebar check and open div#primary.
			get_template_part( 'global-templates/left-sidebar-check' );
			?>

			<main class="site-main" id="main">

				<?php if ( have_posts() ) : ?>

					<header class="">

						<h1 class="page-title">
							<?php
							printf(
								/* translators: %s: query term */
								esc_html__( 'Search Results for: %s', 'understrap' ),
								'<span>' . get_search_query() . '</span>'
							);
							?>
						</h1>
						<p class="search-results-count text-secondary">
							<?php
							/* translators: %d: number of search results */
							printf(
								esc_html__( 'Found %d results', 'understrap' ),
								$wp_query->found_posts
							);
							?>
						</p>

					</header><!-- .page-header -->

					<?php /* Start the Loop */ ?>
					<?php
					$counter = 0; // Initialize a counter
					$total_posts = $wp_query->post_count; // Get total number of posts
					while ( have_posts() ) :
						the_post();
						$counter++; // Increment counter
						/*
						 * Run the loop for the search to output the results.
						 * If you want to overload this in a child theme then include a file
						 * called content-search.php and that will be used instead.
						 */
						get_template_part( 'loop-templates/content', 'search' );

						// Add <hr> between articles, but not after the last one
						if ( $counter < $total_posts ) :
					?>
							<hr class="bg-secondary">
					<?php
						endif;
					endwhile;
					?>

				<?php else : ?>

					<?php get_template_part( 'loop-templates/content', 'none' ); ?>

				<?php endif; ?>

			</main>

			<?php
			// Display the pagination component.
			understrap_pagination();

			// Do the right sidebar check and close div#primary.
			get_template_part( 'global-templates/right-sidebar-check' );
			?>

		</div><!-- .row -->

	</div><!-- #content -->

</div><!-- #search-wrapper -->

<?php
get_footer();