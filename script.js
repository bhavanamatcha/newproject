function openTrailer() {
    const trailerUrl = "https://www.youtube.com/embed/3gChdxvYTpU?autoplay=1&rel=0";
    document.getElementById('trailerModal').style.display = 'flex';
    document.getElementById('trailerContainer').innerHTML = `
      <iframe width="100%" height="400" src="${trailerUrl}" frameborder="0" allowfullscreen></iframe>
    `;
  }
  
  function closeTrailer() {
    document.getElementById('trailerModal').style.display = 'none';
    document.getElementById('trailerContainer').innerHTML = ""; // Stop the video
  }
  