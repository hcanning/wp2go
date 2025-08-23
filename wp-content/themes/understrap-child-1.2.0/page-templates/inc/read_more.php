<?php
$show = get_sub_field('show_hide');
$text = get_sub_field('text');
if($show == 'show') :
?> 
<div class="row mt-3 mb-5">
    <div class="col mb-5 mb-lg-0">
        <div data-plugin-readmore 
            data-plugin-options="{
                'buttonOpenLabel': 'Read More <i class=\'fas fa-chevron-down text-2 ms-1\'></i>',
                'buttonCloseLabel': 'Read Less <i class=\'fas fa-chevron-up text-2 ms-1\'></i>'
            }">
           <?php echo $text; ?>
            <div class="readmore-button-wrapper d-none">
                <a href="#" class="text-decoration-none">
                    <i class="fas fa-chevron-down"></i>
                </a>
            </div>
        </div>
    </div>
</div>
<?php 
endif;
?>