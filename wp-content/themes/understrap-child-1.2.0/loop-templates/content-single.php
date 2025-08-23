<article class="post post-large" id="post-<?php the_ID(); ?>">
		<div class="post-image">
			<a href="<?php echo esc_url(get_permalink()); ?>">
				<?php echo get_the_post_thumbnail( $post->ID, 'large' ); ?>
				<!-- <img src="img/blog/wide/blog-11.jpg" class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="" /> -->
			</a>
		</div>

		<div class="post-date">
			<span class="day"><?php echo esc_html(get_the_date('d')); ?></span>
			<span class="month"><?php echo esc_html(get_the_date('M')); ?></span>
			<span class="year"><?php echo esc_html(get_the_date('Y')); ?></span>
		</div>

		<div class="post-content">

			<h2 class="font-weight-semibold text-6 line-height-3 mb-3"><a class="link-secondary" href="<?php echo esc_url(get_permalink()); ?>">This is a stardard post with preview image</a></h2>
			<?php the_content();?>
			<div class="post-meta">
				<?php understrap_link_pages();?>
				<span><i class="far fa-user"></i> By <a href="#">
					 <?php
						$author_id = get_the_author_meta('ID');
						$first_name = get_the_author_meta('first_name', $author_id);
						$last_name = get_the_author_meta('last_name', $author_id);

						if ($first_name || $last_name) {
							echo esc_html(trim("$first_name $last_name"));
						} else {
							the_author();
						}
					?>
				</a> </span>
				<span><i class="far fa-folder"></i><?php the_category(', '); ?></span>
				<span><i class="far fa-comments"></i> <a href="#"><?php comments_number('0', '1', '%'); ?> Comments</a></span>
				<span class="d-block d-sm-inline-block float-sm-end mt-3 mt-sm-0"><a href="<?php echo esc_url(get_permalink()); ?>" class="btn btn-xs btn-light text-1 text-uppercase">Read More</a></span>
			</div>

		</div>
	</article>