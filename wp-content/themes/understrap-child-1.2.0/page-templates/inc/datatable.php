<?php
$show = get_sub_field('show_hide');
if($show == 'show') :
?>
<div class="row my-5">
    <?php if( have_rows('column_headings_repeater') ): ?>
        <?php $counter = 0;?>
        <table id="" class="display table table-striped nowrap">
            <thead>
                <tr>
            <?php while( have_rows('column_headings_repeater') ) : the_row(); ?>
                <?php $head = get_sub_field('col_head'); ?>
                <?php 
                if($head) : ?>
                <th><?php the_sub_field('col_head'); ?></th>
                <?php endif; ?>
                <?php $counter++; ?>
            <?php endwhile; ?>
                </tr>
            </thead>
                <tbody>
    <?php endif; ?>
        <?php if( have_rows('column_content_repeater') ): ?>
                <?php while( have_rows('column_content_repeater') ) : the_row(); ?>
                <tr>
                        <?php //only create the number of columns equivalent to number of column headings ?>
                        <?php for($i=1; $i <= $counter; $i++) {
                                echo "<td>" . get_sub_field('col_' . $i . 'c') . '</td>';
                        }?>
                </tr>
                <?php endwhile; ?>
        <?php endif; ?>
                </tbody>
    <?php if( have_rows('column_headings_repeater') ): ?>
            <tfoot>
                <tr>
                <?php while( have_rows('column_headings_repeater') ) : the_row(); ?>
                    <th><?php the_sub_field('col_head'); ?></th>
                <?php endwhile; ?>
                </tr>
            </tfoot>
        </table>
    <?php endif; ?>
</div>
<?php
endif;
?>