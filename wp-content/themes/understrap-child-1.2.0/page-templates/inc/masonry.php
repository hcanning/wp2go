<?php
    $num_cols = get_sub_field('num_columns');
    $bg = get_sub_field('page_section_bg');
    $show = get_sub_field('show_hide');
if($show == 'show') :
    ?>
<h2>Masonry</h2>
    <?php $uniform_height = get_sub_field('uniform_height'); ?>
        <div class="container">
        <ul class="d-none nav nav-pills sort-source sort-source-style-3 justify-content-center" data-sort-id="portfolio<?php echo get_row_index();?>" data-option-key="filter" data-plugin-options="{'layoutMode': 'masonry', 'filter': '*', 'useHash': false}"></ul>
            <div class="sort-destination-loader mt-4 pt-2 sort-destination-loader-loaded">
                <div class="row portfolio-list sort-destination" data-sort-id="portfolio<?php echo get_row_index();?>" data-filter="*" style="position: relative; height: 1455.98px;">
                        <?php if( have_rows('masonry_repeater') ): ?>
                            <?php while( have_rows('masonry_repeater') ) : the_row();?> 
                            <?php
                            $bg_color = get_sub_field('bg_color');
                            $border_color = get_sub_field('border_color'); 
                            ?>
                                        <div class="col-md-<?php echo $num_cols;?> iso-align-left isotope-item websites" style="position: absolute; left: 0px; top: 1002.82px;">
                                            <div class="portfolio-item <?php the_sub_field('text_color'); ?>" style="<?php if($bg_color):?>background: <?php the_sub_field('bg_color'); ?><?php endif; ?>; <?php if($border_color):?>border: 1px solid <?php the_sub_field('border_color'); ?>;<?php endif; ?> ">
                                                
                                                <div class="p-0" style="min-height: <?php echo $uniform_height; ?>px; position: relative;">
                                                    <?php $image = get_sub_field('img');
                                                        if( $image ):
                                                        // Image variables.
                                                        $url = $image['url'];
                                                        $title = $image['title'];
                                                        $alt = $image['alt'];
                                                        $caption = $image['caption'];
                                                        ?>
                                                            <?php if( get_sub_field('img_tb') == 'top' ): ?>
                                                            <img class="img-fluid w-100" src="<?php echo esc_url($url); ?>" alt="<?php echo esc_attr($alt); ?>" />
                                                            <?php the_sub_field('text'); ?>
                                                            <?php endif; ?>
                                                        
                                                            <?php if( get_sub_field('img_tb') == 'bottom' ): ?>
                                                            <?php the_sub_field('text'); ?>
                                                            <img class="img-fluid w-100" src="<?php echo esc_url($url); ?>" alt="<?php echo esc_attr($alt); ?>" />
                                                            <?php endif; ?>
                                                        <?php else: ?>
                                                            <?php the_sub_field('text'); ?>
                                                        <?php endif; ?>	
                                                            

                                                            <?php 
                                                            $link = get_sub_field('add_button');
                                                            if( $link ): 
                                                                $link_url = $link['url'];
                                                                $link_title = $link['title'];
                                                                $link_target = $link['target'] ? $link['target'] : '_self';
                                                                ?>
                                                                <div class="position-absolute bottom-0" ><a class="mb-3 btn btn-modern rounded-0 " style=" color: <?php the_sub_field('button_label_col'); ?>; border: 1px solid <?php the_sub_field('button_bdr_col'); ?>; background: <?php the_sub_field('button_bg_color'); ?>;" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a></div>
                                                            
                                                        <?php endif; ?>
                                                </div>
                                            </div>
                                        </div>
                            <?php endwhile; ?>
                        <?php endif; ?>
                    </div>
                        <div class="bounce-loader">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
            </div>
        </div> <!--close container-->
<?php
endif;
?>    