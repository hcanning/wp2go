
<?php 
$image = get_sub_field('image');
$text = get_sub_field('text');
$theme = get_sub_field('theme_color');
$link = get_sub_field('link');
//ACF bug - $link_target breaks home template, You can omit $link_target...
if( $link ): 
    $link_url = $link['url'];
    $link_title = $link['title'];
    $link_target = $link['target'] ? $link['target'] : '_self';
endif;
?>



<div class="card">
<img class="card-img-top" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>">
<div class="card-body">
	<?php echo $text; ?>
	<a href="<?php echo esc_url( $link_url ); ?>" class="btn btn-<?php echo $theme; ?> btn-rounded btn-with-arrow-solid mb-2 w-100 "><?php echo esc_html( $link_title ); ?><span><i class="fas fa-chevron-right"></i></span></a>
</div>
</div>