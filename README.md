# wp2go
WordPress for Unis 

Video Walkthrough: https://u.pcloud.link/publink/show?code=wKA

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
