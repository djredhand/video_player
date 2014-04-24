
        var CognexVideo = function(){
            this.itemIndex = 0,
            this.create_player_elm = function(template){
                var left_col_header = $('<div class="cog-col-header"></div>');
                var col_desc_content = $('<div class="cog-desc-content"/>');
                var left_column = $('<div class="cog-left-col"></div>');
                var right_column  = $('<div class="cog-right-col"></div><br class="clear"/>');
                var player_container = $('<div id="player-container" class="container-instance"></div>');
                var player = $('<div id="cognex-player" class="projekktor player-instance"></div>');
                var close_button = $('<div class="cog-vid-close-btn"></div>');
                var ajax_content = $('<div id="ajax-content"/>');
                var overlay = $('<div id="cognex-overlay"></div>');
                var view_btn = $('<div class="cognex-content view-btn">View additional info<div id="cognex-view-btn"></div></div>');
                var contact_btn = $('<div class="cognex-content contact-btn"><a target="_blank" href="http://www.cognex.com/Home/ContactUs.aspx"><div id="cognex-contact-btn"></div></a></div>');
                var demo_btn = $('<div class="cognex-content demo-btn"><a target="_blank" href="http://www.cognex.com/contact-demo.aspx?cm_campid=43BBC0AC-1C17-E311-A060-5EF3FCDAF1B7"><div id="cognex-demo-btn"></div></a></div>');
                var pricing_btn = $('<div class="cognex-content pricing-btn"><a target="_blank" href="http://www.cognex.com/contact-pricing.aspx?cm_campid=6FEAE2C5-1C17-E311-A060-5EF3FCDAF1B7"><div id="cognex-pricing-btn"></div></a></div>');
                var winHeight = $(document).height();
                
                //overlay.height(winHeight);
                $('body').append(overlay, ajax_content);
                left_column.append(left_col_header, view_btn);
                overlay.append(player_container);
                player_container.append(close_button,left_column,right_column);
                player.append(template)
                right_column.append(col_desc_content, player, demo_btn, pricing_btn, contact_btn);
                

                $('.cog-vid-close-btn').click(function(){
                    overlay.remove();
                })
            },
            this.play_on_description = function(){
                $('.cog-desc-content').click(function(){
                    //CognexPlayer.setPlay();
                    //$(this).empty();
                })
                
            },
            this.init_player = function(){
                projekktor('#cognex-player', {
                poster: 'media/poster_.jpg',
                title: 'this is projekktor',
                playerFlashMP4: 'http://jamesemmettdesign.com/cognex_video/projektor/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
                playerFlashMP3: 'http://jamesemmettdesign.com/cognex_video/projektor/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
                width: 710,
                height: 480,
                controls: true,            // controls are disabled (inactive) if set to FALSE
                autoplay: false,
                description_template: {src: "descriptions.html", type:"text/html"},
                playlist: [{
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/hotbars/1.webm", 
                                type: "video/webm", 
                                contentTitle: 'Hotbars',
                                navItem: "Hotbars"},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/hotbars/1.ogv", 
                                type: "video/ogv", 
                                contentTitle: 'Hotbars',
                                navItem: "Hotbars"},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/hotbars/1.mp4", 
                                type: "video/mp4", 
                                contentTitle: 'Hotbars',
                                navItem: "Hotbars"}
                            },
                            
                            {
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/hotbars/1.webm", 
                                type: "video/ogg", 
                                contentTitle: 'DataMan-Eight',
                                navItem: "DataMan 8000"},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/hotbars/1.webm", 
                                type: "video/mp4", 
                                contentTitle: 'DataMan-Eight',
                                navItem: "DataMan 8000"},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/hotbars/1.webm", 
                                type: "video/webm", 
                                contentTitle: 'DataMan-Eight',
                                navItem: "DataMan 8000"},
                            },

                            {
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/supercharged/3.webm", 
                                type: "video/ogg", 
                                contentTitle: 'Supercharged',
                                navItem: "Supercharged ID"},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/supercharged/3.webm", 
                                type: "video/mp4", 
                                contentTitle: 'Supercharged',
                                navItem: "Supercharged ID"},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/supercharged/3.webm", 
                                type: "video/webm", 
                                contentTitle: 'Supercharged',
                                navItem: "Supercharged ID"}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/dpm/TwoBolt-Powerpoint-PartTraceability-Final.ogv", 
                                type: "video/ogg", 
                                contentTitle: 'Introduction',
                                navItem: "Introduction to DPM"},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/dpm/TwoBolt-Powerpoint-PartTraceability-Final.mp4", 
                                type: "video/mp4", 
                                contentTitle: 'Introduction',
                                navItem: "Introduction to DPM"},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/dpm/TwoBolt-Powerpoint-PartTraceability-Final.webm", 
                                type: "video/webm", 
                                contentTitle: 'Introduction',
                                navItem: "Introduction to DPM"}
                            },
                            {
                           
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/ten_reasons/Twobolt-Powerpoint-10ReasonstoChoose-final.webm", 
                                type: "video/ogg", 
                                contentTitle: 'Ten-Reasons',
                                navItem: "Ten Reasons to Choose Image-based ID Readers"},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/ten_reasons/Twobolt-Powerpoint-10ReasonstoChoose-final.webm", 
                                type: "video/mp4", 
                                contentTitle: 'Ten-Reasons',
                                navItem: "Ten Reasons to Choose Image-based ID Readers"},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/ten_reasons/Twobolt-Powerpoint-10ReasonstoChoose-final.webm", 
                                type: "video/webm", 
                                contentTitle: 'Ten-Reasons',
                                navItem: "Ten Reasons to Choose Image-based ID Readers"}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/hotbars/1.webm", 
                                type: "video/ogg", 
                                contentTitle: 'Multiple',
                                navItem: "Multiple Code Reading"},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/hotbars/1.webm", 
                                type: "video/mp4", 
                                contentTitle: 'Multiple',
                                navItem: "Multiple Code Reading"},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/hotbars/1.webm", 
                                type: "video/webm", 
                                contentTitle: 'Multiple',
                                navItem: "Multiple Code Reading"}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/barcode/7.webm", 
                                type: "video/ogg", 
                                contentTitle: 'Barcode',
                                navItem: "3 Barcode Reader Features"},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/barcode/7.webm", 
                                type: "video/mp4", 
                                contentTitle: 'Barcode',
                                navItem: "3 Barcode Reader Features"},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/barcode/7.webm", 
                                type: "video/webm", 
                                contentTitle: 'Barcode',
                                navItem: "3 Barcode Reader Features"}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/hotbars/1.webm", 
                                type: "video/ogg", 
                                contentTitle: 'Why-You-Need',
                                navItem: "Why You Need to Upgrade!"},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/hotbars/1.webm", 
                                type: "video/mp4", 
                                contentTitle: 'Why-You-Need',
                                navItem: "Why You Need to Upgrade!"},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/hotbars/1.webm", 
                                type: "video/webm", 
                                contentTitle: 'Why-You-Need',
                                navItem: "Why You Need to Upgrade!"}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/dataman_50/9.webm", 
                                type: "video/ogg", 
                                contentTitle: 'Dataman-Fifty',
                                navItem: "DataMan 50L"},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/dataman_50/9.webm", 
                                type: "video/mp4",
                                contentTitle: 'Dataman-Fifty',
                                navItem: "DataMan 50L"},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/dataman_50/9.webm", 
                                type: "video/webm", 
                                contentTitle: 'Dataman-Fifty',
                                navItem: "DataMan 50L"}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/dataman300/TwoBolt-PowerPoint-QuantumLeap-Final.ogv", 
                                type: "video/ogv", 
                                contentTitle: 'Dataman-Three',
                                navItem: "DataMan 300"},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/dataman300/TwoBolt-PowerPoint-QuantumLeap-Final.mp4", 
                                type: "video/mp4", 
                                contentTitle: 'Dataman-Three',
                                navItem: "DataMan 300"},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/dataman300/TwoBolt-PowerPoint-QuantumLeap-Final.webm", 
                                type: "video/webm", 
                                contentTitle: 'Dataman-Three',
                                navItem: "DataMan 300"}
                            },
                            {
                            
                            0: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/ethernet/Ethernet-Based.ogv", 
                                type: "video/ogg", 
                                contentTitle: 'Integrating',
                                navItem: "Integrating ID Readers"},
                            1: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/ethernet/Ethernet-Based.mp4", 
                                type: "video/mp4", 
                                contentTitle: 'Integrating',
                                navItem: "Integrating ID Readers"},
                            2: {src: "http://jamesemmettdesign.com/cognex_video/projektor/media/ethernet/Ethernet-Based.webm", 
                                type: "video/webm", 
                                contentTitle: 'Integrating',
                                navItem: "Integrating ID Readers"}
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
                CognexPlayer.description = CognexPlayer.config._playlist[index][0].contentTitle;
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
                    var blank = '';
                    if(num<10){
                        num = '0' + num;    
                    }
                    var list_item = $('<li class="cog-nav-item"><div class="cog-item-title"><span>'
                                        +blank+' </span>'+ this[0].navItem +'</div></li>');
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
            this.set_scrub = function(){
                $(".ppplayhead").click(function(e){
                    var parentOffset = $(this).offset(); 
                    var relX = e.pageX - parentOffset.left;
                    var relY = e.pageY - parentOffset.top;
                    var seekTo = relX/$(this).parent().width();
                    var duration = active_player.getDuration();
                    active_player.setSeek(seekTo*duration);
                });
            },
            this.eventListeners = function(){
                var ApiTest =  function(data) {
                    if(data =="STOPPED"){
                        //console.log('stopped');
                        //console.log('place description 173');
                        var current_item_index = CognexPlayer.getItemIdx();
                        CognexPlayer.description = CognexPlayer.config._playlist[current_item_index][0].contentTitle;
                        
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
            },
            this.view_btn = function(){
                $('#cognex-view-btn').click(function(){
                    if($(this).hasClass('active')){
                        active_player.setStop();
                        //$(this).removeClass('active');
                        var current_item_index = CognexPlayer.getItemIdx();
                        CognexPlayer.description = CognexPlayer.config._playlist[current_item_index][0].contentTitle;
                        $("#ajax-content").load(CognexPlayer.config.description_template.src, function(){
                            $(".cog-desc-content").empty();
                            var clone = $("#Download-Center").clone();
                            $('.cog-desc-content').append(clone);

                            window.myVar=setInterval(function(){
                                myTimer();
                            },5);

                            function myTimer(){
                                console.log("time")
                                if($('#Download-Center.active')){
                                    console.log("exists!");

                                    $("#ajax-content").load(CognexPlayer.config.description_template.src, function(){
                                        $(".cog-desc-content").empty();
                                        var clone = $("#Download-Center").clone();
                                        $('.cog-desc-content').append(clone);

                                        window.clearInterval(myVar);
                                    })

                                }
                            }

                        });
                        return;
                    }
                    active_player.setStop();
                    $(this).addClass('active');
                    
                    $('#cognex-view-btn').trigger('click');
                })
                $('#cognex-view-btn.active').on(function(){
                    alert('assa')
                })
            },
            this.init = function(){
                this.add_navigation(player);
                this.eventListeners();
                this.place_description(CognexPlayer, 0);
                this.set_scrub();
                this.view_btn();
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