<?php
$cat_id = get_sub_field('id_category');
$show = get_sub_field('show_hide');

if($show == 'show') :

    if ($cat_id == 'cat') :
    get_template_part( 'page-templates/inc/cat_id' ); 
    endif;

    if ($cat_id == 'id') :
    get_template_part( 'page-templates/inc/post_id' );
    endif;

endif;

?>