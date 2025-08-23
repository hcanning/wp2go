<?php
$show = get_sub_field('show_hide');
$theme = get_sub_field('theme_color');
if($show == 'show') :
?>
<div class="row my-2">
    <div class="col">
        <div class="divider divider-<?php echo $theme; ?>"> 
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
</div>
<?php
endif;
?>