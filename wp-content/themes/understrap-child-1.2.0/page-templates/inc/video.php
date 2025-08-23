<?php
$video_position = get_sub_field('video_position');
$layout_setting1 = get_sub_field('layout_setting'); 
$layout_setting2 = abs(get_sub_field('layout_setting') - 12); 
$show = get_sub_field('show_hide');
if($show == 'show') :
?>
<div class="row">
    <div class="col">
    <?php if( have_rows('video_repeater') ):?>
        <?php $i=0 ; ?>
        <?php while ( have_rows('video_repeater') ) : the_row(); $i++;  ?>
            <div class="row my-3 py-3 border bg-white">
                <?php if( $video_position == 'alternate' ) : ?>
                    <?php if (($i % 2)==0 ): ?>
                    <!--don't use get_template_part..scope-->
                    <?php include get_stylesheet_directory() . '/page-templates/inc/video_layout1.php'; ?> 
                    <?php else: ?>
                    <?php include get_stylesheet_directory() . '/page-templates/inc/video_layout2.php'; ?>
                    <?php endif; ?>
                <?php endif; ?>
                <?php if( $video_position  == 'left' ) : ?>
                    <?php include get_stylesheet_directory() . '/page-templates/inc/video_layout1.php'; ?>
                <?php endif; ?>
                <?php if( $video_position == 'right' ) : ?>
                    <?php include get_stylesheet_directory() . '/page-templates/inc/video_layout2.php'; ?>
                <?php endif; ?>
            </div> <!--end row-->
        <?php endwhile; ?>
    <?php endif; ?>
    </div>
</div>
<?php
endif;
?>