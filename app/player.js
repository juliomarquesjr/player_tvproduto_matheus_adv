var playerElement = document.getElementById("matheusadvPlayer");

var icon =
  '<?xml version="1.0"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve"><g><path d="M501.299,132.766c-5.888,-22.03 -23.234,-39.377 -45.264,-45.264c-39.932,-10.701 -200.037,-10.701 -200.037,-10.701c0,0 -160.105,0 -200.038,10.701c-22.025,5.887 -39.376,23.234 -45.264,45.264c-10.696,39.928 -10.696,123.236 -10.696,123.236c0,0 0,83.308 10.696,123.232c5.888,22.03 23.239,39.381 45.264,45.268c39.933,10.697 200.038,10.697 200.038,10.697c0,0 160.105,0 200.037,-10.697c22.03,-5.887 39.376,-23.238 45.264,-45.268c10.701,-39.924 10.701,-123.232 10.701,-123.232c0,0 0,-83.308 -10.701,-123.236Z" style="fill:#ed1f24;fill-rule:nonzero;"/><path d="M204.796,332.803l133.018,-76.801l-133.018,-76.801l0,153.602Z" style="fill:#fff;fill-rule:nonzero;"/></g></svg>';

var player = new Clappr.Player({
  source:
    "https://59f1cbe63db89.streamlock.net:1443/tvgurgelimoveis/_definst_/tvgurgelimoveis/playlist.m3u8",
  plugins: [ChromecastPlugin],
  parentId: ".matheusadvPlayer",
  poster: 'https://player-tvproduto-bazarkioto.vercel.app/app/fundoplayer.jpg',
  autoPlay: true,
  mute: true,
  width: "100%",
  height: "100%",
  mediacontrol: { seekbar: "#F8F8FF", buttons: "#FFFAFA" },
  customData: {
    licenseURL: "http://www.matheuszilli.adv.br",
  },
  chromecast: {
    appId: "9DFB77C0",
    contentType: "video/mp4",
    media: {
      type: ChromecastPlugin.Movie,
      title: "Matheus Adivogado",
      subtitle: "Assista a nossa programação ao vivo",
    },
  },

  events: {
    onReady: function () {
      Clappr.$(".poster-icon").replaceWith(icon);
    },
  },
});
