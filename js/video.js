// Add js here.
let video = document.getElementById("videoplayer");
function page_load(){
    video.autoplay = false;
    video.loop = false;
    video.load();
}
window.onload = page_load();

function play_button(){
    video.play();
}
document.getElementById("play").addEventListener("click", play_button);

function pause_button(){
    video.pause();
}
document.getElementById("pause").addEventListener("click", pause_button);

const speed_list = [0.5, 1, 2];
let speed_status = 1;
video.playbackRate = speed_list[1];
function slow_down(){
    if (speed_status==0){
        alert("Video is at slowest speed!");
    }
    else{
        speed_status--;
        video.playbackRate = speed_list[speed_status];
    }
}
document.getElementById("slower").addEventListener("click", slow_down);

function speed_up(){
    if (speed_status==(speed_list.length-1)){
        alert("Video is at fastest speed!");
    }
    else{
        speed_status++;
        video.playbackRate = speed_list[speed_status];
    }
}
document.getElementById("faster").addEventListener("click", speed_up);

function skip_ahead(){
    if ((video.currentTime+15) > video.duration){
        video.currentTime = 0;
        video.pause();
    }
    else{
        video.currentTime += 15;
    }
}
document.getElementById("skip").addEventListener("click", skip_ahead);


let mute_status = false;
video.volume = 1;
document.getElementById("volume").innerText = video.volume*100;
function mute(){
    if (mute_status == false){
        document.getElementById("mute").innerHTML = 'Unmute';
        video.volume = 0;
        mute_status = true;
        document.getElementById("slider").value = 0;
        document.getElementById("volume").innerText = 0;
    }
    else if (mute_status == true){
        document.getElementById("mute").innerHTML = 'Mute';
        video.volume = document.getElementById("slider").value/100;
        mute_status = false;
    }
}
document.getElementById("mute").addEventListener("click", mute);

function volume_slider(){
    document.getElementById("volume").innerText = document.getElementById("slider").value;
    if (mute_status==false){
        video.volume = document.getElementById("slider").value/100;
    }
}
document.getElementById("slider").addEventListener("change", volume_slider);