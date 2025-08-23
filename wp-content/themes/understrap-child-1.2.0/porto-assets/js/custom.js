// masonry
$('.change-filters-dropdown').on('change', function() {

var filterId = $(this).attr('data-sort-id'),
filter = this.value;

if (filter != '*') {
filter = '.' + filter;
}

$('.sort-source[data-sort-id="' + filterId + '"] li[data-option-value="' + filter + '"] a').trigger('click');

});

// YouTube

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var players = [];

function onYouTubeIframeAPIReady() {
    // Find all YouTube iframes
    var iframes = document.querySelectorAll('iframe[src*="https://www.youtube.com/"]');
    iframes.forEach(function(iframe, index) {
        // Assign a unique ID to each iframe if it doesn't have one
        if (!iframe.id) {
            iframe.id = 'youtube-iframe-' + index;
        }
        
        // Initialize YouTube player for each iframe
        var player = new YT.Player(iframe.id, {
            events: {
                'onStateChange': function(event) {
                    if (event.data === YT.PlayerState.PLAYING) {
                        // Pause all other playing videos
                        players.forEach(function(otherPlayer) {
                            if (otherPlayer !== event.target && otherPlayer.getPlayerState() === YT.PlayerState.PLAYING) {
                                otherPlayer.pauseVideo();
                            }
                        });
                    }
                },
                'onError': function(event) {
                    console.error('YouTube Player Error:', event.data);
                }
            }
        });
        players.push(player);
    });
}

//datatables
//$('#example').DataTable();



new DataTable('table.display', {
    scrollX: true
});

