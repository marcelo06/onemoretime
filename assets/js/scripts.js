 $(document).ready(function(){
            var description = 'Aqui Pueden disfrutar de los demos del proyecto ONE MORE TIME';

            $('footer').ttwMusicPlayer(myPlaylist, {
                autoPlay:false, 
                description:description,
                jPlayer:{
                    swfPath:'../music-player/plugin/jquery-jplayer/Jplayer.swf' //You need to override the default swf path any time the directory structure changes
                }
            });

            if (screen.width < 900) {
            	document.getElementById('footer').style.display ="none";
            }

        })