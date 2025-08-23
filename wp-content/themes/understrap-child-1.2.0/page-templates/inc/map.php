<?php
$show = get_sub_field('show_hide');
$api_key = get_sub_field('api_key');
$map_id = get_sub_field('map_id');
$lat = get_sub_field('map_lat');
$lng = get_sub_field('map_lng');


if($show == 'show') :

?>
<h4>Map TEST2</h4>
<div id="googlemaps" style="height:500px;"></div>

<script>
const API_KEY = "AIzaSyDtoiGz2p2qh_7Lk4taJGlD-3E9joug5lQ";
const MAP_ID = "53c47708ddd8c869552ea0ca";

// Dynamically load Google Maps script with API key
function loadGoogleMaps(callback) {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${callback}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

function initMap() {
    const map = new google.maps.Map(document.getElementById("googlemaps"), {
        zoom: 14,
        center: { lat: <?php echo $lat; ?>, lng: <?php echo $lng; ?> },
        mapId: MAP_ID, // use your custom Map ID
    });

    const markers = [

        <?php if( have_rows('map_marker_repeater') ): ?>
            <?php while( have_rows('map_marker_repeater') ) : the_row();
                $m_lat = get_sub_field('marker_lat');
                $m_lng = get_sub_field('marker_lng');
                $image = get_sub_field('info_window_image');
                $m_image = get_sub_field('marker_icon');
                $text = get_sub_field('text');
            ?>
        {
            position: { lat: <?php echo $m_lat; ?>, lng: <?php echo $m_lng; ?> },
            title: "Office 1",
            infoImage: "<?php echo esc_url($image['url']); ?>",
            description: "<?php echo $text; ?>",
            icon: "<?php echo esc_url($m_image['url']); ?>"
        },

            <?php endwhile; ?>
        <?php endif; ?>
        
    ];

    const infoWindow = new google.maps.InfoWindow();

    markers.forEach(({ position, title, infoImage, description, icon }) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title,
            icon: {
                url: icon,
                scaledSize: new google.maps.Size(40, 40)
            }
        });

        marker.addListener("click", () => {
            infoWindow.setContent(`
                <div style="text-align:center;">
                    <img src="${infoImage}" style="width:100%; max-width:250px; margin-bottom:5px;"/>
                    <h3 style="margin:5px 0;">${title}</h3>
                    <p style="margin:0;">${description}</p>
                </div>
            `);
            infoWindow.open(map, marker);
        });
    });
}

// Load Google Maps and call initMap as callback
loadGoogleMaps("initMap");
</script>
<?php
endif;
?>