<?php
$show = get_sub_field('show_hide');
if($show == 'show') :
?>
<div class="row my-3">
    <h2><?php the_sub_field('heading'); ?></h2>
    
    <div class="col-lg-6 <?php if( get_sub_field('swap_position') == 'text'): ?>order-lg-2<?php endif;?>">
    <?php
        $select_chart = get_sub_field('select_chart');
    if ($select_chart === 'pie'):
            get_template_part('page-templates/inc/chart1');
        elseif ($select_chart === 'line'):
            get_template_part('page-templates/inc/chart2');
        elseif ($select_chart === 'bar'):
            get_template_part('page-templates/inc/chart3');
        else:
            echo 'pick chartq' . $select_chart;
        endif;
    ?>
    </div>
    <div class="col-lg-6">
        <?php the_sub_field('text'); ?>
    </div>
</div>
<?php
endif;
?>