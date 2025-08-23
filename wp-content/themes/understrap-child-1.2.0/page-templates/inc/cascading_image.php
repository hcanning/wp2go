<?php
$show = get_sub_field('show_hide');
$text = get_sub_field('text');
if($show == 'show') :
?>
<div class="row align-items-center my-5">
    <div class="col-sm-9 col-md-7 mx-auto order-2 order-md-1">

        <div class="cascading-images-wrapper">

            <div class="cascading-images position-relative">

              <?php if( have_rows('cascading_image_repeater') ): ?>
              <?php while( have_rows('cascading_image_repeater') ) : the_row();
                $image = get_sub_field('image');
                $index = get_row_index(); 
                ?>

                <?php if($index == '1') :?>
                    <div data-plugin-float-element data-plugin-options="{'startPos': 'top', 'speed': 0.1, 'transition': true, 'transitionDuration': 1000, 'isInsideSVG': true}">
                        <img src="<?php echo esc_url($image['url']); ?>" class="appear-animation" width="500" alt="<?php echo esc_attr($image['alt']); ?>" data-appear-animation="expandIn" data-appear-animation-duration="600ms" />
                    </div>
                <?php endif; ?>

                 <?php if($index == '2') :?>
                    <div class="position-absolute w-100" style="top: 41%; left: -30%;">
                        <div data-plugin-float-element data-plugin-options="{'startPos': 'top', 'speed': 0.2, 'transition': true, 'transitionDuration': 1000, 'isInsideSVG': true}">
                            <img src="<?php echo esc_url($image['url']); ?>" class="appear-animation" width="500" alt="<?php echo esc_attr($image['alt']); ?>" data-appear-animation="expandIn" data-appear-animation-delay="300" data-appear-animation-duration="600ms" />
                        </div>
                    </div>
                <?php endif; ?>

                 <?php if($index == '3') :?>
                    <div class="position-absolute w-100" style="top: 75%; left: 30%;">
                        <div data-plugin-float-element data-plugin-options="{'startPos': 'top', 'speed': 0.3, 'transition': true, 'transitionDuration': 1000, 'isInsideSVG': true}">
                            <img src="<?php echo esc_url($image['url']); ?>" class="appear-animation" width="500" alt="<?php echo esc_attr($image['alt']); ?>" data-appear-animation="expandIn" data-appear-animation-delay="600" data-appear-animation-duration="600ms" />
                        </div>
                    </div>
                <?php endif; ?>

                <?php endwhile; ?>
                <?php endif; ?>

            </div>
        </div>
    </div>
    <div class="col-md-4 py-lg-5 my-lg-5 mb-4 order-1 order-md-2">

        <div class="pe-3 ps-md-5 pb-3 pb-sm-0 py-lg-5 my-lg-4 border-left-light border-sm-none">
            <?php echo $text; ?>
        </div>

    </div>
</div>
<?php
endif;
?>