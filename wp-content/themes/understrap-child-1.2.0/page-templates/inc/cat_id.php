<?php
$cat = get_sub_field('cat_id');
$min_height = get_sub_field('min_height'); 
$type = get_sub_field('cards_or_carousel');
echo 'TYPE: ' . $type;
// Only define helper functions once
if ( ! function_exists( 'custom_trim_excerpt' ) ) {
    function custom_trim_excerpt($text) {
        $text = wp_strip_all_tags($text);
        if (strlen($text) > 100) {
            $text = substr($text, 0, 100);
            $text = rtrim($text, " \t\n\r\0\x0B,.") . '...';
        }
        return $text;
    }
}

if ( ! function_exists( 'parse_ids' ) ) {
    function parse_ids($input) {
        if (!$input) {
            return [];
        }
        if (is_string($input)) {
            $input = array_map('trim', explode(',', $input));
        }
        if (is_array($input)) {
            return array_filter(array_map('intval', $input));
        }
        return [];
    }
}

$categories = parse_ids($cat);

if (!empty($categories)) :

    // Generate a unique query variable name
    $unique_id = uniqid('category_query_');
    ${$unique_id} = new WP_Query([
        'post_type'      => 'post',
        'post_status'    => 'publish',
        'posts_per_page' => 9,
        'category__in'   => $categories,
    ]);

    if (${$unique_id}->have_posts()) :
        ?>
        <h2>Posts in Selected Categories</h2>

<?php if($type == 'cards') : ?>

        <div class="row">
            <?php while (${$unique_id}->have_posts()) : ${$unique_id}->the_post(); ?>
            <div class="col-md-6 col-lg-4 mb-5">
                  <div class="card" style="min-height: <?php echo $min_height;?>px">
                        <?php the_post_thumbnail('medium', ['alt' => get_the_title(), 'class' => 'card-img-top']); ?>
                        <div class="card-body">
                            <h4 class="card-title mb-1 text-4 font-weight-bold"><?php the_title(); ?></h4>
                            <p class="card-text mb-2 pb-1">
                                <?php
                                $excerpt = wp_strip_all_tags(get_the_excerpt());
                                if (strlen($excerpt) > 100) {
                                    $excerpt = substr($excerpt, 0, 100);
                                    $excerpt = rtrim($excerpt, " \t\n\r\0\x0B,.") . '...';
                                }
                                echo esc_html($excerpt);
                                ?>
                            </p>
                            <a href="<?php the_permalink(); ?>" class="read-more text-color-primary font-weight-semibold text-2">
                                Read More <i class="fas fa-angle-right position-relative top-1 ms-1"></i>
                            </a>
                        </div>
                    </div>
            </div>
            <?php endwhile; ?>
        </div>

<?php else: ?>

        <div class="owl-carousel owl-theme" data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 1}, '768': {'items': 2}, '979': {'items': 3}, '1199': {'items': 3}}, 'loop': false, 'autoHeight': true, 'margin': 10}">
            <?php while (${$unique_id}->have_posts()) : ${$unique_id}->the_post(); ?>
                  <div class="card" style="min-height: <?php echo $min_height;?>px">
                        <?php the_post_thumbnail('medium', ['alt' => get_the_title(), 'class' => 'card-img-top']); ?>
                        <div class="card-body">
                            <h4 class="card-title mb-1 text-4 font-weight-bold"><?php the_title(); ?></h4>
                            <p class="card-text mb-2 pb-1">
                                <?php
                                $excerpt = wp_strip_all_tags(get_the_excerpt());
                                if (strlen($excerpt) > 100) {
                                    $excerpt = substr($excerpt, 0, 100);
                                    $excerpt = rtrim($excerpt, " \t\n\r\0\x0B,.") . '...';
                                }
                                echo esc_html($excerpt);
                                ?>
                            </p>
                            <a href="<?php the_permalink(); ?>" class="read-more text-color-primary font-weight-semibold text-2">
                                Read More <i class="fas fa-angle-right position-relative top-1 ms-1"></i>
                            </a>
                        </div>
                    </div>
            <?php endwhile; ?>
        </div>

<?php endif; ?>


        <?php
        the_posts_pagination([
            'prev_text' => __('Previous', 'text-domain'),
            'next_text' => __('Next', 'text-domain'),
        ]);
    else :
        ?>
        <p><?php _e('No posts found in these categories.', 'text-domain'); ?></p>
        <?php
    endif;

    wp_reset_postdata();

else :
    echo 'No category IDs found!';
endif;
?>
