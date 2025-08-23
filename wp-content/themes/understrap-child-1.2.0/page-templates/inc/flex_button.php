<?php
$show = get_sub_field('show_hide');
if($show == 'show') :
?>
<div class="row my-5"> 
         <div class="d-flex <?php the_sub_field('flex_position'); ?> flex-column flex-md-row">
            <?php if( have_rows('flex_button_repeater') ): ?>
                <?php while( have_rows('flex_button_repeater') ) : the_row();?>
                <?php 
                $theme = get_sub_field('theme_color'); 
                $link = get_sub_field('link'); 
                $link_url = $link['url'];
                $link_title = $link['title'];
                $link_target = $link['target'] ? $link['target'] : '_self';
                ?>
                <a href="<?php echo $link_url; ?>" class="btn btn-<?php echo $theme; ?> rounded-0 btn-rounded mb-2"><?php echo $link_title; ?></a>
                <?php endwhile; ?>
            <?php endif; ?>
         </div>
</div>
<?php
endif;
?>