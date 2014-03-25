
        var CognexVideo = function(){
            this.create_player_elm = function(template){
                var left_col_header = $('<div class="cog-col-header">INTERACTIVE TOOL KIT</div>');
                var left_column = $('<div class="cog-left-col"></div>');
                var right_column  = $('<div class="cog-right-col"></div>');
                var player_container = $('<div id="player-container"></div>');
                var player = $('<div id="cognex-player" class="projekktor"></div>');
                var close_button = $('<div class="cog-vid-close-btn">X</div>')
                var overlay = $('<div id="cognex-overlay"></div>');
                var winHeight = $(document).height();
                
                overlay.height(winHeight);
                $('body').append(overlay);
                left_column.append(left_col_header);
                overlay.append(close_button, player_container);
                player_container.append(left_column,right_column);
                player.append(template)
                right_column.append(player);
                

                $('.cog-vid-close-btn').click(function(){
                    overlay.remove();
                })
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
                controls: true,            // controls are disabled (inactive) if set to FALSE
                autoplay: false,
                playlist: [{
                            0: {src: "media/test1.ogv", type: "video/ogg", title: 'dsadsa'},
                            1: {src: "media/intro_.mp4", type: "video/mp4", title: 'test1'},
                            2: {src: "media/intro.webm", type: "video/webm", title: 'test1'}
                            },
                            {
                            0: {src: "media/test1.ogv", type: "video/ogg", title: 'dsadsa'},
                            1: {src: "media/intro_.mp4", type: "video/mp4", title: 'test2'},
                            2: {src: "media/intro.webm", type: "video/webm", title: 'test2'}
                            },
                            {
                            0: {src: "media/test1.ogv", type: "video/ogg", title: 'testsdadsa3'},
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
                that = this;
                var template = $.get('template.html', function(data){
                        //create the elements to hook into
                        that.create_player_elm(data);
                        // then init the player
                        that.init_player();
                        that.create_playlist_nav(that);
                    });
                
            }
        }//end CognexVideo

        var player_decoration = function(player){
            this.add_navigation = function(player){
                var config = player.config;
                var left_column = $('.cog-left-col');
                var nav = $('<ul id="cog-nav"></ul').appendTo(left_column);
                $(config._playlist).each(function(index){
                    var num = index + 1;
                    if(num<10){
                        num = '0' + num;
                    }
                    var list_item = $('<li class="cog-nav-item"><div class="cog-item-title"><span>'+num+' </span>'+ this[0].title +'</div></li>');
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
            //IE bug with navigation being created again after end of last video. 
            if($("#cog-nav").length==0){ 
                this.init();
            }
        }

        $.getScript( "http://localhost/cognex_video/projektor/projekktor-1.3.09.min.js" )
            .done(function( script, textStatus ) {
                $('head').append('<link rel="stylesheet" href="themes/maccaco/projekktor.style.css" type="text/css" media="screen">');
                $('head').append('<link rel="stylesheet" href="cognex_player_style.css" type="text/css" media="screen">');
                if(console){
                    console.log( textStatus );        
                }
                
                
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