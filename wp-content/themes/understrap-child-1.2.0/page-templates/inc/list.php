<?php
$show = get_sub_field('show_hide');
$style = get_sub_field('style');
$theme = get_sub_field('theme_color');
if($show == 'show') :
?> 
    <div class="row my-3">
        <div class="col">
            <ul class="list list-icons <?php echo $style; ?> list-<?php echo $theme; ?>">
                    <?php if( have_rows('list_repeater') ): ?>
                        <?php while( have_rows('list_repeater') ) : the_row(); 
                        $text = get_sub_field('text');
                        ?>
                        
                <li><i class="fas fa-check"></i> <?php echo $text; ?></li>
                        <?php endwhile; ?>
                    <?php endif; ?>
            </ul>
        </div>
    </div>
<?php
endif;
?>