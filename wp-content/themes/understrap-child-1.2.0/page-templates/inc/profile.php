<?php
$profile_pos = get_sub_field('alternate');
$show = get_sub_field('show_hide');

if($show == 'show') :
?>
<h2>Profiles</h2>
<div class="container py-0 my-0">
        <?php if( have_rows('profile_repeater') ):?>
            <?php $i = 0 ; ?>
            <?php while ( have_rows('profile_repeater') ) : the_row(); $i++; ?>
                <div class="row mb-3 py-3 border bg-white">
                <?php if ($profile_pos == 'alternate' ): ?>
                    <?php if ($i % 2 == 0 ): ?>
                    <?php get_template_part( 'page-templates/inc/profile-display1' ); ?>
                    <?php else: ?>
                    <?php get_template_part( 'page-templates/inc/profile-display2' ); ?>
                    <?php endif; ?>
                <?php endif; ?>
                <?php if ($profile_pos == 'left' ): ?>
                    <?php get_template_part( 'page-templates/inc/profile-display2' ); ?>
                <?php endif; ?>
                <?php if ($profile_pos == 'right' ): ?>
                    <?php get_template_part( 'page-templates/inc/profile-display1' ); ?>
                <?php endif; ?>
                </div> <!--end row-->
            <?php endwhile; ?>
        <?php endif; ?>
</div>    
<?php
endif;
?>                 