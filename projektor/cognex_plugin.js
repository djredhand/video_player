
        var CognexVideo = function(){
            this.itemIndex = 0,
            this.create_player_elm = function(template){
                var left_col_header = $('<div class="cog-col-header"></div>');
                var col_desc_content = $('<div class="cog-desc-content"/>');
                var left_column = $('<div class="cog-left-col"></div>');
                var right_column  = $('<div class="cog-right-col"></div><br class="clear"/>');
                var player_container = $('<div id="player-container" class="container-instance"></div>');
                var player = $('<div id="cognex-player" class="projekktor player-instance"></div>');
                var close_button = $('<div class="cog-vid-close-btn">X</div>');
                var ajax_content = $('<div id="ajax-content"/>');
                var overlay = $('<div id="cognex-overlay"></div>');
                var winHeight = $(document).height();
                
                //overlay.height(winHeight);
                $('body').append(overlay, ajax_content);
                left_column.append(left_col_header);
                overlay.append(close_button, player_container);
                player_container.append(left_column,right_column);
                player.append(template)
                right_column.append(col_desc_content, player);
                

                $('.cog-vid-close-btn').click(function(){
                    overlay.remove();
                })
            },
            this.play_on_description = function(){
                $('.cog-desc-content').click(function(){
                    CognexPlayer.setPlay();
                    $(this).empty();
                })
                
            },
            this.init_player = function(){
                projekktor('#cognex-player', {
                poster: 'media/poster.jpg',
                title: 'this is projekktor',
                playerFlashMP4: 'http://jamesemmettdesign.com/cognex_video/projektor/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
                playerFlashMP3: 'http://jamesemmettdesign.com/cognex_video/projektor/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
                width: 640,
                height: 400,
                controls: true,            // controls are disabled (inactive) if set to FALSE
                autoplay: false,
                description_template: {src: "descriptions.html", type:"text/html"},
                playlist: [{
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/test1.ogv", 
                                type: "video/ogg", title: 'Hotbars'},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro_.mp4", 
                                type: "video/mp4", title: 'Hotbars'},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro.webm", 
                                type: "video/webm", title: 'Hotbars'},
                            },
                            
                            {
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/test1.ogv", type: "video/ogg", title: 'supercharged'},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro_.mp4", type: "video/mp4", title: 'test2'},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro.webm", type: "video/webm", title: 'test2'},
                            },

                            {
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/test1.ogv", type: "video/ogg", title: 'introduction'},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro_.mp4", type: "video/mp4", title: 'test3'},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro.webm", type: "video/webm", title: 'test3'}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/test1.ogv", type: "video/ogg", title: 'tenreasons'},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro_.mp4", type: "video/mp4", title: 'tenreasons'},
                            2: {src: "media/intro.webm", type: "video/webm", title: 'tenreasons'}
                            },
                            {
                           
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/test1.ogv", type: "video/ogg", title: 'multiple'},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro_.mp4", type: "video/mp4", title: 'multiple'},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro.webm", type: "video/webm", title: 'multiple'}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/test1.ogv", type: "video/ogg", title: 'multiple'},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro_.mp4", type: "video/mp4", title: 'multiple'},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro.webm", type: "video/webm", title: 'multiple'}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/test1.ogv", type: "video/ogg", title: 'multiple'},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro_.mp4", type: "video/mp4", title: 'multiple'},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro.webm", type: "video/webm", title: 'multiple'}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/test1.ogv", type: "video/ogg", title: 'multiple'},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro_.mp4", type: "video/mp4", title: 'multiple'},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro.webm", type: "video/webm", title: 'multiple'}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/test1.ogv", type: "video/ogg", title: 'multiple'},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro_.mp4", type: "video/mp4", title: 'multiple'},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro.webm", type: "video/webm", title: 'multiple'}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/test1.ogv", type: "video/ogg", title: 'multiple'},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro_.mp4", type: "video/mp4", title: 'multiple'},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro.webm", type: "video/webm", title: 'multiple'}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/test1.ogv", type: "video/ogg", title: 'multiple'},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro_.mp4", type: "video/mp4", title: 'multiple'},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/intro.webm", type: "video/webm", title: 'multiple'}
                            }

                            ]    
                }, function(player) {
                    $('.ppnext').click(function(){
                        
                        player.setStop();
                        var index = (player._currentItem)
                        $('.cog-nav-item').removeClass('active-item');
                        $('.cog-nav-item').eq(index).addClass('active-item');
                        return false;
                    })
                    $('.ppprev').click(function(){
                        player.setStop();
                        var index = (player._currentItem)
                        $('.cog-nav-item').removeClass('active-item');
                        $('.cog-nav-item').eq(index).addClass('active-item'); 
                        return false;
                    })
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
                        //set play on description click
                        that.play_on_description();
                    });
                
            }
        }//end CognexVideo

        var player_decoration = function(player){

            this.place_description = function(CognexPlayer, index){
                //console.log('place description 109');
                //console.log(index)
                if (index==undefined){index=1};
                CognexPlayer.description = CognexPlayer.config._playlist[index][0].title;
                $(".cog-desc-content").empty();
                $("#ajax-content").load(CognexPlayer.config.description_template.src, function(){
                    var clone = $("#" + CognexPlayer.description).clone();
                    $('.cog-desc-content').append(clone);
                });
                
            }
            this.add_navigation = function(player){
                var config = player.config;
                var left_column = $('.cog-left-col');
                var nav = $('<ul id="cog-nav"></ul').appendTo(left_column);
                $(config._playlist).each(function(index){
                    var num = index + 1;
                    if(num<10){
                        num = '0' + num;
                    }
                    var list_item = $('<li class="cog-nav-item"><div class="cog-item-title"><span>'
                                        +num+' </span>'+ this[0].title +'</div></li>');
                    nav.append(list_item);
                    window.active_player = player;
                    list_item.click(function(){
                        
                        $('.cog-nav-item').removeClass('active-item');
                        $(this).addClass('active-item');

                        var current_index = $(this).index();
                        var description_template = window.active_player.config.description_template;
                        window.active_player.itemIndex = current_index;
                        window.active_player.setActiveItem(current_index);
                        window.active_player.setStop();

                        $("#ajax-content").load(description_template.src, function(){
                            var lit_nav_index = $('.cog-nav-item.active-item').index();
                            if (active_player._currentItem !== lit_nav_index){
                                $(".cog-desc-content").empty();
                                var clone = $("#" + description_template.content).clone();
                                $('.cog-desc-content').append(clone);
                            }
                        });   
                    })//end click
                    //set the first item to active
                    $('.cog-nav-item').eq(0).addClass('active-item');
                })    
            },
            this.eventListeners = function(){
                var ApiTest =  function(data) {
                    if(data =="STOPPED"){
                        //console.log('stopped');
                        //console.log('place description 173');
                        var current_item_index = CognexPlayer.getItemIdx();
                        CognexPlayer.description = CognexPlayer.config._playlist[current_item_index][0].title;
                        
                        $("#ajax-content").load(CognexPlayer.config.description_template.src, function(){
                            $(".cog-desc-content").empty();
                            var clone = $("#" + CognexPlayer.description).clone();
                            $('.cog-desc-content').append(clone);
                        });

                    }
                    if(data=="PLAYING"){
                        //]var video_index = CognexPlayer._currentItem;
                        $('.cog-desc-content').empty();
                        //$('.cog-nav-item').removeClass('active-item');
                        //$('.cog-nav-item').eq(video_index).addClass('active-item');

                    }
                    
                };
                player.addListener('*',ApiTest );
            }
            this.init = function(){
                this.add_navigation(player);
                this.eventListeners();
                this.place_description(CognexPlayer, 0);
                // clean up
                $('.player-instance').eq(1).remove();
            }
            //IE bug with navigation being created again after end of last video. 
            if($("#cog-nav").length==0){ 
                this.init();
            }
        }

        $.getScript( "http://jamesemmettdesign.com/cognex_video/projektor/projekktor-1.3.09.min.js" )
            .done(function( script, textStatus ) {
                $('head').append('<link rel="stylesheet" href="themes/maccaco/projekktor.style.css" type="text/css" media="screen">');
                $('head').append('<link rel="stylesheet" href="cognex_player_style.css" type="text/css" media="screen">');
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