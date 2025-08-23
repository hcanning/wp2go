<div class="container">
    <div class="row">
        <div class="position-relative">
            <div class="owl-carousel dots-inside dots-horizontal-center show-dots-hover nav-inside nav-inside-plus nav-dark nav-md nav-font-size-md show-nav-hover mb-0" data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 1}, '768': {'items': 1}, '979': {'items': 1}, '1199': {'items': 1}}, 'loop': false, 'autoHeight': true, 'margin': 0, 'dots': true, 'dotsVerticalOffset': '-75px', 'nav': true, 'animateIn': 'fadeIn', 'animateOut': 'fadeOut', 'mouseDrag': false, 'touchDrag': false, 'pullDrag': false, 'autoplay': true, 'autoplayTimeout': 9000, 'autoplayHoverPause': true, 'rewind': true}" >
                <?php if( have_rows('slider_body_repeater') ): ?>
                    <?php while( have_rows('slider_body_repeater') ) : the_row();
                                    $get_img = get_sub_field('img');
                                    $img_alt = $get_img['alt'];
                                    $img_url = $get_img['url'];
                                    $caption_text_top = get_sub_field('caption_text_top');
                                    $caption_text_center = get_sub_field('caption_text_center');
                                    $caption_text_bottom = get_sub_field('caption_text_bottom');
                                    $ver = get_sub_field('caption_vertical_position');
                                    $hor = get_sub_field('caption_horizontal_position');
                                    $overlay = get_sub_field('overlay');
                                    ?>
                        <?php include get_stylesheet_directory() . '/includes/slider_body.php'; ?> 
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>