<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hcann_wp310' );

/** Database username */
define( 'DB_USER', 'hcann_wp310' );

/** Database password */
define( 'DB_PASSWORD', 'YOURPASSWORD' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'wzyonhsq4349c0mdtqmtqzodk6pmewij8oq1seqewzbvc2lwos9l72bihrs1iss6' );
define( 'SECURE_AUTH_KEY',  'hjpueysv2kahx8jcj7hauuadnt1kb5oiiikyovwtj8an6m1itasttqapjjhpvw4k' );
define( 'LOGGED_IN_KEY',    '1uaefiruj5jl1f1g8giahxslmbbkx2cpwedtoz0ebplfstqlkawigsqmlnvinvm8' );
define( 'NONCE_KEY',        'pn92et3ocbujnsojdnbymlsya8eck2qamrkkc3bg0tbffbrhbeduwrgj7dofnsg0' );
define( 'AUTH_SALT',        '99u1om8ul0d1copglapdzzsq6g9nldfvillj3hblxept78xlc1gs0hrjgelvttdb' );
define( 'SECURE_AUTH_SALT', 'e2zcaqcqxzvqhlhrji9rp8qabprjq48ftdk5noi7gktgfrq2yvpdw1f4tnbjvvu8' );
define( 'LOGGED_IN_SALT',   'fvtbdijcbrkjjs38tquoehoqmdklccdlcq6mt6ya1mvkb8d1jktb9gp3lq4qkg3o' );
define( 'NONCE_SALT',       'qxahhzbgnpnvgdjppxs4ymdprwy49bdnk52my33qbhcxpxxrsyqyhkxvjivlrb8x' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

/* Multisite */
define( 'WP_ALLOW_MULTISITE', true );
define( 'MULTISITE', true );
define( 'SUBDOMAIN_INSTALL', false );
define( 'DOMAIN_CURRENT_SITE', 'portfolio-wp1.hcann.com' );
define( 'PATH_CURRENT_SITE', '/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Enables page caching for Cache Enabler. */
if ( ! defined( 'WP_CACHE' ) ) {
	define( 'WP_CACHE', true );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
