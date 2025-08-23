<?php
$show = get_sub_field('show_hide');
if($show == 'show') :
?>
<div class="row my-3">
    <div class="col">

        <div class="process process-vertical py-4">

            <?php if( have_rows('process_repeater') ): ?>
                    <?php while( have_rows('process_repeater') ) : the_row();
                    $theme = get_sub_field('theme_color');
                    $text = get_sub_field('text');
                    $index = get_row_index();
                    $delay = $index * 150;
                    ?> 

                <div class="process-step appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="<?php echo $delay; ?>">
                    <div class="process-step-circle bg-<?php echo $theme; ?>">
                        <strong class="process-step-circle-content text-light"><?php echo $index ?></strong>
                    </div>
                    <div class="process-step-content">
                        <?php echo $text; ?>
                    </div>
                </div>

                <?php endwhile; ?>
            <?php endif; ?>
      
        </div>

    </div>
</div>
<?php
endif;
?>