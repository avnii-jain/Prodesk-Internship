window.addEventListener('load', function() {

    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
    
    const video = document.getElementById('bg-video');
    const videoControlBtn = document.getElementById('video-control');
    
    videoControlBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            videoControlBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Video';
        } else {
            video.pause();
            videoControlBtn.innerHTML = '<i class="fas fa-play"></i> Play Video';
        }
    });
});