//Block scroll on load for 4secs
window.addEventListener("load", () => {

  // Stop Lenis scroll on load
  lenis.stop();

  // Enable scroll again after 4 seconds
  gsap.delayedCall(4, () => {
    lenis.start();
  });

});



// Scroll to top on reload
    document.addEventListener('DOMContentLoaded', (event) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // 'instant' or 'smooth'
        });
    });



// Hero parallax
document.addEventListener("DOMContentLoaded", () => {
  // Wait for all images to load before running animation
  window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-wrap"); // your hero section
    const img = hero.querySelector(".hero_bg-image");   // background image inside hero

    // Ensure hero clips overflowing image
    hero.style.overflow = "clip";

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",   // when hero hits top of viewport
        end: "bottom top",  // when hero leaves viewport
        scrub: true,        // makes it smooth
      }
    });

    // Move image down & reduce opacity on scroll
    tl.to(img, {
      yPercent: 50,     // moves slower than scroll
      opacity: 0.55,    // slightly fades out as user scrolls
      ease: "none"
    });
  });
});





// Cursor marquee
function initCursorMarqueeEffect() {
  const hoverOutDelay = 0.4;
  const followDuration = 0.4;
  const speedMultiplier = 4.25;

  const cursor = document.querySelector('[data-cursor-marquee-status]');
  if (!cursor) return;
  const targets = cursor.querySelectorAll('[data-cursor-marquee-text-target]');

  const xTo = gsap.quickTo(cursor, 'x', { duration: followDuration, ease: 'power3' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: followDuration, ease: 'power3' });

  let pauseTimeout = null;
  let activeEl = null;
  let lastX = 0;
  let lastY = 0;

  function playFor(el) {
    if (!el) return;
    if (pauseTimeout) clearTimeout(pauseTimeout);
    const text = el.getAttribute('data-cursor-marquee-text') || '';
    const sec = (text.length || 1) / speedMultiplier;
    targets.forEach(t => {
      t.textContent = text;
      t.style.animationPlayState = 'running';
      t.style.animationDuration = sec + 's';
    });
    cursor.setAttribute('data-cursor-marquee-status', 'active');
    activeEl = el;
  }

  function pauseLater() {
    cursor.setAttribute('data-cursor-marquee-status', 'not-active');
    if (pauseTimeout) clearTimeout(pauseTimeout);
    pauseTimeout = setTimeout(() => {
      targets.forEach(t => {
        t.style.animationPlayState = 'paused';
      });
    }, hoverOutDelay * 1000);
    activeEl = null;
  }

  function checkTarget() {
    const el = document.elementFromPoint(lastX, lastY);
    const hit = el && el.closest('[data-cursor-marquee-text]');
    if (hit !== activeEl) {
      if (activeEl) pauseLater();
      if (hit) playFor(hit);
    }
  }

  window.addEventListener('pointermove', e => {
    lastX = e.clientX;
    lastY = e.clientY;
    xTo(lastX);
    yTo(lastY);
    checkTarget();
  }, { passive: true });

  window.addEventListener('scroll', () => {
    xTo(lastX);
    yTo(lastY);
    checkTarget();
  }, { passive: true });

  setTimeout(() => {
    cursor.setAttribute('data-cursor-marquee-status', 'not-active');
  }, 500);
}

// Initialize Cursor with Marquee Effect
document.addEventListener('DOMContentLoaded', function() {
  initCursorMarqueeEffect();
});







// Project card random color
document.addEventListener("DOMContentLoaded", () => {
  // Select all your CMS cards
  const cards = document.querySelectorAll(".work-card_visual"); 
  // Define a set of colors to choose from
  const colors = ["#FFA23C", "#ECC8EB", "#69B16A", "#69B16A", "#5A92E7", "#FeF073"];

 // Assign a random color to each card
  cards.forEach(card => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.backgroundColor = randomColor;
  });
});






// Word scroll effect
    lenis = new Lenis({
        autoRaf: true,
    })

    document.querySelectorAll('.word-flip_main').forEach(word => {
      gsap.to(word.children, {
        yPercent: '-=100', // Increase the y position by 100%
        ease:'power2.in',
        scrollTrigger:{
          trigger: word, // Listens to the position of word
          start: "bottom bottom",
          end: "top 55%",
          scrub: .8 // Smooth scrubbing, takes 1.2 seconds to complete
        }
      })
    })




// Testimonial carousel effect
gsap.registerPlugin(Observer)

let total = 0,
    xTo,
    itemValues = []

window.addEventListener("DOMContentLoaded", () => {

    const content = document.querySelector('.testimonial_main-container')
    const cards = document.querySelectorAll('.testimonial_card')
    const cardsLength = cards.length / 2
    const half = content.clientWidth / 2

    const wrap = gsap.utils.wrap(-half, 0);

    xTo = gsap.quickTo(content, "x", {
        duration: 0.5, // Will transition over 0.5s
        ease: 'power3', // Non-linear
        modifiers: {
            x: gsap.utils.unitize(wrap),
        },
    });

    // Generate an array of random values between -10 and 10
    for (let i = 0; i < cardsLength; i++) {
        itemValues.push((Math.random() - 0.5) * 15);
    }

    // Create a GSAP timeline and keep it paused initially
    const tl = gsap.timeline({ paused: true });
    tl.to(cards, {
        // Rotate each card using a precomputed random value
        rotate: (index) => (itemValues[index % cardsLength]),
        // Move each card horizontally based on the same random value
        xPercent: (index) => (itemValues[index % cardsLength]),
        // Move each card vertically based on the same random value
        yPercent: (index) => (itemValues[index % cardsLength]),
        // Slightly scale down the cards
        scale: 0.95,
        duration: 0.5,
        ease: 'back.inOut(3)', // Non-linear
    })

    Observer.create({
        target: content,
        type: "pointer,touch", // Detect both pointer and touch events
        onPress: () => tl.play(), // Play the timeline when pressing down
        onDrag: (self) => { // Update the horizontal position while dragging
            total += self.deltaX
            xTo(total)
        },
        onRelease: () => { // Reverse the timeline when releasing the pointer
            tl.reverse()
        },
        onStop: () => { // Reverse the timeline when the interaction stops
            tl.reverse()
        },
    })

    gsap.ticker.add(tick);

    // TO GO FURTHER: You can add an offscreen check and kill Observer when necessary
});

function tick(time, deltaTime) {
    total -= deltaTime / 40  // Adjust the speed of automatic scrolling    
    xTo(total)
}




// Image on word hover effect
window.addEventListener("DOMContentLoaded", () => {

    const root = document.querySelector('.mwg_effect036')

    const mediasUrl = []

    root.querySelectorAll('.medias img').forEach(el => {
        mediasUrl.push(el.getAttribute('src'))
    })

    const hovers = root.querySelectorAll('.h3.u-text-center .text_highlight_span')
    hovers.forEach(el => {
        el.addEventListener('mouseenter', () => {
            // Calculate the coordinates of the middle of the word
            const bound = el.getBoundingClientRect()
            const distX = bound.left + bound.width / 2
            const distY = bound.top + bound.height / 2 + window.scrollY

            // Pass the coordinates to the function to display images
            displayImages(distX, distY)
        })
        el.addEventListener('mouseleave', () => {
            // Stop the scrolling of images
            stopImages()
        })
    })

    let interval, incr = 0
    function displayImages(distX, distY) {
        interval = setInterval(() => {
            // Create an image
            let image = document.createElement("img")
            // Assign it a URL
            image.src = mediasUrl[incr % mediasUrl.length]
            // Add this image to the DOM
            root.appendChild(image);

            gsap.fromTo(image, {
                // Move the image backward by half its size so it’s centered
                xPercent: -50,
                yPercent: -50,
                x: distX + (Math.random() - 0.5) * 50,
                y: distY + 50, // Second parameter + 50px offset
                rotation: (Math.random() - 0.5) * 10
            }, {
                y: distY, // Cancel the 50px distance: move upwards as it appears
                rotation: (Math.random() - 0.5) * 10,
                ease:'back.out(3)',
                duration: 0.4,
            })

            gsap.to(image, {
                scale: 0.9,
                delay: 0.5, // Wait half a second before playing the animation
                duration: 0.2,
                ease:'back.in(2)',
                onComplete: () => {
                    root.removeChild(image) // Image is removed from the DOM
                }
            })

            incr++
        }, 150)
    }

    function stopImages() {
        clearInterval(interval)
    }
})








// Bunny player
function initBunnyPlayerBasic() {
  document.querySelectorAll('[data-bunny-player-init]').forEach(function(player) {
    var src = player.getAttribute('data-player-src');
    if (!src) return;

    var video = player.querySelector('video');
    if (!video) return;

    try { video.pause(); } catch(_) {}
    try { video.removeAttribute('src'); video.load(); } catch(_) {}

    // Attribute helpers
    function setStatus(s) {
      if (player.getAttribute('data-player-status') !== s) {
        player.setAttribute('data-player-status', s);
      }
    }
    function setActivated(v) { player.setAttribute('data-player-activated', v ? 'true' : 'false'); }
    if (!player.hasAttribute('data-player-activated')) setActivated(false);

    // Flags
    var updateSize = player.getAttribute('data-player-update-size'); // "true" | "cover" | null
    var lazyMode   = player.getAttribute('data-player-lazy');        // "true" | "meta" | null
    var isLazyTrue = lazyMode === 'true';
    var isLazyMeta = lazyMode === 'meta';
    var autoplay   = player.getAttribute('data-player-autoplay') === 'true';

    // Used to suppress 'ready' flicker when user just pressed play in lazy modes
    var pendingPlay = false;

    // Autoplay forces muted + loop; IO will drive play/pause
    video.muted = !!autoplay;
    if (autoplay) video.loop = true;

    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.playsInline = true;
    if (typeof video.disableRemotePlayback !== 'undefined') video.disableRemotePlayback = true;
    if (autoplay) video.autoplay = false;

    var isSafariNative = !!video.canPlayType('application/vnd.apple.mpegurl');
    var canUseHlsJs    = !!(window.Hls && Hls.isSupported()) && !isSafariNative;

    // Minimal ratio fetch when requested (and not already handled by lazy meta)
    if (updateSize === 'true' && !isLazyMeta) {
      if (isLazyTrue) {
        // Do nothing: no fetch, no <video> touch when lazy=true
      } else {
        var prev = video.preload;
        video.preload = 'metadata';
        var onMeta2 = function() {
          setBeforeRatio(player, updateSize, video.videoWidth, video.videoHeight);
          video.removeEventListener('loadedmetadata', onMeta2);
          video.preload = prev || '';
        };
        video.addEventListener('loadedmetadata', onMeta2, { once: true });
        video.src = src;
      }
    }

    //  Lazy meta fetch (duration + aspect) without attaching playback
    function fetchMetaOnce() {
      getSourceMeta(src, canUseHlsJs).then(function(meta){
        if (meta.width && meta.height) setBeforeRatio(player, updateSize, meta.width, meta.height);
        readyIfIdle(player, pendingPlay);
      });
    }

    // Attach media only once (for actual playback)
    var isAttached = false;
    var userInteracted = false;
    var lastPauseBy = ''; // 'io' | 'manual' | ''
    function attachMediaOnce() {
      if (isAttached) return;
      isAttached = true;

      if (player._hls) { try { player._hls.destroy(); } catch(_) {} player._hls = null; }

      if (isSafariNative) {
        video.preload = (isLazyTrue || isLazyMeta) ? 'auto' : video.preload;
        video.src = src;
        video.addEventListener('loadedmetadata', function() {
          readyIfIdle(player, pendingPlay);
          if (updateSize === 'true') setBeforeRatio(player, updateSize, video.videoWidth, video.videoHeight);
        }, { once: true });
      } else if (canUseHlsJs) {
        var hls = new Hls({ maxBufferLength: 10 });
        hls.attachMedia(video);
        hls.on(Hls.Events.MEDIA_ATTACHED, function() { hls.loadSource(src); });
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
          readyIfIdle(player, pendingPlay);
          if (updateSize === 'true') {
            var lvls = hls.levels || [];
            var best = bestLevel(lvls);
            if (best && best.width && best.height) setBeforeRatio(player, updateSize, best.width, best.height);
          }
        });
        player._hls = hls;
      } else {
        // Fallback if not HLS
        video.src = src;
      }
    }

    // Initialize based on lazy mode
    if (isLazyMeta) {
      if (updateSize === 'true') fetchMetaOnce();
      video.preload = 'none';
    } else if (isLazyTrue) {
      video.preload = 'none';
    } else {
      attachMediaOnce();
    }

    // Toggle play/pause
    function togglePlay() {
      userInteracted = true;
      if (video.paused || video.ended) {
        if ((isLazyTrue || isLazyMeta) && !isAttached) attachMediaOnce();
        pendingPlay = true;
        lastPauseBy = '';
        setStatus('loading');
        safePlay(video);
      } else {
        lastPauseBy = 'manual';
        video.pause();
      }
    }
    
    // Toggle mute
    function toggleMute() {
      video.muted = !video.muted;
      player.setAttribute('data-player-muted', video.muted ? 'true' : 'false');
    }

    // Controls (delegated)
    player.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-player-control]');
      if (!btn || !player.contains(btn)) return;
      var type = btn.getAttribute('data-player-control');
      if (type === 'play' || type === 'pause' || type === 'playpause') togglePlay();
      else if (type === 'mute') toggleMute();
    });

    // Media event wiring
    video.addEventListener('play', function() { setActivated(true); setStatus('playing'); });
    video.addEventListener('playing', function() { pendingPlay = false; setStatus('playing'); });
    video.addEventListener('pause', function() { pendingPlay = false; setStatus('paused'); });
    video.addEventListener('waiting', function() { setStatus('loading'); });
    video.addEventListener('canplay', function() { readyIfIdle(player, pendingPlay); });
    video.addEventListener('ended', function() { pendingPlay = false; setStatus('paused'); setActivated(false); });

    // Ensure aspect ratio updates as soon as real dimensions exist (lazy=true path included)
    var ratioSet = false;
    function maybeSetRatioOnce() {
      if (ratioSet || updateSize !== 'true') return;
      var before = player.querySelector('[data-player-before]');
      if (!before) return;
      if (video.videoWidth && video.videoHeight) {
        before.style.paddingTop = (video.videoHeight / video.videoWidth * 100) + '%';
        ratioSet = true;
      }
    }
    video.addEventListener('loadedmetadata', function(){ maybeSetRatioOnce(); });
    video.addEventListener('loadeddata',    function(){ maybeSetRatioOnce(); });
    video.addEventListener('playing',       function(){ maybeSetRatioOnce(); });

    // Hover (basic: active on enter, idle on leave)
    function setHover(state) {
      if (player.getAttribute('data-player-hover') !== state) {
        player.setAttribute('data-player-hover', state);
      }
    }
    player.addEventListener('pointerenter', function(){ setHover('active'); });
    player.addEventListener('pointerleave', function(){ setHover('idle'); });

    // In-view auto play/pause (only when autoplay is true)
    if (autoplay) {
      var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          var inView = entry.isIntersecting && entry.intersectionRatio > 0;
          if (inView) {
            if ((isLazyTrue || isLazyMeta) && !isAttached) attachMediaOnce();
            if ((lastPauseBy === 'io') || (video.paused && lastPauseBy !== 'manual')) {
              setStatus('loading');
              if (video.paused) togglePlay();
              lastPauseBy = '';
            }
          } else {
            if (!video.paused && !video.ended) {
              lastPauseBy = 'io';
              video.pause();
            }
          }
        });
      }, { threshold: 0.1 });
      io.observe(player);
    }
  });

  // Helper: Ready status guard
  function readyIfIdle(player, pendingPlay) {
    if (!pendingPlay &&
        player.getAttribute('data-player-activated') !== 'true' &&
        player.getAttribute('data-player-status') === 'idle') {
      player.setAttribute('data-player-status', 'ready');
    }
  }

  // Helper: Ratio setter
  function setBeforeRatio(player, updateSize, w, h) {
    if (updateSize !== 'true' || !w || !h) return;
    var before = player.querySelector('[data-player-before]');
    if (!before) return;
    before.style.paddingTop = (h / w * 100) + '%';
  }
  function maybeSetRatioFromVideo(player, updateSize, video) {
    if (updateSize !== 'true') return;
    var before = player.querySelector('[data-player-before]');
    if (!before) return;
    var hasPad = before.style.paddingTop && before.style.paddingTop !== '0%';
    if (!hasPad && video.videoWidth && video.videoHeight) {
      setBeforeRatio(player, updateSize, video.videoWidth, video.videoHeight);
    }
  }

  // Helper: best HLS level by resolution
  function bestLevel(levels) {
    if (!levels || !levels.length) return null;
    return levels.reduce(function(a, b) { return ((b.width||0) > (a.width||0)) ? b : a; }, levels[0]);
  }

  // Helper: safe programmatic play
  function safePlay(video) {
    var p = video.play();
    if (p && typeof p.then === 'function') p.catch(function(){});
  }

  // Helper: simple URL resolver
  function resolveUrl(base, rel) { try { return new URL(rel, base).toString(); } catch(_) { return rel; } }

  // Helper: unified meta fetch (hls.js or native fetch)
  function getSourceMeta(src, useHlsJs) {
    return new Promise(function(resolve) {
      if (useHlsJs && window.Hls && Hls.isSupported()) {
        try {
          var tmp = new Hls();
          var out = { width: 0, height: 0, duration: NaN };

          tmp.on(Hls.Events.MANIFEST_PARSED, function(e, data) {
            var lvls = (data && data.levels) || tmp.levels || [];
            var best = bestLevel(lvls);
            if (best && best.width && best.height) { out.width = best.width; out.height = best.height; }
          });
          tmp.on(Hls.Events.LEVEL_LOADED, function(e, data) {
            if (data && data.details && isFinite(data.details.totalduration)) { out.duration = data.details.totalduration; }
          });
          tmp.on(Hls.Events.ERROR, function(){ try { tmp.destroy(); } catch(_) {} resolve(out); });
          tmp.on(Hls.Events.LEVEL_LOADED, function(){ try { tmp.destroy(); } catch(_) {} resolve(out); });

          tmp.loadSource(src);
          return;
        } catch(_) { resolve({ width:0, height:0, duration:NaN }); return; }
      }

      function parseMaster(masterText) {
        var lines = masterText.split(/\r?\n/);
        var bestW = 0, bestH = 0, firstMedia = null, lastInf = null;
        for (var i=0;i<lines.length;i++) {
          var line = lines[i];
          if (line.indexOf('#EXT-X-STREAM-INF:') === 0) {
            lastInf = line;
          } else if (lastInf && line && line[0] !== '#') {
            if (!firstMedia) firstMedia = line.trim();
            var m = /RESOLUTION=(\d+)x(\d+)/.exec(lastInf);
            if (m) {
              var w = parseInt(m[1],10), h = parseInt(m[2],10);
              if (w > bestW) { bestW = w; bestH = h; }
            }
            lastInf = null;
          }
        }
        return { bestW: bestW, bestH: bestH, media: firstMedia };
      }
      function sumDuration(mediaText) {
        var dur = 0, re = /#EXTINF:([\d.]+)/g, m;
        while ((m = re.exec(mediaText))) dur += parseFloat(m[1]);
        return dur;
      }

      fetch(src, { credentials: 'omit', cache: 'no-store' }).then(function(r){
        if (!r.ok) throw new Error('master');
        return r.text();
      }).then(function(master){
        var info = parseMaster(master);
        if (!info.media) { resolve({ width: info.bestW||0, height: info.bestH||0, duration: NaN }); return; }
        var mediaUrl = resolveUrl(src, info.media);
        return fetch(mediaUrl, { credentials: 'omit', cache: 'no-store' }).then(function(r){
          if (!r.ok) throw new Error('media');
          return r.text();
        }).then(function(mediaText){
          resolve({ width: info.bestW||0, height: info.bestH||0, duration: sumDuration(mediaText) });
        });
      }).catch(function(){ resolve({ width:0, height:0, duration:NaN }); });
    });
  }
}

// Initialize Bunny HTML HLS Player (Basic)
document.addEventListener('DOMContentLoaded', function() {
  initBunnyPlayerBasic();
});