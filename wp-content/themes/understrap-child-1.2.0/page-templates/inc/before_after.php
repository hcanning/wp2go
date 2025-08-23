<?php
$show = get_sub_field('show_hide');
$text = get_sub_field('text');
$before = get_sub_field('before_image');
$after = get_sub_field('after_image');
if($show == 'show') :
?>
<div class="row my-3">
    <div class="col">
        <div data-plugin-before-after data-plugin-options="{'move_slider_on_hover': true, 'move_with_handle_only': true, 'click_to_move': false}">
            <!-- The before image is first -->
            <img src="<?php echo esc_url($before['url']); ?>" alt="<?php echo esc_attr($before['alt']); ?>" />
            <!-- The after image is last -->
            <img src="<?php echo esc_url($after['url']); ?>" alt="<?php echo esc_attr($after['alt']); ?>" />
        </div>
    </div>
</div>
<?php
endif;
?>