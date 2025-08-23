<?php 
    $style = get_sub_field('style');
    if($style == 'style1') :
 ?>
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <?php 
                    $image = get_sub_field('hero_image_img');
                ?>
                <img src="<?php echo esc_url($image['url']); ?>" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6 text-<?php the_sub_field('caption_text_color');?>">
            <h1 class="display-5 fw-bold lh-1 mb-3"><?php the_sub_field('caption_hero') ?></h1>
            <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <?php $link = get_sub_field('button_link');?>
                                    <?php if( $link ): 
                                        $link_url = $link['url'];
                                        $link_title = $link['title'];
                                        $link_target = $link['target'] ? $link['target'] : '_self';
                                    endif; ?>
                    <button href="<?php echo esc_url($link_url); ?>" type="button" class="btn btn-<?php the_sub_field('button_bg') ?> btn-lg px-4 me-md-2"><?php echo esc_html($link_title); ?></button>
                </div>
            </div>
    </div>

<?php elseif($style == "style2") : ?>

	 <?php 
     $image = get_sub_field('hero_image_img');
      $swatch1 = get_field('swatch_brand_color'); //works
      $swatch2 = get_field('swatch_2_brand_color'); //works
    
     if( $link ): 
        $link_url = $link['url'];
        $link_title = $link['title'];
        $link_target = $link['target'] ? $link['target'] : '_self';
    endif; 
    ?>
    <div class="row">
        <div class="col-lg-6 pt-5 text-light">
            <h2 class="pt-5 font-weight-bold text-10 line-height-2 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="500"><span class="text-5"><?php the_sub_field('caption_hero') ?></span></h2>
            <h4 class="text-6 line-height-6 font-weight-normal appear-animation mt-5" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="800"><span class="opacity-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus blandit massa enim adipiscing elit phasellus.</span></h4>
        
            <a href="#" class="btn btn-outline btn-rounded btn-primary text-hover-quaternary btn-with-arrow mb-2 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="1100">Contact Us<span><i class="fas fa-chevron-right"></i></span></a>
        </div>
        <div class="col-lg-6 pt-5">
            <img src="<?php echo esc_url($image['url']); ?>" class="mb-5 d-block mx-lg-auto img-fluid " alt="Bootstrapappear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="1300" width="700" height="400" loading="lazy">
            
        </div>
    </div>
			
<?php endif; ?>