var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) { 
  admobid = { // for Android
    banner: 'ca-app-pub-2373638997110870~6663796341',
    interstitial: 'ca-app-pub-2373638997110870/2093995942'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-2373638997110870/5020769541',
    interstitial: 'ca-app-pub-2373638997110870/6497502749'
  };
} else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-2373638997110870/5047462342',
    interstitial: 'ca-app-pub-2373638997110870/6524195548'
  };
}

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  } );

  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    // TODO: remove this line when release
    autoShow: true
  });
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}