<?php
$show = get_sub_field('show_hide');
if($show == 'show') :
?>
<div class="row my-3">

    <h4>Accordion</h4>

    <?php 
    $uid = uniqid();
    $style = get_sub_field('style');
    $width = get_sub_field('width');
    $col = get_sub_field('text_color');
    $theme = get_sub_field('theme_color');
    ?>

    <div class="accordion accordion-modern-status accordion-modern-status-borders accordion-modern-status-arrow my-3 w-lg-<?php echo $width ?>" id="accordion-<?php echo $uid; ?>">

         <?php if( have_rows('accordion_repeater') ): ?>
            <?php while( have_rows('accordion_repeater') ) : the_row();		
            $title = get_sub_field('title');
            $desc = get_sub_field('desc');
            $show = get_sub_field('open_closed');
            $index = get_row_index();
            ?>
            <div class="card card-default">
                <div class="card-header" id="ch-<?php echo $index; ?>_<?php echo $uid; ?>">
                    <h4 class="card-title <?php if($style == 'col') : echo 'bg-' . $theme; endif; ?> m-0">
                        <a class="accordion-toggle text-color-<?php echo $col; ?> font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#c-<?php echo $index; ?>_<?php echo $uid; ?>" aria-expanded="true" aria-controls="c-<?php echo $index; ?>_<?php echo $uid; ?>">
                            <?php echo $title; ?>
                        </a>
                    </h4>
                </div>
                <div id="c-<?php echo $index; ?>_<?php echo $uid; ?>" class="collapse <?php echo $show; ?>" aria-labelledby="ch-<?php echo $index; ?>_<?php echo $uid; ?>">
                    <div class="card-body">
                        <?php echo $desc; ?>
                    </div>
                </div>
            </div>
            <?php endwhile; ?>
    </div>
    <?php endif; ?>
</div>
<?php
endif;
?>