((global)=>{
    let jquery = {};
    jquery.initAudio = function(source){
    // function initAudio(source){
        var audio = new Audio();
        // audio.src = '../music/akk-1.mp3';
        audio.src = source;
        audio.loop = false;
        $("#repeatbtn").click(function(){
            if(audio.loop){
                audio.loop = false;
                $("#repeatbtn").removeClass("border-2");
            }
            else{
                audio.loop = true;
                $("#repeatbtn").addClass("border-2");
            }
        });
        $("#playbtn").click(function(){
            if(audio.paused){
                audio.play();
                $("#pausebtn").removeClass("d-none").addClass("d-block");
                $("#playbtn").removeClass("d-block").addClass("d-none");
                return;
            }
            audio.play();
            $("#pausebtn").removeClass("d-none").addClass("d-block");
            $("#playbtn").removeClass("d-block").addClass("d-none");
        });
        $("#pausebtn").click(function(){
            audio.pause();
            $("#playbtn").removeClass("d-none").addClass("d-block");
            $("#pausebtn").removeClass("d-block").addClass("d-none");
        });
        $("#mutebtn").click(function(){
            audio.muted = true;
            $("#unmutebtn").removeClass("d-none").addClass("d-block");
            $("#mutebtn").removeClass("d-block").addClass("d-none");
        });
        $("#unmutebtn").click(function(){
            if(audio.muted){
                audio.muted = false;
                $("#mutebtn").removeClass("d-none").addClass("d-block");
                $("#unmutebtn").removeClass("d-block").addClass("d-none");
            }
        });
        $("#list_of_songs_close").click(function(){
            if(audio.played){
                audio.currentTime = 0;
                audio.pause();
            }
        });
        var seekslider_value, seekTo, isSeeking = false;
        $("#seekslider").change(function(){
            seekslider_value = $(this).val();
            seekTo = audio.duration * (seekslider_value/100);
            console.log(seekslider_value);
            audio.currentTime = seekTo;
        });    
        audio.addEventListener("timeupdate", function(){
            var newTime = audio.currentTime*(100/audio.duration);
            $("#seekslider").val(newTime);//UPDATES THE SEEKSLIDER ON EACH SEC
            var curMins = Math.floor(audio.currentTime / 60);
            var curSecs = Math.floor(audio.currentTime - curMins * 60);
            var durMins = Math.floor(audio.duration / 60);
            var durSecs = Math.floor(audio.duration - durMins * 60);
            if(curSecs<10){curSecs = "0"+curSecs} 
            if(curMins<10){curMins = "0"+curMins} 
            if(durSecs<10){durSecs = "0"+durSecs} 
            if(durMins<10){durMins = "0"+durMins} 
            $("#curtime").html(curMins + ":" + curSecs);
            $("#durtime").html(durMins + ":" + durSecs);
        });
    
    
    };
    global.jquery = jquery;
})(window);