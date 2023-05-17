//get our elements 
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skipped]');  //donno the meaning of data-skipped
const ranges = player.querySelector('.player__slider');


//build our functions

//toggle

function toggle_play(){
    //for play and pause ig
    // if(video.paused){
    //     video.play();
    // }else{
    //     video.pause();
    // }

    //or

    const toggle_method = video.paused ? 'play' : 'pause' ;
    video[toggle_method]();
}

function button_change(){
    const icon = this.paused ? '>' : '||' ;
    console.log(icon);
    toggle.textContent = icon ;
}

//skip function
// function skip(){
//     console.log('skipping!!');
//     video.currentTime += parseFloat(this.dataset.skip);
// }

//range functions
function range_update(){
    console.log(this.value);
}

//hook up the event listeners

   //For toggle function, we need to call it both when play/pause button is used
   //and when video screen is clicked. 

   video.addEventListener('click' , toggle_play); //hooked up with click
   toggle.addEventListener('click' , toggle_play); //hooked up the button but the button isnt changing
   //to change the button we could have added code in toggle_play() it self but that 
   //would have limited us to only to two events.
   video.addEventListener('play' , button_change);
   video.addEventListener('pause' , button_change);   

//   skipButtons.forEach(button => button.addEventListener('click' , skip)); //something wrong with forEach

   ranges.forEach(range => range.addEventListener('change' , range_update) );
   ranges.forEach(range => range.addEventListener('mousemove' , range_update) );
   
