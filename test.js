  function azuraTimeSync(azuraURL, spotifyURL, syncDelay, lyrElement) {
    console.log("AzuraTimeSync Loaded");
    console.log("[AzuraTimeSync] Azura URL: " + azuraURL + " | Spotify ID: " + spotifyURL + " | Sync Delay: " + syncDelay + " | Lyric Element: " + lyrElement);
    setInterval(function () {
      $.getJSON(azuraURL, function (data1) {
        document.elapsed = data1[0].now_playing.elapsed;
        console.log("[AzuraTimeSync] Elapsed: " + document.elapsed);
        var lyricElem = document.getElementById("songLyrics");
        if (typeof lyricElem != 'undefined' && lyricElem != null) {
          $.getJSON("https://tools.voltcorp.uk/v2/lyrics?trackid=" + spotifyURL, function (lyrAPI) {
            var _0x3d768c = lyrAPI.lyrics.lines;
            for (var _0x390b9c = 0x0; _0x390b9c < _0x3d768c.length; _0x390b9c++) {
              console.log(_0x3d768c[_0x390b9c]);
              if (_0x3d768c[_0x390b9c].startTimeMs >= document.elapsed * 1000 - syncDelay && document.elapsed * 1000 - syncDelay <= _0x3d768c[_0x390b9c + 1].startTimeMs) {
                $(lyrElement).text(_0x3d768c[_0x390b9c].words);
                console.log(_0x3d768c[_0x390b9c].words);
                console.log(_0x390b9c);
                break;
              }
            }
          });
        }
        ;
      });
  }, 1000);
