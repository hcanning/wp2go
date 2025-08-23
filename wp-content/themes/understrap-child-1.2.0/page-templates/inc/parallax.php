<?php
$show = get_sub_field('show_hide');
$text = get_sub_field('text');
$image = get_sub_field('image');
if($show == 'show') :
?>
<section class="parallax section section-text-light section-parallax section-center" data-plugin-parallax data-plugin-options="{'speed': 1.5}" data-image-src="<?php echo esc_url($image['url']); ?>" aria-label="<?php echo esc_attr($image['alt']); ?>">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9 py-5 my-5">
                <?php echo $text; ?>
            </div>
        </div>
    </div>
</section>
<?php
endif;
?>