<!-- TWO BOX LAYOUT OPEN -->
<?php 
$show = get_sub_field('show_hide');
if($show == 'show') :
?> 
<?php $uniform_height = get_sub_field('uniform_height'); ?>
    <div class="row">
            <?php if( have_rows('two_box_repeater') ): ?>
                <?php while( have_rows('two_box_repeater') ) : the_row();?>
                <?php 
                    $bg_color = get_sub_field('bg_color');
                    $border_color = get_sub_field('border_color'); 
                    $image = get_sub_field('img'); 
                    $theme = get_sub_field('theme_color');
                ?>
                    <div class="col-md-6 col-lg-6 mb-5 mb-lg-0 appear-animation mt-3" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">
                        <div class="two_box p-1 <?php the_sub_field('text_color'); ?> bg-<?php echo $theme; ?>" <?php if($border_color):?>border: 1px solid <?php the_sub_field('border_color'); ?>;<?php endif; ?> ">
                            <div class="box_body" style="min-height: <?php echo $uniform_height; ?>px;">
                                <?php if( $image ):
                                        // Image variables.
                                        $url = $image['url']; 
                                        $title = $image['title'];
                                        $alt = $image['alt'];
                                        $caption = $image['caption'];
                                        ?>
                                        <?php if( get_sub_field('img_tb') == 'top' ): ?>
                                        <img class="img-fluid w-100 my-0" src="<?php echo esc_url($url); ?>" alt="<?php echo esc_attr($alt); ?>" />
                                        <?php endif; ?>
                                        <div class="p-4 <?php the_sub_field('text_color'); ?>">
                                            <?php the_sub_field('text'); ?>
                                        </div>
                                        <?php if( get_sub_field('img_tb') == 'bottom' ): ?>
                                        <img class="img-fluid w-100 my-0" src="<?php echo esc_url($url); ?>" alt="<?php echo esc_attr($alt); ?>" />
                                        <?php endif; ?>
                                    <?php else:?>	
                                        <div class="p-4 <?php the_sub_field('text_color'); ?>">
                                            <?php the_sub_field('text'); ?>
                                        </div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
   
                <?php endwhile; ?>
            <?php endif; ?>    
    </div>
<?php
endif;
?>