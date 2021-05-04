import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="/public/favicons/favicon.png"
            rel="shortcut icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/public/favicons/favicon.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />

          <meta property="og:site_name" content="Radio One Template" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            type="text/javascript"
            src="/static/js/jquery.min.js"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
            integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
            crossOrigin="anonymous"
          ></script>
          <script
            type="text/javascript"
            src="/static/js/mediaelement-and-player.min.js"
          ></script>
          <script type="text/javascript" src="/static/js/apps.js"></script>
          <script
            type="text/javascript"
            src="/static/js/jquery.simplyscroll.js"
          ></script>
          <script type="text/javascript" src="/static/js/slidenav.js"></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
          var menu = new Menu;

          $(".modalbox")
          setTimeout( function()
        {
           $(".modalbox").fadeOut("slow");
        }, 5000);
        
        
         $(document).ready(function() {
        
        $('.detail-box .editor-box').find('img').each(function() {
        var imageWidth = jQuery(this).width();
        if (imageWidth < 500 && imageWidth > 10) {
        
          jQuery(this).parent(".image").width(jQuery(this).width());
        
        }
        
        
        });
        });


        var sourcesSelector = document.body.querySelectorAll('select'),
        sourcesTotal = sourcesSelector.length
        ;

for (var i = 0; i < sourcesTotal; i++) {
    sourcesSelector[i].addEventListener('change', function (e) {
        var
            media = e.target.closest('.media-container').querySelector('.mejs__container').id,
            player = mejs.players[media]
        ;

        player.setSrc(e.target.value.replace('&amp;', '&'));
        player.setPoster('');
        player.load();

    });

    // These media types cannot play at all on iOS, so disabling them
    if (mejs.Features.isiOS) {
        sourcesSelector[i].querySelector('option[value^="rtmp"]').disabled = true;
        if (sourcesSelector[i].querySelector('option[value$="webm"]')) {
            sourcesSelector[i].querySelector('option[value$="webm"]').disabled = true;
        }
        if (sourcesSelector[i].querySelector('option[value$=".mpd"]')) {
            sourcesSelector[i].querySelector('option[value$=".mpd"]').disabled = true;
        }
        if (sourcesSelector[i].querySelector('option[value$=".ogg"]')) {
            sourcesSelector[i].querySelector('option[value$=".ogg"]').disabled = true;
        }
        if (sourcesSelector[i].querySelector('option[value$=".flv"]')) {
            sourcesSelector[i].querySelector('option[value*=".flv"]').disabled = true;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var mediaElements = document.querySelectorAll('video, audio'), total = mediaElements.length;

    for (var i = 0; i < total; i++) {
        new MediaElementPlayer(mediaElements[i], {
            pluginPath: 'dist/',
            success: function () {
                var target = document.body.querySelectorAll('.player'), targetTotal = target.length;
                for (var j = 0; j < targetTotal; j++) {
                    target[j].style.visibility = 'visible';
                }
            }
        });
    }
});



        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

          `,
            }}
          />

          <script
            type="text/javascript"
            src="//platform-api.sharethis.com/js/sharethis.js#property=5905c1c326d2ca00114f4d5b&product=inline-share-buttons"
            async="async"
          />
          <div id="fb-root"></div>
          <script src="https://apis.google.com/js/platform.js" />
        </body>
      </Html>
    );
  }
}
