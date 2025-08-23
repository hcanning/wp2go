<?php $shortcode = get_sub_field('shortcode'); 
$show = get_sub_field('show_hide');

if($show == 'show') :
?> 
<div class="row bg-white">
    <h2>Shortcodes</h2>
    <div class="col">
        <?php echo do_shortcode( $shortcode ); ?>
    </div>
</div> 
<?php
endif;
?>