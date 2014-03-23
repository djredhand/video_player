 $(document).ready(function() {
        var CognexVideo = function(){
            this.create_player_elm = function(){
                var elm = $('<div id="player-container"><div id="cognex-player" class="projekktor"></div></div>');
                var overlay = $('<div id="cognex-overlay"></div>');
                var winHeight = $(document).height();
                overlay.height(winHeight);
                $('body').append(overlay);
                overlay.append(elm);
            },
            this.create_playlist_nav = function(CognexPlayer){
               //console.log(CognexPlayer);
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
                            0: {src: "media/test1.ogv", type: "video/ogg", title: 'test1'},
                            1: {src: "media/intro_.mp4", type: "video/mp4", title: 'test1'},
                            2: {src: "media/intro.webm", type: "video/webm", title: 'test1'}
                            },
                            {
                            0: {src: "media/test1.ogv", type: "video/ogg", title: 'test2'},
                            1: {src: "media/intro_.mp4", type: "video/mp4", title: 'test2'},
                            2: {src: "media/intro.webm", type: "video/webm", title: 'test2'}
                            },
                            {
                            0: {src: "media/test1.ogv", type: "video/ogg", title: 'test3'},
                            1: {src: "media/intro_.mp4", type: "video/mp4", title: 'test3'},
                            2: {src: "media/intro.webm", type: "video/webm", title: 'test3'}
                            },
                            {
                            0: {src: "media/test1.ogv", type: "video/ogg", title: 'test4'},
                            1: {src: "media/intro_.mp4", type: "video/mp4", title: 'test4'},
                            2: {src: "media/intro.webm", type: "video/webm", title: 'test4'}
                            },
                            {
                            0: {src: "media/test1.ogv", type: "video/ogg", title: 'test5'},
                            1: {src: "media/intro_.mp4", type: "video/mp4", title: 'test5'},
                            2: {src: "media/intro.webm", type: "video/webm", title: 'test5'}
                            }]    
                }, function(player) {
                    window.CognexPlayer = player;
                    player_decoration(CognexPlayer);
                });
            },//endinit_player 
            this.init = function(){
                //create the elements to hook into
                this.create_player_elm();
                // then init the player
                this.init_player();
                this.create_playlist_nav(this);
            }
        }//end CognexVideo

        var player_decoration = function(player){
            this.add_navigation = function(player){
                var config = player.config;
                var player_container = $('#player-container');
                var nav = $('<ul id="cog-nav"></ul').appendTo(player_container);
                $(config._playlist).each(function(index){
                    var list_item = $('<li class="cog-nav-item">'+ this[0].title +'</li>');
                    nav.append(list_item);
                    list_item.click(function(){
                        $('.cog-nav-item').removeClass('active-item');
                        $(this).addClass('active-item');
                        CognexPlayer.setActiveItem(index)
                    })
                    //set the first item to active
                    $('.cog-nav-item').eq(0).addClass('active-item');
                })    
            },
            this.eventListeners = function(){
                var ApiTest =  function(data) {
                    if(data=="PLAYING"){
                        var video_index = CognexPlayer.getItemIdx();
                        $('.cog-nav-item').removeClass('active-item');
                        $('.cog-nav-item').eq(video_index).addClass('active-item');

                    }
                };
                player.addListener('*',ApiTest );
            }
            this.init = function(){
                this.add_navigation(player);
                this.eventListeners()
            }

            this.init();
        }

        $.getScript( "http://localhost/cognex_video/projektor/projekktor-1.3.09.min.js" )
            .done(function( script, textStatus ) {
                $('head').append('<link rel="stylesheet" href="themes/maccaco/projekktor.style.css" type="text/css" media="screen">');
                $('head').append('<link rel="stylesheet" href="cognex_player_style.css" type="text/css" media="screen">');
                if(console){
                    console.log( textStatus );        
                }
                player = new CognexVideo();
                player.init();
                
                //create_playlist_nav(player);
            })
            .fail(function( jqxhr, settings, exception ) {
                if(console){
                    console.log("load fail");        
                }
        });//end getScript

        /*
        * Decorate player with nav and event listeners
        */

        

        
    });//end doc.read