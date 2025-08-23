
<?php 
$show = get_field('slider_hero'); 
if($show == 'slider') :

    //slider open - show hide needs to be with while loop for a Group field - full/fixed width slider
    if( have_rows('slider_group') ): ?>
        <?php while ( have_rows('slider_group') ) : the_row(); ?>
            <?php
                $sliderwidth = get_sub_field('slider_width');
                    if($sliderwidth === 'full'):
                        include get_stylesheet_directory() . '/page-templates/inc/slider1.php'; 
                    else: ?>
                    <div class="slider-bg1" style="background: <?php the_sub_field('slider_bg_color'); ?>">
                        <div class="container p-0">
                            <?php  include get_stylesheet_directory() . '/page-templates/inc/slider1.php'; ?>
                        </div>
                    </div>
                    <?php endif; ?>
        <?php endwhile;?>
    <?php endif; //slider close ?>	

<?php elseif($show == 'hero') : ?>

    <?php if( have_rows('hero_image') ): ?>
    <?php while ( have_rows('hero_image') ) : the_row(); ?>
            <?php 
                $image = get_sub_field('img');
                if( $image ): ?>
                <?php $img_width = get_sub_field('img_width'); ?>
                    <?php if($img_width == 'fixed'): ?>
                        <div class="bg-<?php the_sub_field('hero_bg');?>">
                            <div class="container p-0">
                                <?php get_template_part( 'page-templates/inc/hero1' ); ?>	
                            </div>
                        </div>
                     <?php else : ?>
                        <div class="bg-<?php the_sub_field('hero_bg');?> px-3">
                                <?php get_template_part( 'page-templates/inc/hero1' ); ?>	
                        </div>
                    <?php endif;?>
                <?php endif; ?>
    <?php endwhile;?>
    <?php endif; //slider close ?>	

<?php endif;?>