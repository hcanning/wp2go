<?php 
$show = get_sub_field('show_hide');
if($show == 'show') :
?> 
    <div class="row my-3">
        <div class="col p-5 text-<?php the_sub_field('text_theme_color');?> bg-<?php the_sub_field('theme_color');?> ">
             <?php the_sub_field('text');?>
        </div>
    </div>
<?php
endif;
?>