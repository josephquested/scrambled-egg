document.getElementById('random-button').addEventListener("click", openRandomEpisode)

function openRandomEpisode () {
  var season = randomInt(1, 11)
  var episode = randomInt(1, 24)
  // open(`http://putlocker.is/watch-frasier-tvshow-season-${season}-episode-${episode}-online-free-putlocker.html`)
  open(`http://watchseries.cr/series/frasier/season/${season}/episode/${episode}`)
}

function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
