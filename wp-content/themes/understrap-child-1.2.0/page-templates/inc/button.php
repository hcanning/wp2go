<?php
$show = get_sub_field('show_hide');
$theme = get_sub_field('theme_color');
$link = get_sub_field('link');
$link_url = $link['url'];
$link_title = $link['title'];
$link_target = $link['target'] ? $link['target'] : '_self';
if($show == 'show') :
?>
<div class="row">
    <div class="col">
        <a href="<?php echo esc_url( $link_url ); ?>" class="btn btn-<?php echo ( $theme ); ?> rounded-0 mb-2"><?php echo $link_title; ?></a>
    </div>
</div>
<?php
endif;
?>