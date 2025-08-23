<div class="col-md-<?php echo $layout_setting1; ?>">
	<?php the_sub_field('video_description'); ?>
</div>
<div class="col-md-<?php echo $layout_setting2; ?>">
<?php
	if( get_sub_field('video_source') == 'youtube' ) {  ?>
		<iframe width="100%" height="220" src="https://www.youtube.com/embed/<?php echo get_sub_field('video_id') . "?enablejsapi=1";?>" title="Fletcher Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	<?php
	}
	?> 

	<?php if( get_sub_field('video_source') == 'vimeo' ) {  ?>
		<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/<?php the_sub_field('video_id'); ?>?h=165d2cbf9d&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
	<?php
	
	}
	?>
</div>
