(async function () {
  'use strict';
  const myVideos = document.querySelector('#videolist');
  try {
    const response = await fetch('videos.json');
   if(!response.ok){
    throw new Error(`${response.status}-${response.statusText}`);
   }
    const videosList = await response.json();
    videosList.forEach(video => {
      const newLi = document.createElement('li');
      const title = document.createElement('header');
      title.innerText = video.title;
      const newVideo = document.createElement('video');
    newLi.addEventListener('click',()=>{
       newVideo.play();
    });
      newVideo.src = video.url;
      if(video.image){
        newVideo.poster = video.image;
      }
      else{
        newVideo.poster=('images/music.png');
      }
      newVideo.controls = true;
      newLi.appendChild(newVideo);
       newLi.appendChild(title);
      myVideos.appendChild(newLi);
    });
  }
  catch (e) {
    console.error(e);
  }
}());