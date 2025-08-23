<?php
$show = get_sub_field('show_hide');
$text = get_sub_field('text');
$theme = get_sub_field('theme_color');
$text_color = get_sub_field('text_color');
$animate = get_sub_field('animate');
if($show == 'show') :
?>
<div class="row my-3">
    <div class="col">
        <?php if($animate) : ?>
        <div class="anim-up-down-infinite appear-animation animated fadeIn appear-animation-visible" data-appear-animation="fadeIn" data-appear-animation-delay="0" style="animation-delay: 0ms;">
        <?php endif; ?>
            <div class="alert bg-<?php echo $theme; ?> text-<?php echo $text_color; ?>">
                <?php echo $text; ?>
            </div>
        <?php if($animate) : ?>
        </div>
         <?php endif; ?>
    </div>
</div>
<?php
endif;
?>