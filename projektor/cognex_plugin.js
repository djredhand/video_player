 $(document).ready(function() {
        var CognexVideo = function(){
            this.create_player_elm = function(){
                var elm = $('<div id="cognex-player" class="projekktor"></div>');
                $('body').append(elm);
            },
            this.init_player = function(){
                projekktor('#cognex-player', {
                poster: 'media/intro.png',
                title: 'this is projekktor',
                playerFlashMP4: 'swf/StrobeMediaPlyback/StrobeMediaPlayback.swf',
                playerFlashMP3: 'swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
                width: 640,
                height: 385,
                playlist: [{
                            0: {src: "media/test1.ogv", type: "video/ogg"},
                            1: {src: "media/intro_.mp4", type: "video/mp4"},
                            2: {src: "media/intro.webm", type: "video/webm"}
                            }]    
                }, function(player) {
                    window.CognexPlayer = player;
                });
            },//end init_player 
            this.init = function(){
                //create the elements to hook into
                this.create_player_elm();
                // then init the player
                this.init_player();
            }
        }//end CognexVideo

        $.getScript( "http://localhost/cognex_video/projekktor-1.3.09.min.js" )
            .done(function( script, textStatus ) {
                if(console){
                    console.log( textStatus );        
                }
                player = new CognexVideo();
                player.init();
            })
            .fail(function( jqxhr, settings, exception ) {
                $( "div.log" ).text( "Triggered ajaxError handler." );
        });
    });//end doc.read