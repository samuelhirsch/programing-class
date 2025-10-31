(async function () {
  'use strict';
  const myVideos = document.querySelector('#videolist');
  const playvideo=document.querySelector('video');
  try {
    const response = await fetch('videos.json');
    if (!response.ok) {
      throw new Error(`${response.status}-${response.statusText}`);
    }
    const videosList = await response.json();
    videosList.forEach(video => {
      const newLi = document.createElement('li');
      const title = document.createElement('header');
      title.innerText = video.title;
      const newimg = document.createElement('img');
      newLi.addEventListener('click', () => {
       playvideo.src=video.url;
       playvideo.play();
      });
      
      
      if (video.image) {
        newimg.src=video.image;
      }
      else {
        newimg.src = ('images/music.png');
      }
      
      newLi.appendChild(newimg);
      newLi.appendChild(title);
      myVideos.appendChild(newLi);
    });
  }
  catch (e) {
    console.error(e);
  }
}());