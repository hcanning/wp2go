<?php 
$show = get_sub_field('show_hide');

if($show == 'show') :
?> 
    <?php if( have_rows('person') ): ?>
        <?php while( have_rows('person') ): the_row(); 
        $image = get_sub_field('image');
        $text = get_sub_field('text');
        $position = get_sub_field('position');
        $name = get_sub_field('name');
        $company = get_sub_field('company');
        $theme = get_sub_field('theme_color');
        $image_style = get_sub_field('image_style');
        $image_height = get_sub_field('image_min_height');

        ?>
    <div class="row my-3">
        <div class="col"> 
            <div class="testimonial testimonial-<?php echo $theme; ?>">
                <blockquote>
                    <?php echo $text; ?>
                </blockquote>
                <div class="testimonial-arrow-down"></div>
                <div class="testimonial-author">
                    <div class="testimonial-author-thumbnail">
                        <img src="<?php echo esc_url($image['url']); ?>" class="<?php echo $image_style; ?>" style="height: <?php echo $image_height;?>px; max-width: 150px;" alt="<?php echo esc_attr($image['alt']); ?>">
                    </div>
                    <p><strong><?php echo $name; ?></strong><span><?php echo $position; ?></span><span class="text-<?php echo $theme; ?>"><?php echo $company; ?></span></p>
                </div>
            </div>
        </div>
    </div>
    <?php endwhile; ?>
    <?php endif; ?>
<?php
endif;
?>