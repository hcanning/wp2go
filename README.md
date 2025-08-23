# wp2go
WordPress for Unis 

Demo Page:
https://portfolio-wp1.hcann.com/

Base Theme: Understrap with Child Theme - https://github.com/understrap/understrap-child - Bootstrap 5 enabled

Video Walkthrough: https://u.pcloud.link/publink/show?code=XZt6ns5ZLvoo90Nu6LzDksvo8bd6C8WDEs6V

See all the component code at: [wp-content/themes/understrap-child-1.2.0/page-templates/inc](https://github.com/hcanning/wp2go/tree/main/wp-content/themes/understrap-child-1.2.0/page-templates/inc)

Universal template code: [wp-content/themes/understrap-child-1.2.0/page-templates/universal.php](https://github.com/hcanning/wp2go/blob/main/wp-content/themes/understrap-child-1.2.0/page-templates/universal.php)

## Considerations

1. Create a dashboard experience that's uncomplicated and allows editors to add feature rich components with ease and flexibility
2. Leverage Advanced Custom Fields - ACF Pro -  (https://www.advancedcustomfields.com/pro/) to minimize reliance on plugins like Elementor, WP Bakery etc... and maintain brand and theme integrity.
3. Provide 40+ components from a well documented Bootstrap 5 compatible theme for developers to reference and expand upon. See https://www.okler.net/previews/porto/12.1.0/elements.html (go buy it => \$10-20) and https://getbootstrap.com/docs/5.2/components/accordion/ . You don't want developers spending hours trying to decrypt abstract BEM code - https://en.bem.info/methodology/html/ - and CSS while on the clock.
4. Create a universal template that allows users to easily configure, duplicate and drag n drop components.
5. Create a self contained universal template that allows users to assign columns/sidebars and show/hide content on demand so that they don't have to delete and re-add components. Remove need for choosing other templates from dropdowns in Edit page. 
6. Minimize reliance on 3rd party content plugins like sliders, tables etc... and have the universal template coded to deliver all the functionality instead. 
7. Minimize reliance on 3rd party plugins such that updating/upgrading WordPress doesn't become an issue due to deprecated plugins.
8. Minimize sales nag screens in WP dashboard
9. Add a self contained newsletter plugin for marketing purposes to capture user interest.
10. Consider hosting on WPEngine to avail of CDN, caching and optimized environment. Alternatively try pantheon.io.


Featured files:

## functions.php

```
<?php
/**
 * Understrap Child Theme functions and definitions
 *
 * @package UnderstrapChild
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Remove parent theme's default styles and scripts
 */
function understrap_remove_scripts() {
    wp_dequeue_style( 'understrap-styles' );
    wp_deregister_style( 'understrap-styles' );

    wp_dequeue_script( 'understrap-scripts' );
    wp_deregister_script( 'understrap-scripts' );

    // Deregister jQuery and jQuery Migrate
    wp_dequeue_script( 'jquery' );
    wp_deregister_script( 'jquery' );
    wp_dequeue_script( 'jquery-migrate' );
    wp_deregister_script( 'jquery-migrate' );
}
add_action( 'wp_enqueue_scripts', 'understrap_remove_scripts', 20 );

/**
 * Enqueue child theme CSS first, then Porto CSS/JS
 */
function theme_enqueue_styles() {
    $the_theme = wp_get_theme();

    // 1️⃣ Child theme CSS — loads first
    wp_enqueue_style(
        'child-understrap-styles',
        get_stylesheet_directory_uri() . '/css/child-theme.css',
        array(),
        $the_theme->get('Version'),
        'all'
    );

    // 2️⃣ Porto CSS (without .min, remove skin CSS)
    $porto_css = array(
        'porto-fontawesome-styles'    => '/porto-assets/vendor/fontawesome-free/css/all.min.css',
        'porto-animate-styles'        => '/porto-assets/vendor/animate/animate.compat.css',
        'porto-simple-line-styles'    => '/porto-assets/vendor/simple-line-icons/css/simple-line-icons.min.css',
        'porto-owl-carousel-styles'   => '/porto-assets/vendor/owl.carousel/assets/owl.carousel.min.css',
        'porto-owl-theme-styles'      => '/porto-assets/vendor/owl.carousel/assets/owl.theme.default.min.css',
        'porto-magnific-popup-styles' => '/porto-assets/vendor/magnific-popup/magnific-popup.min.css',
        'porto-datatable-styles'      => '/porto-assets/vendor/datatable/datatable.min.css',
        'porto-theme-styles'          => '/porto-assets/css/theme.css',
        'porto-theme-elements-styles' => '/porto-assets/css/theme-elements.css',
        'porto-theme-blog-styles'     => '/porto-assets/css/theme-blog.css',
        'porto-theme-shop-styles'     => '/porto-assets/css/theme-shop.css',
        'porto-custom-styles'         => '/porto-assets/css/custom.css',
        'twentytwenty-styles'         => '/porto-assets/vendor/twentytwenty/css/twentytwenty.css',
    );

    $deps = array('child-understrap-styles');
    foreach ($porto_css as $handle => $path) {
        wp_enqueue_style(
            $handle,
            get_stylesheet_directory_uri() . $path,
            $deps,
            $the_theme->get('Version')
        );
        $deps[] = $handle; // next style depends on all previous
    }

    // 3️⃣ Porto JS
    $porto_js = array(
        'porto-plugins-scripts'     => '/porto-assets/vendor/plugins/js/plugins.js',
        'twentytwenty-move-scripts' => '/porto-assets/vendor/twentytwenty/js/jquery.event.move.js',
        'twentytwenty-scripts'      => '/porto-assets/vendor/twentytwenty/js/jquery.twentytwenty.js',
        'porto-theme-scripts'       => '/porto-assets/js/theme.js',
        'porto-flipshow-scripts'    => '/porto-assets/vendor/circle-flip-slideshow/js/jquery.flipshow.min.js',
        'porto-view-home-scripts'   => '/porto-assets/js/views/view.home.js',
        'porto-echarts-scripts'     => '/porto-assets/vendor/apache-charts/echarts.min.js',
        'porto-datatable-scripts'   => '/porto-assets/vendor/datatable/datatable.min.js',
        'porto-custom-scripts'      => '/porto-assets/js/custom.js',
        'porto-theme-init-scripts'  => '/porto-assets/js/theme.init.js',
    );

    $deps = array();
    foreach ($porto_js as $handle => $path) {
        wp_enqueue_script(
            $handle,
            get_stylesheet_directory_uri() . $path,
            $deps,
            $the_theme->get('Version'),
            true
        );
        $deps[] = $handle; // next script depends on all previous
    }

    // Comment reply
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles', 5 ); // priority 5 → first

/**
 * Load child theme text domain
 */
function add_child_theme_textdomain() {
    load_child_theme_textdomain( 'understrap-child', get_stylesheet_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'add_child_theme_textdomain' );

/**
 * Default to Bootstrap 5
 */
function understrap_default_bootstrap_version() {
    return 'bootstrap5';
}
add_filter( 'theme_mod_understrap_bootstrap_version', 'understrap_default_bootstrap_version', 20 );

/**
 * Customize controls JS
 */
function understrap_child_customize_controls_js() {
    wp_enqueue_script(
        'understrap_child_customizer',
        get_stylesheet_directory_uri() . '/js/customizer-controls.js',
        array( 'customize-preview' ),
        '20130508',
        true
    );
}
add_action( 'customize_controls_enqueue_scripts', 'understrap_child_customize_controls_js' );

/**
 * Add headings to basic WYSIWYG
 */
add_filter('acf/fields/wysiwyg/toolbars', function($toolbars) {
    if (isset($toolbars['Basic'][1])) {
        array_unshift($toolbars['Basic'][1], 'formatselect');
    }
    return $toolbars;
});

add_filter('tiny_mce_before_init', function($init, $editor_id) {
    $init['block_formats'] = 'Paragraph=p; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6';
    if (strpos($editor_id, 'acf') !== false) {
        $init['height'] = 100;
    }
    return $init;
}, 10, 2);

/**
 * Color picker presets
 */
function my_acf_color_picker() { ?>
<script type="text/javascript">
(function($) {
    acf.add_filter('color_picker_args', function(args, $field) {
        args.palettes = ['#1A3C5A', '#8B1E3F', '#D4A017', '#c91732', '#E8ECEF', '#FFF', '#333'];
        return args;
    });
})(jQuery);
</script>
<?php }
add_action('acf/input/admin_footer', 'my_acf_color_picker');

/**
 * ACF swatch field styles
 */
add_action('acf/input/admin_footer', function() { ?>
<style>
.acf-swatch-field .acf-radio-list-wrapper {
    display: flex; align-items:center; gap:16px;
}
.acf-swatch-field .acf-radio-list { display:flex; flex-wrap:wrap; gap:8px; margin:0; padding:0; list-style:none; }
.acf-swatch-field .acf-radio-list li { display:inline-flex; margin:0; padding:0; }
.acf-swatch-field .acf-radio-list input[type="radio"] { display:none; }
.acf-swatch-field .acf-radio-list label {
    display:block; width:32px; height:32px; border-radius:50%;
    border:1px solid #dedede; cursor:pointer; text-indent:-9999px;
    overflow:hidden; box-sizing:border-box;
}
.acf-swatch-field .selected-color {
    display:inline-flex; align-items:center; gap:6px; font-weight:bold; font-size:13px;
}
.acf-swatch-field .selected-color .swatch {
    width:20px; height:20px; border-radius:50%; border:1px solid #dedede; display:inline-block;
}
</style>

<script>
(function($){
acf.add_action('ready append', function($el){
    $('.acf-swatch-field', $el).each(function(){
        var $field = $(this);
        var $radioList = $field.find('.acf-radio-list');
        if(!$field.find('.acf-radio-list-wrapper').length){
            $radioList.wrap('<div class="acf-radio-list-wrapper"></div>');
        }
        if(!$field.find('.selected-color').length){
            $field.find('.acf-radio-list-wrapper')
                  .append('<div class="selected-color">Selected Color: <span class="swatch"></span></div>');
        }
        var $selected = $field.find('.selected-color .swatch');
        $radioList.find('li').each(function(){
            var $li = $(this);
            var $input = $li.find('input[type="radio"]');
            var $label = $li.find('label');
            var val = $input.val() ? $input.val().trim() : '';
            if(!val) return;
            $label.css('background-color', val);
            if($input.is(':checked')) $selected.css('background-color', val);
            $input.off('change.swatch').on('change.swatch', function(){
                var selectedVal = $radioList.find('input:checked').val();
                if(selectedVal) $selected.css('background-color', selectedVal.trim());
                else $selected.css('background-color', 'transparent');
            });
        });
    });
});
})(jQuery);
</script>
<?php });


function custom_pagelist_recursive( $parent_id, $li_class, $a_class ) {
    $pages = get_pages( [
        'sort_column' => 'menu_order',
        'sort_order'  => 'ASC',
        'parent'      => $parent_id,
    ] );

    if ( ! $pages ) {
        return '';
    }

    $output = '';
    foreach ( $pages as $page ) {
        $output .= '<li class="' . esc_attr( $li_class ) . '">';
        $output .= '<a class="' . esc_attr( $a_class ) . '" href="' . get_permalink( $page->ID ) . '">' . esc_html( $page->post_title ) . '</a>';
        $output .= custom_pagelist_recursive( $page->ID, $li_class, $a_class );
        $output .= '</li>';
    }
    $output .= '</ul>';

    return $output;
}

/**
 * [custom_pagelist] – All pages from root
 */
function custom_pagelist_shortcode( $atts ) {
    $atts = shortcode_atts( [
        'ul_class' => '',
        'li_class' => '',
        'a_class'  => '',
    ], $atts, 'custom_pagelist' );

    // Top-level pages only
    $pages = get_pages( [
        'sort_column' => 'menu_order',
        'sort_order'  => 'ASC',
        'parent'      => 0,
    ] );

    if ( ! $pages ) {
        return '';
    }

    $output = '<ul class="' . esc_attr( $atts['ul_class'] ) . '">';
    foreach ( $pages as $page ) {
        $output .= '<li class="' . esc_attr( $atts['li_class'] ) . '">';
        $output .= '<a class="' . esc_attr( $atts['a_class'] ) . '" href="' . get_permalink( $page->ID ) . '">' . esc_html( $page->post_title ) . '</a>';
        $output .= custom_pagelist_recursive( $page->ID, $atts['li_class'], $atts['a_class'] );
        $output .= '</li>';
    }
    $output .= '</ul>';

    return $output;
}
add_shortcode( 'custom_pagelist', 'custom_pagelist_shortcode' );

/**
 * [custom_subpages] – Children of current page
 */
function custom_subpages_shortcode( $atts ) {
    global $post;

    $atts = shortcode_atts( [
        'ul_class' => '',
        'li_class' => '',
        'a_class'  => '',
    ], $atts, 'custom_subpages' );

    if ( ! $post ) {
        return '';
    }

    return custom_pagelist_recursive( $post->ID, $atts['li_class'], $atts['a_class'] );
}
add_shortcode( 'custom_subpages', 'custom_subpages_shortcode' );

/**
 * [custom_siblings] – Pages that share the same parent as the current page
 */
function custom_siblings_shortcode( $atts ) {
    global $post;

    $atts = shortcode_atts( [
        'ul_class' => '',
        'li_class' => '',
        'a_class'  => '',
    ], $atts, 'custom_siblings' );

    if ( ! $post ) {
        return '';
    }

    $parent_id = $post->post_parent ?: 0;

    $pages = get_pages( [
        'sort_column' => 'menu_order',
        'sort_order'  => 'ASC',
        'parent'      => $parent_id,
    ] );

    if ( ! $pages ) {
        return '';
    }

    $output = '<ul class="' . esc_attr( $atts['ul_class'] ) . '">';
    foreach ( $pages as $page ) {
        $output .= '<li class="' . esc_attr( $atts['li_class'] ) . '">';
        $output .= '<a class="' . esc_attr( $atts['a_class'] ) . '" href="' . get_permalink( $page->ID ) . '">' . esc_html( $page->post_title ) . '</a>';
        $output .= '</li>';
    }
    $output .= '</ul>';

    return $output;
}
add_shortcode( 'custom_siblings', 'custom_siblings_shortcode' );


// [custom_pagelist ul_class="nav nav-list flex-column mb-2" li_class="nav-item" a_class="nav-link"] 
// [custom_subpages ul_class="nav nav-list flex-column mb-2" li_class="nav-item" a_class="nav-link"]
// [custom_siblings ul_class="nav nav-list flex-column mb-2" li_class="nav-item" a_class="nav-link"]
// [custom_*] will declare the classes as per function. Set classes in function blank for shortcode to set the classes.

add_filter( 'acf/fields/wysiwyg/toolbars' , 'my_custom_table_editor_toolbars' );
/**
 * Customizes the WYSIWYG toolbars available in ACF fields.
 *
 * This function defines a new toolbar named "Table Editor" with specific
 * formatting, table-related, and alignment buttons.
 *
 * @param array $toolbars The array of existing toolbars. 
 * @return array The modified array of toolbars.
 */
function my_custom_table_editor_toolbars( $toolbars ) {

    // Define the Table Editor toolbar with all the requested buttons
    // The WYSIWYG editor's toolbars can have up to 4 rows of buttons.

    // Row 1: Basic formatting, links, and text formatting options
    $toolbars['Table Editor'][1] = array(
        'bold',            // Bold text
        'italic',          // Italic text
        'link',            // Insert/Edit Link
        'unlink',          // Remove Link
        'strikethrough',   // Strikethrough text
        'bullist',         // Bulleted List
        'numlist',         // Numbered List
        'blockquote',      // Block Quote
        'alignleft',       // Align Left
        'aligncenter',     // Align Center
        'alignright',      // Align Right
        'alignjustify',    // Justify Text
        'styleselect',     // Styles dropdown (for custom classes)
        'formatselect',    // Format select (for headings like h1-h6)
    );

    // Row 2: Table creation and manipulation buttons
    $toolbars['Table Editor'][2] = array(
        'table',           // Insert/Edit Table
        'tabledelete',     // Delete Table
        'tableprops',      // Table Properties
        'tablerowprops',   // Table Row Properties
        'tablecellprops',  // Table Cell Properties
        'insertrowbefore', // Insert Row Before
        'insertrowafter',  // Insert Row After
        'deleterow',       // Delete Row
        'insertcolbefore', // Insert Column Before
        'insertcolafter',  // Insert Column After
        'deletecol',       // Delete Column
        'mergecells',      // Merge Table Cells
        'splitcells'       // Split Table Cells
    );

    // Return the updated toolbars array to ACF
    return $toolbars;
}

```