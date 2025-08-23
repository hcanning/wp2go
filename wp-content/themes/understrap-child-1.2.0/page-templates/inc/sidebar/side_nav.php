<div class="row">
    <div class="col">
     <?php $child_sibling = get_sub_field('nav_type'); ?>
    <?php if( have_rows('side_nav_group') ): 
            while( have_rows('side_nav_group') ) : the_row();
            $type = get_sub_field('side_nav');
                if($child_sibling == "child") : 
                    $simple = '[custom_subpages ul_class="nav nav-list flex-column mb-2" li_class="nav-item" a_class="nav-link"]';
                    $arrow_left = '[custom_subpages ul_class="nav nav-list flex-column mb-2 side_nav" li_class="nav-item" a_class="nav-link"]';
                    $arrow_right = '[custom_subpages ul_class="nav nav-list nav-list-arrows flex-column mb-0 mx-5" li_class="nav-item" a_class="nav-link"]';
                    $bar = '[custom_subpages ul_class="custom-nav-list-effect-1 list list-unstyled mb-0" li_class="nav-item" a_class="nav-link"]';
                else :
                    $simple = '[custom_siblings ul_class="nav nav-list flex-column mb-2" li_class="nav-item" a_class="nav-link"]';
                    $arrow_left = '[custom_siblings ul_class="nav nav-list flex-column mb-2 side_nav" li_class="nav-item" a_class="nav-link"]';
                    $arrow_right = '[custom_siblings ul_class="nav nav-list nav-list-arrows flex-column mb-0 mx-5" li_class="nav-item" a_class="nav-link"]';
                    $bar = '[custom_siblings ul_class="custom-nav-list-effect-1 list list-unstyled mb-0" li_class="nav-item" a_class="nav-link"]';
                endif;
                    if($type == 'simple') : 
                        echo do_shortcode( $simple ); 
                    elseif($type == 'arrow_left') : 
                        echo do_shortcode( $arrow_left ); 
                     elseif($type == 'arrow_right') : 
                        echo do_shortcode( $arrow_right ); 
                    else : 
                        echo do_shortcode( $bar );  
                    endif; 
            endwhile; 
        endif; 
    ?>
    </div>
</div>