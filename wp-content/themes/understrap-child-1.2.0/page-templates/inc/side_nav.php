<?php 
$show = get_sub_field('show_hide');

if($show == 'show') :
?> 
<div class="row">
    <div class="col">
     <?php $child_sibling = get_sub_field('nav_type'); ?>
    <?php if( have_rows('side_nav_group') ): 
            while( have_rows('side_nav_group') ) : the_row();
            $type = get_sub_field('side_nav');
                if($child_sibling == "child") : 
                    $simple = '[custom_subpages ul_class="nav nav-list flex-column mb-2" li_class="nav-item" a_class="nav-link"]';
                    $dots = '[custom_subpages ul_class="nav nav-list flex-column mb-2 side_nav" li_class="nav-item" a_class="nav-link"]';
                    $bar = '[custom_subpages ul_class="custom-nav-list-effect-1 list list-unstyled mb-0" li_class="nav-item" a_class="nav-link"]';
                else :
                    $simple = '[custom_siblings ul_class="nav nav-list flex-column mb-2" li_class="nav-item" a_class="nav-link"]';
                    $dots = '[custom_siblings ul_class="nav nav-list flex-column mb-2 side_nav" li_class="nav-item" a_class="nav-link"]';
                    $bar = '[custom_siblings ul_class="custom-nav-list-effect-1 list list-unstyled mb-0" li_class="nav-item" a_class="nav-link"]';
                endif; 
                    if($type == 'simple') : 
                        echo do_shortcode( $simple ); 
                    elseif($type == 'dots') : 
                        echo do_shortcode( $dots ); 
                    else : 
                        echo do_shortcode( $bar ); 
                    endif; 
            endwhile; 
        endif; 
    ?>
    </div>
</div>
<?php
endif;
?>