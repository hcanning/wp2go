<?php 
$show = get_sub_field('show_hide');
if($show == 'show') :
?> 
    <div class="row">
        <div class="col">
             <?php the_sub_field('text');?>
        </div>
    </div>
<?php
endif;
?>