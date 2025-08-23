<?php 
$show = get_sub_field('show_hide');
$vs = get_sub_field('vertical_space');
if($show == 'show') :
?>
<div class="row" style="height: <?php echo $vs; ?>px"></div> 
<?php
endif;
?>