<?php 
$show = get_sub_field('show_hide');
$title = get_sub_field('title');
$text = get_sub_field('text');
$theme = get_sub_field('theme_color');
$text_color = get_sub_field('text_color');
if($show == 'show') :
?> 
<div class="row">
    <div class="col">
        <div class="toggle toggle-<?php echo $theme; ?>" data-plugin-toggle>
            <section class="toggle">
                <a class="toggle-title bg-<?php echo $theme; ?> text-<?php echo $text_color; ?>"><?php echo $title; ?></a>
                <div class="toggle-content">
                    <?php echo $text; ?>
                </div>
            </section>
        </div>
    </div>
</div>
<?php
endif;
?>