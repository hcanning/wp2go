<?php
$show = get_sub_field('show_hide');
if($show == 'show') :
?>
    <div class="row my-5">
        <div class="owl-carousel owl-theme show-nav-title" data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 1}, '768': {'items': 2}, '979': {'items': 3}, '1199': {'items': 3}}, 'loop': false, 'autoHeight': true, 'margin': 10, 'nav': true, 'dots': false}">
             <?php if( have_rows('carousel_repeater') ): ?>
                 <?php while( have_rows('carousel_repeater') ) : the_row();
                 $image = get_sub_field('image');
                 ?>
                 <div>
                    <img alt="<?php echo esc_attr($image['alt']); ?>" class="img-fluid rounded" src="<?php echo esc_url($image['url']); ?>">
                 </div>
                <?php endwhile; ?>
             <?php endif; ?>
        </div>
    </div>
<?php
endif;
?>