<?php $bg = get_sub_field('bg_color');
      $rem = get_sub_field('rem_bg');
      $button_color = get_sub_field('button_color');
 ?>

<?php if (!$rem) : ?>
<div class="mb-3 bg-<?php echo $bg ?>">
<?php endif; ?>
    <div class="border border-1 p-3 my-3 <?php the_sub_field('text_color'); ?>">
        <?php if( have_rows('button_repeater') ):?>
            <?php while ( have_rows('button_repeater') ) : the_row();?>
            <?php 
                $link_gr = get_sub_field('link');
                if( $link_gr ): 
                    $link_gr_url = $link_gr['url'];
                    $link_gr_title = $link_gr['title'];
                    $link_gr_target = $link_gr['target'] ? $link_gr['target'] : '_self';
                    ?>
                    <?php if( get_sub_field('button_heading_group') ) : ?>
                    <h4 class="mb-2" style="color: <?php the_sub_field('heading_color'); ?>"><?php the_sub_field('button_heading_group'); ?></h4>
                    <?php endif; ?>

                    <?php if( get_sub_field('text') ) : ?>
                    <?php the_sub_field('text'); ?>
                    <?php endif; ?>

                     <a class="btn btn-<?php echo $button_color; ?> w-100 my-2" href="<?php echo esc_url( $link_gr_url ); ?>" role="button"><?php echo esc_html( $link_gr_title ); ?></a>
              
                <?php endif; ?>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
<?php if (!$rem) : ?>
</div>
<?php endif; ?>	