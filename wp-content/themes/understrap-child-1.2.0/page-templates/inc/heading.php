<?php
$heading_size = get_sub_field('heading_size');
$heading = get_sub_field('heading');
$bold = get_sub_field('bold');
$align = get_sub_field('align');
$transform = get_sub_field('text_transform');
$margin = get_sub_field('vertical_heading_margin');
$show = get_sub_field('show_hide');
if($show == 'show') :
?>
<div class="row my-<?php echo $margin; ?>">
    <div class="col">
        <<?php echo $heading_size; ?> class="<?php echo $align; ?> <?php echo $transform; ?>">
            <?php
                if($bold) :
                echo '<strong class="font-weight-extra-bold">' . $heading . '</strong>';
                else :
                echo $heading;
                endif;
            ?>
        </<?php echo $heading_size; ?>>  
    </div>
</div>
<?php
endif;
?>