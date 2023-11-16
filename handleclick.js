document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.getElementById('volumeWarning');
  var actualContent = document.getElementById('actualContent');
  var bgVideo = document.getElementById('bgVideo');

  overlay.style.display = 'block';

  function handleClick() {
    overlay.style.opacity = '1';
    actualContent.style.opacity = '1';
    bgVideo.style.display = 'block';
    bgVideo.play();

    var startTime = null;

    function fade(timeStamp) {
      if (!startTime) startTime = timeStamp;
      var progress = (timeStamp - startTime) / 500; // 500ms duration
      overlay.style.opacity = 1 - progress;
      actualContent.style.opacity = progress;

      if (progress < 1) {
        requestAnimationFrame(fade);
      } else {
        overlay.style.display = 'none';
        document.removeEventListener('click', handleClick); // Remove the click event listener
      }
    }

    requestAnimationFrame(fade);
  }

  document.addEventListener('click', handleClick);
});
