<?php
 
    // Add child theme javascripts to separate from parent
    add_action('init', 'add_javascript');
 
    function add_javascript() {
        // Add JQuery
        wp_enqueue_script('jquery');
 
        // Add the scripts
        $js_url = get_bloginfo('stylesheet_directory') . '/js';
/*        wp_enqueue_script('tinynav',"$js_url/tinynav.min.js");
*/      /*  wp_enqueue_script('fdyvideo',"$js_url/fdyvideo.js");*/
/*wp_enqueue_script('froogaloop',"$js_url/froogaloop2.min.js");
*/
    }
 
?>
