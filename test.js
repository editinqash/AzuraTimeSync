function azuraTimeSync(_0x3fdcc3, _0x16f1c0, _0x17ea3d, _0x3d63f7) {
  console.log("AzuraTimeSync Loaded");
  console.log("[AzuraTimeSync] Azura URL: " + _0x3fdcc3 + " | Spotify ID: " + _0x16f1c0 + " | Sync Delay: " + _0x17ea3d + " | Lyric Element: " + _0x3d63f7);
  setInterval(function () {
    $.getJSON(_0x3fdcc3, function (_0x5c33f0) {
      document.elapsed = _0x5c33f0[0x0].now_playing.elapsed;
      var _0x2b14d5 = document.getElementById("songlyrics");
      if (typeof _0x2b14d5 != 'undefined' && _0x2b14d5 != null) {
        $.getJSON("https://tools.liftuphosting.com/api/v2/lookup/lyrics/" + _0x16f1c0, function (_0x165f08) {
          var _0x3d768c = _0x165f08.result.lines;
          for (var _0x390b9c = 0x0; _0x390b9c < _0x3d768c.length; _0x390b9c++) {
            console.log(_0x3d768c[_0x390b9c]);
            if (_0x3d768c[_0x390b9c].startTimeMs >= document.elapsed * 0x3e8 - _0x17ea3d && document.elapsed * 0x3e8 - _0x17ea3d <= _0x3d768c[_0x390b9c + 0x1].startTimeMs) {
              $(_0x3d63f7).text(_0x3d768c[_0x390b9c].words);
              console.log(_0x3d768c[_0x390b9c].words);
              console.log(_0x390b9c);
              break;
            }
          }
        });
      }
      ;
    });
  }, 0x3e8);
}
;
