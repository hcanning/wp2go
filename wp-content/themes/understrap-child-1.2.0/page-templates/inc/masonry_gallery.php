<?php 
        $cats = get_sub_field('show_cats');
        $show = get_sub_field('show_hide');
        if($show == 'show') : 
                include get_stylesheet_directory() . '/page-templates/inc/advanced_gallery.php'; 
        endif;
?>  
        