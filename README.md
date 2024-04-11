# AzuraTimeSync
This is a JS script to allow for timesynced lyrics with Azuracast, using the Azura API and a secret API.

# How to use
Firstly, import the API:

```
<script href='https://raw.githubusercontent.com/editinqash/AzuraTimeSync/master/dist.js'></script>
```

Then, use it!

```
var Azura_Lyrics = new azuraTimeSync('AZURA URL HERE',SPOTIFY_TRACK_ID_HERE,AZURA_AUDIO_DELAY_HERE,'LYRIC_ELEMENT');
```
