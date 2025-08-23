<?php 
$show = get_sub_field('show_hide');
$theme = get_sub_field('theme_color');
$tab_orient = get_sub_field('tab_orientation');
if($show == 'show') :
?> 
<div class = "row">
    <div class = "col">
            <?php if($tab_orient == 'vertical') : ?>
            <div class="tabs tabs-<?php echo $theme; ?> tabs-vertical tabs-left">
            <?php elseif($tab_orient == 'horizontal2') : ?>	
            <div class="tabs tabs-<?php echo $theme; ?> tabs-bottom tabs-center tabs-simple"> 
            <?php else : ?>	
            <div class="tabs tabs-<?php echo $theme; ?>">    
            <?php endif; ?>	
            <ul class="nav nav-tabs">

                <?php if( have_rows('tab_repeater') ): ?>
                    <?php while( have_rows('tab_repeater') ) : the_row(); 
                        $title = get_sub_field('title');
                        $text = get_sub_field('text');
                        $index = get_row_index();
                    ?>
                        <li class="nav-item"><a class="nav-link <?php if($index == '1') :?>active<?php endif; ?>" href="#tab_<?php echo $index; ?>" data-bs-toggle="tab"><?php echo $title; ?></a></li>
                    <?php endwhile; ?>
                <?php endif; ?>

            </ul>
            <div class="tab-content">

                <?php if( have_rows('tab_repeater') ): ?>
                <?php while( have_rows('tab_repeater') ) : the_row(); 
                        $title = get_sub_field('title');
                        $text = get_sub_field('text');
                        $index = get_row_index();
                    ?>
                
                <div id="tab_<?php echo $index; ?>" class="tab-pane <?php if($index == '1') :?>active<?php endif; ?>">
                    <?php echo $text; ?>
                </div>

                    <?php endwhile; ?>
                <?php endif; ?>
                
            </div>
            </div>
    </div>
</div>                
<?php
endif;
?>