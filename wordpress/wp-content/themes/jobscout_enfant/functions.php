<?php
/**
** activation theme
**/
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
 wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
 
}






function custom_enqueue_scripts() { 
//Ajout des CSS style_sydEnfant
        wp_enqueue_style( 'custom', get_stylesheet_directory_uri() . '/style_sydEnfant.css', array(), NULL, NULL);
    
    //Ajout des JavaScript (appelés dans le footer)
        wp_enqueue_script('scripts', get_stylesheet_directory_uri() . '/scripts_sydEnfant.js', array( 'jquery' ),  NULL, true);
        
   
}
add_action('wp_enqueue_scripts', 'custom_enqueue_scripts', 101);





?>