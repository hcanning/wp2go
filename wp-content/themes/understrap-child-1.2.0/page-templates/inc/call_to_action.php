<?php
$show = get_sub_field('show_hide');
$text = get_sub_field('text');
$theme = get_sub_field('theme_color');
$link = get_sub_field('link');
$link_url = $link['url'];
$link_title = $link['title'];
$link_target = $link['target'] ? $link['target'] : '_self';

if($show == 'show') :
?>
    <section class="call-to-action call-to-action-<?php echo $theme; ?> mb-5">
        <div class="col-sm-9 col-lg-9">
            <div class="call-to-action-content">
                <?php echo $text; ?>
            </div>
        </div>
        <div class="col-sm-3 col-lg-3">
            <div class="call-to-action-btn">
                <a href="<?php echo $link_url; ?>" target="_blank" class="btn btn-modern text-2 btn-light border-0"><?php echo $link_title; ?></a>
            </div>
        </div>
    </section>
<?php
endif;
?>