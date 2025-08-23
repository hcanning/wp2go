<?php
$show = get_sub_field('show_hide');
if($show == 'show') :
?>
    <div class="row">
    <?php $min_height = get_sub_field('min_height'); ?>
    <?php if( have_rows('card_repeater') ): ?>
        <?php while( have_rows('card_repeater') ) : the_row();
        $title = get_sub_field('title');
        $img = get_sub_field('img');
        $desc = get_sub_field('desc');
        ?> 
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200" style="animation-delay: 200ms;">
                <h4 class="mb-4"><?php echo $title; ?>123</h4>
                <div class="card" style="min-height: <?php echo $min_height;?>px">
                    <img class="card-img-top" src="<?php echo esc_url($img['url']); ?>" alt="<?php echo esc_attr($img['alt']); ?>">
                    <div class="card-body">
                        <h4 class="card-title mb-1 text-4 font-weight-bold">Card Title</h4>
                        <p class="card-text mb-2 pb-1"><?php echo $desc; ?></p>
                        <a href="/" class="read-more text-color-primary font-weight-semibold text-2">Read More <i class="fas fa-angle-right position-relative top-1 ms-1"></i></a>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
    </div>
<?php
endif;
?>