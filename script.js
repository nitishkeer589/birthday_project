/* ==========================================================================
   BIRTHDAY SURPRISE WEBSITE - PERFECT ALL-IN-ONE SCRIPT (FIXED AUTO-PLAY)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ========================================================================
     SONG LIST & AUDIO INITS
     ======================================================================== */
  const bgAudio = document.getElementById('bg-audio');
  const audio = document.getElementById("player-audio");
  const playBtn = document.getElementById("player-play");

  if (audio && playBtn) {
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      }
    });
  }

  const songs = [
    { title: "Koi Itna Khubsurat", artist: "Arijit Singh", cover: "media/cover.png", src: "media/koi-itna-khubsurat.mp3" },
    { title: "Me Hu Sath Tere", artist: "Arijit Singh", cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop", src: "" },
    { title: "Tum Ho To Subah Nai He", artist: "Vishal Mishra", cover: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?w=300&h=300&fit=crop", src: "" },
    { title: "Tere Liye Mandir Jao", artist: "Ravzz Musica", cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=300&h=300&fit=crop", src: "" },
    { title: "Kitab Likhunga", artist: "Mr Dutt & Vipin Foji", cover: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=300&h=300&fit=crop", src: "" },
    { title: "Aap Ka Ye Kahna Banta ", artist: "Sheheryer Rehan", cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop", src: "" }
  ];

  let currentTrack = 0;
  let isPlaying = false;

  /* ========================================================================
   FLOATING MUSIC PLAYER LOGIC
   ======================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const bgAudio = document.getElementById('bg-audio');
  const musicToggle = document.getElementById('music-toggle');
  const musicPanel = document.getElementById('music-panel');
  
  // Controls
  const fmPlayBtn = document.getElementById('fm-play');
  const fmPrevBtn = document.getElementById('fm-prev');
  const fmNextBtn = document.getElementById('fm-next');
  const fmVolume = document.getElementById('fm-volume');
  
  // Info Elements
  const fmCover = document.getElementById('fm-cover');
  const fmTitle = document.getElementById('fm-title');
  const fmArtist = document.getElementById('fm-artist');

  // गानों की लिस्ट (यहाँ आप अपने .mp3 गानों के सही पाथ डाल दें)
  const songs = [
    { title: "Koi Itna Khubsurat", artist: "Arijit Singh", cover: "media/cover.png", src: "media/koi-itna-khubsurat.mp3" },
    { title: "Me Hu Sath Tere", artist: "Arijit Singh", cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop", src: "media/song2.mp3" },
    { title: "Tum Ho To Subah Nai He", artist: "Vishal Mishra", cover: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?w=300&h=300&fit=crop", src: "media/song3.mp3" },
    { title: "Tere Liye Mandir Jao", artist: "Ravzz Musica", cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=300&h=300&fit=crop", src: "media/song4.mp3" },
    { title: "Kitab Likhunga", artist: "Mr Dutt & Vipin Foji", cover: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=300&h=300&fit=crop", src: "media/song5.mp3" },
    { title: "Aap Ka Ye Kahna Banta", artist: "Sheheryer Rehan", cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop", src: "media/song6.mp3" }
  ];

  let currentTrack = 0;

  // 1. गाना लोड करने का फ़ंक्शन
  function loadTrack(index) {
    const track = songs[index];
    if (bgAudio && track) {
      bgAudio.src = track.src;
      fmTitle.textContent = track.title;
      fmArtist.textContent = track.artist;
      fmCover.src = track.cover;
    }
  }

  // शुरुआत में पहला गाना लोड करें
  loadTrack(currentTrack);

  // 2. पैनल को ओपन/क्लोज़ (Toggle) करना
  if (musicToggle && musicPanel) {
    musicToggle.addEventListener('click', () => {
      musicPanel.classList.toggle('active'); // CSS में .music-panel.active { display: block; या opacity: 1; } होना चाहिए
    });
  }

  // 3. प्ले और पॉज़ (Play / Pause) फंक्शनलिटी
  function togglePlay() {
    if (!bgAudio.src || bgAudio.getAttribute('src') === "") {
      alert("इस गाने का ऑडियो पाथ खाली है!");
      return;
    }

    if (bgAudio.paused) {
      bgAudio.play().then(() => {
        fmPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        fmCover.classList.add('spinning'); // कवर इमेज घूमने लगेगी
      }).catch(err => console.log("Playback error: ", err));
    } else {
      bgAudio.pause();
      fmPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      fmCover.classList.remove('spinning'); // घूमना बंद
    }
  }

  if (fmPlayBtn) {
    fmPlayBtn.addEventListener('click', togglePlay);
  }

  // 4. अगला गाना (Next Song)
  if (fmNextBtn) {
    fmNextBtn.addEventListener('click', () => {
      currentTrack = (currentTrack + 1) % songs.length;
      loadTrack(currentTrack);
      bgAudio.play().then(() => {
        fmPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        fmCover.classList.add('spinning');
      });
    });
  }

  // 5. पिछला गाना (Previous Song)
  if (fmPrevBtn) {
    fmPrevBtn.addEventListener('click', () => {
      currentTrack = (currentTrack - 1 + songs.length) % songs.length;
      loadTrack(currentTrack);
      bgAudio.play().then(() => {
        fmPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        fmCover.classList.add('spinning');
      });
    });
  }

  // 6. जब गाना अपने आप खत्म हो जाए तो अगला गाना चले
  if (bgAudio) {
    bgAudio.addEventListener('ended', () => {
      currentTrack = (currentTrack + 1) % songs.length;
      loadTrack(currentTrack);
      bgAudio.play();
    });
  }

  // 7. वॉल्यूम कंट्रोल (Volume Control)
  if (fmVolume) {
    fmVolume.addEventListener('input', (e) => {
      bgAudio.volume = e.target.value;
    });
  }
});
  /* ========================================================================
     LOADING SCREEN (Prevents premature play)
     ======================================================================== */
  const loadingScreen = document.getElementById('loading-screen');
  const enterBtn = document.getElementById('enter-btn');
  const mainContent = document.getElementById('main-content');
  const loaderSparkles = document.getElementById('loader-sparkles');

  if (loaderSparkles) {
    for (let i = 0; i < 30; i++) {
      const s = document.createElement('div');
      s.className = 'sparkle';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.animationDelay = (Math.random() * 2.5) + 's';
      loaderSparkles.appendChild(s);
    }
  }

  if (enterBtn && loadingScreen && mainContent) {
    enterBtn.addEventListener('click', () => {
      loadingScreen.classList.add('fade-out');
      mainContent.classList.remove('hidden');
      document.body.style.overflow = 'auto';

      setTimeout(() => {
        loadingScreen.style.display = 'none';
        if (typeof AOS !== 'undefined') AOS.refresh();
      }, 800);

      // Plays only after user explicitly interacts
      if (bgAudio && songs[currentTrack] && songs[currentTrack].src) {
        bgAudio.src = songs[currentTrack].src;
        bgAudio.volume = 0.5;
        bgAudio.play().catch(() => {});
        updateMusicPlayState(true);
      }
    });
  }

  /* ========================================================================
     INIT AOS ANIMATIONS
     ======================================================================== */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic'
    });
  }

  /* ========================================================================
     CURSOR HEART TRAIL
     ======================================================================== */
  const cursorCanvas = document.getElementById('cursor-canvas');
  if (cursorCanvas) {
    const cCtx = cursorCanvas.getContext('2d');
    let cursorParticles = [];

    function resizeCursorCanvas() {
      cursorCanvas.width = window.innerWidth;
      cursorCanvas.height = window.innerHeight;
    }
    resizeCursorCanvas();
    window.addEventListener('resize', resizeCursorCanvas);

    let lastTrailTime = 0;
    window.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastTrailTime > 60) {
        cursorParticles.push({
          x: e.clientX,
          y: e.clientY,
          life: 1,
          size: Math.random() * 8 + 8,
          vy: -(Math.random() * 0.6 + 0.3)
        });
        lastTrailTime = now;
      }
    });

    function drawHeartShape(ctx, x, y, size, alpha) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size / 20, size / 20);
      ctx.beginPath();
      ctx.moveTo(0, 4);
      ctx.bezierCurveTo(0, 2, -2, 0, -5, 0);
      ctx.bezierCurveTo(-9, 0, -9, 5, -9, 5);
      ctx.bezierCurveTo(-9, 9, -5, 12, 0, 16);
      ctx.bezierCurveTo(5, 12, 9, 9, 9, 5);
      ctx.bezierCurveTo(9, 5, 9, 0, 5, 0);
      ctx.bezierCurveTo(2, 0, 0, 2, 0, 4);
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 111, 181, ${alpha})`;
      ctx.shadowColor = 'rgba(255, 158, 207, 0.8)';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    }

    function animateCursorTrail() {
      cCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
      cursorParticles.forEach(p => {
        drawHeartShape(cCtx, p.x, p.y, p.size, p.life);
        p.y += p.vy;
        p.life -= 0.02;
      });
      cursorParticles = cursorParticles.filter(p => p.life > 0);
      requestAnimationFrame(animateCursorTrail);
    }
    animateCursorTrail();
  }

  /* ========================================================================
     GLOBAL FLOATING HEARTS BACKGROUND
     ======================================================================== */
  const heartsBg = document.getElementById('floating-hearts-bg');
  if (heartsBg) {
    for (let i = 0; i < 18; i++) {
      const h = document.createElement('i');
      h.className = 'fa-solid fa-heart bg-heart';
      h.style.left = Math.random() * 100 + '%';
      h.style.fontSize = (Math.random() * 18 + 10) + 'px';
      h.style.animationDuration = (Math.random() * 10 + 12) + 's';
      h.style.animationDelay = (Math.random() * 10) + 's';
      heartsBg.appendChild(h);
    }
  }

  /* ========================================================================
     HERO SECTION PARTICLES & HEARTS
     ======================================================================== */
  const heroParticles = document.getElementById('hero-particles');
  if (heroParticles) {
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.className = 'hero-particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.animationDuration = (Math.random() * 4 + 4) + 's';
      p.style.animationDelay = (Math.random() * 5) + 's';
      heroParticles.appendChild(p);
    }
  }

  const heroHearts = document.getElementById('hero-hearts');
  if (heroHearts) {
    for (let i = 0; i < 12; i++) {
      const h = document.createElement('i');
      h.className = 'fa-solid fa-heart hero-heart-float';
      h.style.left = Math.random() * 100 + '%';
      h.style.fontSize = (Math.random() * 20 + 14) + 'px';
      h.style.animationDuration = (Math.random() * 6 + 6) + 's';
      h.style.animationDelay = (Math.random() * 8) + 's';
      heroHearts.appendChild(h);
    }
  }

  /* ========================================================================
     HERO TYPING ANIMATION
     ======================================================================== */
  const typingTextEl = document.getElementById('typing-text');
  if (typingTextEl) {
    const heroPhrases = [
      "My favorite person in the whole world...",
      "The reason I believe in love...",
      "My today, my tomorrow, my always..."
    ];
    let heroPhraseIndex = 0;
    let heroCharIndex = 0;
    let heroDeleting = false;

    function typeHero() {
      const phrase = heroPhrases[heroPhraseIndex];
      if (!heroDeleting) {
        typingTextEl.textContent = phrase.substring(0, heroCharIndex + 1);
        heroCharIndex++;
        if (heroCharIndex === phrase.length) {
          heroDeleting = true;
          setTimeout(typeHero, 1800);
          return;
        }
      } else {
        typingTextEl.textContent = phrase.substring(0, heroCharIndex - 1);
        heroCharIndex--;
        if (heroCharIndex === 0) {
          heroDeleting = false;
          heroPhraseIndex = (heroPhraseIndex + 1) % heroPhrases.length;
        }
      }
      setTimeout(typeHero, heroDeleting ? 35 : 60);
    }
    typeHero();
  }

  /* ========================================================================
     ROMANTIC MESSAGE TYPING WITH INTERSECTION OBSERVER
     ======================================================================== */
  const typingMessageEl = document.getElementById('typing-message');
  const messageSec = document.getElementById('message');
  if (typingMessageEl && messageSec) {
    const romanticMessage = "🎂👑💖 Happy Birthday to my wife, my jaan, my everything, and my forever life partner. 🌹✨ You turned my ordinary life into the most beautiful love story I could have ever dreamed of. 💞🌍 I hope your day is as magical, warm, and filled with happiness as the love you bring into my life every single day. 🎁🎈🦋 Thank you for being my greatest blessing, my strength, my peace, and my home. 🏡💕 🌷💫 ❤️♾️💍🌹";
    let messageTyped = false;

    function typeMessage() {
      if (messageTyped) return;
      messageTyped = true;
      let i = 0;
      function step() {
        if (i <= romanticMessage.length) {
          typingMessageEl.textContent = romanticMessage.substring(0, i);
          i++;
          setTimeout(step, 28);
        }
      }
      step();
    }

    const messageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeMessage();
        }
      });
    }, { threshold: 0.4 });
    messageObserver.observe(messageSec);
  }

  /* ========================================================================
     ADVANCED INTEGRATED MUSIC MODULE
     ======================================================================== */
  const musicToggle = document.getElementById('music-toggle');
  const musicPanel = document.getElementById('music-panel');
  const fmCover = document.getElementById('fm-cover');
  const fmTitle = document.getElementById('fm-title');
  const fmArtist = document.getElementById('fm-artist');
  const fmPlay = document.getElementById('fm-play');
  const fmPrev = document.getElementById('fm-prev');
  const fmNext = document.getElementById('fm-next');
  const fmVolume = document.getElementById('fm-volume');

  const playerCover = document.getElementById('player-cover');
  const playerTitle = document.getElementById('player-title');
  const playerArtist = document.getElementById('player-artist');
  const playerPlay = document.getElementById('player-play');
  const playerNext = document.getElementById('player-next');
  const playerPrev = document.getElementById('player-prev');
  const playerProgress = document.getElementById('player-progress');
  const playerCurrent = document.getElementById('player-current');
  const playerDuration = document.getElementById('player-duration');
  const playerVolume = document.getElementById('player-volume');
  const playerDisc = document.getElementById('player-disc');

  function loadTrack(index, autoplay) {
    if (!bgAudio) return;
    currentTrack = ((index % songs.length) + songs.length) % songs.length;
    const song = songs[currentTrack];

    if (fmCover) fmCover.src = song.cover;
    if (fmTitle) fmTitle.textContent = song.title;
    if (fmArtist) fmArtist.textContent = song.artist;

    if (playerCover) playerCover.src = song.cover;
    if (playerTitle) playerTitle.textContent = song.title;
    if (playerArtist) playerArtist.textContent = song.artist;
    if (playerProgress) playerProgress.value = 0;
    if (playerCurrent) playerCurrent.textContent = '0:00';
    if (playerDuration) playerDuration.textContent = '0:00';

    document.querySelectorAll('.play-mini').forEach(btn => {
      btn.classList.remove('playing');
      btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    });

    if (song.src) {
      bgAudio.src = song.src;
      if (autoplay) {
        bgAudio.play().then(() => updateMusicPlayState(true)).catch(() => updateMusicPlayState(false));
      } else {
        updateMusicPlayState(false);
      }
    } else {
      bgAudio.removeAttribute('src');
      updateMusicPlayState(false);
    }
  }

  function updateMusicPlayState(playing) {
    isPlaying = playing;
    if (fmPlay) {
      fmPlay.innerHTML = playing ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
    }
    if (musicToggle) musicToggle.classList.toggle('playing', playing);

    if (playerPlay) {
      playerPlay.innerHTML = playing ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
    }
    if (playerDisc) playerDisc.classList.toggle('spin', playing);
    if (fmCover) fmCover.classList.toggle('is-playing', playing);

    const activeMini = document.querySelector(`.play-mini[data-track="${currentTrack}"]`);
    document.querySelectorAll('.play-mini').forEach(btn => {
      btn.classList.remove('playing');
      btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    });
    if (activeMini && playing) {
      activeMini.classList.add('playing');
      activeMini.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
  }

  function togglePlay() {
    if (!bgAudio) return;
    if (!bgAudio.src) {
      loadTrack(currentTrack, true);
      return;
    }
    if (bgAudio.paused) {
      bgAudio.play().then(() => updateMusicPlayState(true)).catch(() => {});
    } else {
      bgAudio.pause();
      updateMusicPlayState(false);
    }
  }

  if (bgAudio) {
    loadTrack(0, false);

    if (musicToggle) musicToggle.addEventListener('click', () => musicPanel.classList.toggle('open'));
    if (fmPlay) fmPlay.addEventListener('click', togglePlay);
    if (fmNext) fmNext.addEventListener('click', () => loadTrack(currentTrack + 1, isPlaying));
    if (fmPrev) fmPrev.addEventListener('click', () => loadTrack(currentTrack - 1, isPlaying));
    if (fmVolume) {
      fmVolume.addEventListener('input', (e) => {
        bgAudio.volume = e.target.value;
        if (playerVolume) playerVolume.value = e.target.value;
      });
    }

    if (playerPlay) playerPlay.addEventListener('click', togglePlay);
    if (playerNext) playerNext.addEventListener('click', () => loadTrack(currentTrack + 1, isPlaying));
    if (playerPrev) playerPrev.addEventListener('click', () => loadTrack(currentTrack - 1, isPlaying));
    if (playerVolume) {
      playerVolume.addEventListener('input', (e) => {
        bgAudio.volume = e.target.value;
        if (fmVolume) fmVolume.value = e.target.value;
      });
    }
    if (playerProgress) {
      playerProgress.addEventListener('input', (e) => {
        if (bgAudio.duration) bgAudio.currentTime = (e.target.value / 100) * bgAudio.duration;
      });
    }

    bgAudio.addEventListener('timeupdate', () => {
      if (bgAudio.duration) {
        const pct = (bgAudio.currentTime / bgAudio.duration) * 100;
        if (playerProgress) playerProgress.value = pct;
        if (playerCurrent) playerCurrent.textContent = formatTime(bgAudio.currentTime);
      }
    });

    bgAudio.addEventListener('loadedmetadata', () => {
      if (playerDuration) playerDuration.textContent = formatTime(bgAudio.duration);
    });

    bgAudio.addEventListener('ended', () => loadTrack(currentTrack + 1, isPlaying));
  }

  // Gallery mini play buttons logic safely scoped inside DOMContentLoaded
  document.querySelectorAll('.play-mini').forEach(btn => {
    btn.addEventListener('click', () => {
      const trackIndex = parseInt(btn.dataset.track, 10);
      if (trackIndex === currentTrack && isPlaying) {
        if (bgAudio) bgAudio.pause();
        updateMusicPlayState(false);
      } else {
        loadTrack(trackIndex, true);
      }
    });
  });

  const audioPlayerEl = document.getElementById("audioPlayer");
  const miniButtons = document.querySelectorAll(".play-mini");
  if (audioPlayerEl && miniButtons.length > 0) {
    miniButtons.forEach(button => {
      button.addEventListener("click", function () {
        const songPath = this.getAttribute("data-song");
        if (audioPlayerEl.getAttribute("data-current-song") === songPath && !audioPlayerEl.paused) {
          audioPlayerEl.pause();
          this.innerHTML = '<i class="fa-solid fa-play"></i>';
          return;
        }
        miniButtons.forEach(btn => btn.innerHTML = '<i class="fa-solid fa-play"></i>');
        audioPlayerEl.src = songPath;
        audioPlayerEl.setAttribute("data-current-song", songPath);
        audioPlayerEl.play().catch(() => {});
        this.innerHTML = '<i class="fa-solid fa-pause"></i>';
      });
    });
    audioPlayerEl.addEventListener("ended", () => {
      miniButtons.forEach(btn => btn.innerHTML = '<i class="fa-solid fa-play"></i>');
    });
  }

  function formatTime(sec) {
    if (!sec || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  document.addEventListener('click', (e) => {
    const floatMusicWrap = document.getElementById('floating-music');
    if (floatMusicWrap && !floatMusicWrap.contains(e.target) && musicPanel) {
      musicPanel.classList.remove('open');
    }
  });

  /* ========================================================================
     20 REASONS GRID DISPENSER
     ======================================================================== */
  const reasonsGrid = document.getElementById('reasons-grid');
  if (reasonsGrid) {
    const reasons = [
      "Your smile brightens my darkest days. ❤️", "You make every moment feel special. 🌹",
      "Your love gives me strength. 💕", "You understand me without words. ✨",
      "Your kindness inspires me daily. 🥰", "You are my peace in every storm. 🌷",
      "Your laughter is my favorite melody. 🎶", "You make my world more beautiful. 🌸",
      "Your support means everything to me. 💖", "You believe in me unconditionally. 🌟",
      "Your hugs feel like home. 🤗", "You bring joy into my life. 🌺",
      "Your caring heart is priceless. 💝", "You make ordinary days magical. ✨",
      "Your patience amazes me. 🌼", "You stand beside me through everything. 🤍",
      "You are my greatest blessing. 🙏❤️", "Life feels complete with you. 💍",
      "You are my today and forever. 🌹", "Simply because you are you. 👑❤️"
    ];

    reasons.forEach((reason, i) => {
      const col = document.createElement('div');
      col.className = 'col-6 col-md-4 col-lg-3';
      col.setAttribute('data-aos', 'zoom-in');
      col.setAttribute('data-aos-delay', String((i % 4) * 80));
      col.innerHTML = `
        <div class="reason-card" data-index="${i}">
          <div class="reason-card-inner">
            <div class="reason-front"><span><i class="fa-solid fa-heart"></i></span>Reason #${i + 1}</div>
            <div class="reason-back">${reason}</div>
          </div>
        </div>`;
      reasonsGrid.appendChild(col);
    });

    reasonsGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.reason-card');
      if (!card) return;
      const wasFlipped = card.classList.contains('flipped');
      card.classList.toggle('flipped');
      if (!wasFlipped) spawnHeartBurst(card);
    });
  }

  function spawnHeartBurst(container) {
    const rect = container.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
      const heart = document.createElement('i');
      heart.className = 'fa-solid fa-heart heart-burst';
      const angle = (Math.PI * 2 * i) / 8;
      const dist = 60 + Math.random() * 30;
      heart.style.setProperty('--bx', Math.cos(angle) * dist + 'px');
      heart.style.setProperty('--by', Math.sin(angle) * dist + 'px');
      heart.style.left = (rect.width / 2) + 'px';
      heart.style.top = (rect.height / 2) + 'px';
      heart.style.color = ['#ff6fb5', '#8b5cf6', '#ffd6a5', '#f4c2c2'][i % 4];
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 1000);
    }
  }

  /* ========================================================================
     RELATIONSHIP COUNTER
     ======================================================================== */
  const cYears = document.getElementById('c-years');
  if (cYears) {
    const relationshipStartDate = new Date('2023-05-15T00:00:00');
    function updateCounter() {
      const now = new Date();
      let years = now.getFullYear() - relationshipStartDate.getFullYear();
      let months = now.getMonth() - relationshipStartDate.getMonth();
      let days = now.getDate() - relationshipStartDate.getDate();

      if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      const diff = now - relationshipStartDate;
      const totalSeconds = Math.floor(diff / 1000);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = totalSeconds % 60;

      cYears.textContent = years;
      document.getElementById('c-months').textContent = months;
      document.getElementById('c-days').textContent = days;
      document.getElementById('c-hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('c-minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('c-seconds').textContent = String(seconds).padStart(2, '0');
    }
    updateCounter();
    setInterval(updateCounter, 1000);
  }

  /* ========================================================================
     QUOTES INFINITE SLIDER
     ======================================================================== */
  const quoteSlides = document.querySelectorAll('.quote-slide');
  const quotesDots = document.getElementById('quotes-dots');
  if (quoteSlides.length > 0 && quotesDots) {
    let currentQuote = 0;
    quoteSlides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'quote-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => showQuote(i));
      quotesDots.appendChild(dot);
    });

    const dots = quotesDots.querySelectorAll('.quote-dot');
    function showQuote(index) {
      quoteSlides[currentQuote].classList.remove('active');
      dots[currentQuote].classList.remove('active');
      currentQuote = index;
      quoteSlides[currentQuote].classList.add('active');
      dots[currentQuote].classList.add('active');
    }

    setInterval(() => {
      const next = (currentQuote + 1) % quoteSlides.length;
      showQuote(next);
    }, 4500);
  }

  /* ========================================================================
     VIDEO LIGHTBOX MODAL
     ======================================================================== */
  const videoLightbox = document.getElementById('video-lightbox');
  const videoIframe = document.getElementById('video-iframe');
  const videoLightboxClose = document.getElementById('video-lightbox-close');

  if (videoLightbox && videoIframe) {
    document.querySelectorAll('.video-card').forEach(card => {
      card.addEventListener('click', () => {
        const videoUrl = card.dataset.video;
        videoIframe.src = videoUrl + '?autoplay=1';
        videoLightbox.classList.add('open');
      });
    });

    if (videoLightboxClose) videoLightboxClose.addEventListener('click', closeVideoLightbox);
    videoLightbox.addEventListener('click', (e) => {
      if (e.target === videoLightbox) closeVideoLightbox();
    });
  }

  function closeVideoLightbox() {
    if (videoLightbox) videoLightbox.classList.remove('open');
    if (videoIframe) videoIframe.src = '';
  }

  /* ========================================================================
     WISHES WALL DECORATION
     ======================================================================== */
  document.querySelectorAll('.wish-card').forEach(card => {
    for (let i = 0; i < 3; i++) {
      const h = document.createElement('i');
      h.className = 'fa-solid fa-heart wish-heart';
      h.style.left = (15 + Math.random() * 70) + '%';
      h.style.animationDelay = (Math.random() * 3) + 's';
      h.style.fontSize = (Math.random() * 10 + 10) + 'px';
      card.appendChild(h);
    }
  });

  /* ========================================================================
     SURPRISE GIFT BOX
     ======================================================================== */
  const giftBox = document.getElementById('gift-box');
  const giftMessage = document.getElementById('gift-message');
  let giftOpened = false;

  if (giftBox && giftMessage) {
    giftBox.addEventListener('click', () => {
      if (giftOpened) return;
      giftOpened = true;
      giftBox.classList.add('opened');
      giftMessage.classList.add('show');

      const rect = giftBox.getBoundingClientRect();
      const wrapRect = giftBox.parentElement.getBoundingClientRect();
      const originX = rect.left - wrapRect.left + rect.width / 2;
      const originY = rect.top - wrapRect.top + rect.height / 2;

      for (let i = 0; i < 24; i++) {
        const heart = document.createElement('i');
        heart.className = 'fa-solid fa-heart gift-heart-particle';
        const angle = Math.random() * Math.PI * 2;
        const dist = 80 + Math.random() * 160;
        heart.style.setProperty('--bx', Math.cos(angle) * dist + 'px');
        heart.style.setProperty('--by', (Math.sin(angle) * dist - 100) + 'px');
        heart.style.left = originX + 'px';
        heart.style.top = originY + 'px';
        heart.style.fontSize = (Math.random() * 14 + 12) + 'px';
        heart.style.color = ['#ff6fb5', '#8b5cf6', '#ffd6a5', '#f4c2c2'][i % 4];
        giftBox.parentElement.appendChild(heart);
        setTimeout(() => heart.remove(), 1800);
      }
    });
  }

  /* ========================================================================
     INTERACTIVE LOVE QUIZ ENGINE
     ======================================================================== */
  const quizQuestions = [
    { question: "Ham Pahli Baar Kaha Mile ❤️", options: ["After Marriage", "Park", "Mandir", "Cafe"], correct: 0 },
    { question: "Mera favorite food kya hai? 🍕🍔🍜", options: ["Pizza", "Biryani", "Paneer", "Momos"], correct: 0 },
    { question: "Mujhe tumhari sabse zyada kya pasand hai? 🥰✨", options: ["Tumhari Smile 😊", "Tumhari Aankhein 👀", "Tumhari Awaaz 🎶", "Tumhari Care ❤️", "All of the above ❤️"], correct: 4 },
    { question: "Mera favorite color kaunsa hai? 🎨💙", options: ["Black 🖤", "Blue 💙", "Pink 🩷", "White 🤍"], correct: 1 },
    { question: "Tumhare hisaab se main tumse kitna pyaar karta hoon? ❤️👑", options: ["Bahut zyada 🥰", "Sabse zyada 💖", "Jitna words mein bayan na ho sake 💍✨", "Infinite ♾️❤️"], correct: 3 }
  ];

  const quizContainer = document.getElementById('quiz-container');
  let quizIndex = 0;
  let quizScore = 0;

  function renderQuiz() {
    if (!quizContainer) return;
    if (quizIndex >= quizQuestions.length) {
      renderQuizResult();
      return;
    }

    const q = quizQuestions[quizIndex];
    quizContainer.innerHTML = `
      <p class="quiz-progress">Question ${quizIndex + 1} of ${quizQuestions.length}</p>
      <div class="quiz-question">
        <h4>${q.question}</h4>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `<div class="quiz-option" data-index="${i}">${opt}</div>`).join('')}
        </div>
      </div>`;

    quizContainer.querySelectorAll('.quiz-option').forEach(optEl => {
      optEl.addEventListener('click', () => {
        const selected = parseInt(optEl.dataset.index, 10);
        const allOpts = quizContainer.querySelectorAll('.quiz-option');
        allOpts.forEach(o => o.style.pointerEvents = 'none');

        if (selected === q.correct) {
          optEl.classList.add('correct');
          quizScore++;
        } else {
          optEl.classList.add('wrong');
          allOpts[q.correct].classList.add('correct');
        }

        setTimeout(() => {
          quizIndex++;
          renderQuiz();
        }, 1200);
      });
    });
  }

  function renderQuizResult() {
    let emoji = 'fa-heart-crack';
    let message = "Aww, that's okay! What matters is the love, not the score. I love you regardless! ❤️";

    if (quizScore === quizQuestions.length) {
      emoji = 'fa-crown';
      message = "Perfect score! You know us so well — just like I know you're the love of my life!";
    } else if (quizScore >= quizQuestions.length / 2) {
      emoji = 'fa-heart';
      message = "Pretty good! You clearly know how special our love story is.";
    }

    quizContainer.innerHTML = `
      <div class="quiz-result">
        <i class="fa-solid ${emoji} score-emoji"></i>
        <h3>You scored ${quizScore} / ${quizQuestions.length}</h3>
        <p>${message}</p>
        <button class="btn-glow" id="quiz-retry">Play Again <i class="fa-solid fa-rotate-right"></i></button>
      </div>`;

    triggerMiniCelebration();
    document.getElementById('quiz-retry').addEventListener('click', () => {
      quizIndex = 0;
      quizScore = 0;
      renderQuiz();
    });
  }

  if (quizContainer) renderQuiz();

  function triggerMiniCelebration() {
    const confWrap = document.getElementById('confetti-container');
    if (confWrap) {
      for (let i = 0; i < 30; i++) createConfettiPiece(confWrap, true);
    }
  }

  /* ========================================================================
     ANIMATION GENERIC HELPERS (Confetti & Balloons)
     ======================================================================== */
  const confettiColors = ['#ff6fb5', '#8b5cf6', '#ffd6a5', '#f4c2c2', '#e6b8a2'];

  function createConfettiPiece(container, isBurst) {
    if (!container) return;
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    piece.style.animationDuration = (Math.random() * 2 + (isBurst ? 2 : 3)) + 's';
    piece.style.animationDelay = (Math.random() * (isBurst ? 0.5 : 2)) + 's';
    piece.style.width = (Math.random() * 6 + 6) + 'px';
    piece.style.height = (Math.random() * 10 + 10) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 5500);
  }

  const balloonColors = ['#ff6fb5', '#8b5cf6', '#ffd6a5', '#f4c2c2', '#e6b8a2', '#c084fc'];

  function createBalloon(container) {
    if (!container) return;
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 95 + '%';
    balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.animationDuration = (Math.random() * 4 + 6) + 's';
    balloon.style.animationDelay = (Math.random() * 2) + 's';
    container.appendChild(balloon);
    setTimeout(() => balloon.remove(), 10000);
  }

  /* ========================================================================
     FIREWORKS ENGINE
     ======================================================================== */
  function createFireworksEngine(canvas) {
    if (!canvas) return null;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let running = false;
    let animFrame;

    function resize() {
      canvas.width = canvas.offsetWidth || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function launchFirework() {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.5;
      const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      for (let i = 0; i < 35; i++) {
        const angle = (Math.PI * 2 * i) / 35;
        const speed = Math.random() * 3 + 2;
        particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, color });
      }
    }

    function animate() {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fill();
        p.x += p.vx; p.y += p.vy; p.vy += 0.04; p.life -= 0.012;
      });
      particles = particles.filter(p => p.life > 0);
      animFrame = requestAnimationFrame(animate);
    }

    let launchInterval;
    return {
      start(duration) {
        running = true; animate();
        launchInterval = setInterval(launchFirework, 500);
        launchFirework();
        if (duration) setTimeout(() => this.stop(), duration);
      },
      stop() {
        running = false; clearInterval(launchInterval); cancelAnimationFrame(animFrame);
        setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 800);
      }
    };
  }

  const finaleFireworks = createFireworksEngine(document.getElementById('fireworks-canvas'));
  const overlayFireworks = createFireworksEngine(document.getElementById('overlay-fireworks'));

  /* ========================================================================
     INTERACTIVE CAKE BLOWING ENGINE
     ======================================================================== */
  const cake = document.getElementById('cake');
  const cakeBigMessage = document.getElementById('cake-big-message');
  const celebrationOverlay = document.getElementById('celebration-overlay');
  let cakeClicked = false;

  if (cake) {
    cake.addEventListener('click', () => {
      if (cakeClicked) return;
      cakeClicked = true;
      cake.classList.add('blown');

      document.querySelectorAll('.candle').forEach(candle => {
        for (let i = 0; i < 3; i++) {
          const smoke = document.createElement('div');
          smoke.className = 'smoke';
          smoke.style.left = '50%'; smoke.style.top = '-22px';
          smoke.style.animationDelay = (i * 0.2) + 's';
          candle.appendChild(smoke);
          setTimeout(() => smoke.remove(), 2000);
        }
      });

      playCelebrationSound();
      const parentSec = cake.closest('.section');
      if (parentSec) parentSec.classList.add('darkened');

      if (cakeBigMessage) setTimeout(() => cakeBigMessage.classList.add('show'), 600);
      setTimeout(() => triggerFullCelebration(), 800);
    });
  }

  function playCelebrationSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const actx = new AudioCtx();
      const now = actx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        osc.type = 'sine'; osc.frequency.value = freq;
        osc.connect(gain); gain.connect(actx.destination);
        const start = now + i * 0.18;
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.25, start + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.6);
        osc.start(start); osc.stop(start + 0.6);
      });
    } catch (e) {}
  }

  function triggerFullCelebration() {
    if (!celebrationOverlay) return;
    celebrationOverlay.classList.add('active');
    if (overlayFireworks) overlayFireworks.start(4500);

    const overlayConfetti = document.getElementById('overlay-confetti');
    const overlayBalloons = document.getElementById('overlay-balloons');

    for (let i = 0; i < 80; i++) createConfettiPiece(overlayConfetti, false);
    for (let i = 0; i < 15; i++) createBalloon(overlayBalloons);

    setTimeout(() => {
      celebrationOverlay.classList.remove('active');
      if (overlayConfetti) overlayConfetti.innerHTML = '';
      if (overlayBalloons) overlayBalloons.innerHTML = '';
    }, 5000);
  }

  /* ========================================================================
     GRAND FINALE CELEBRATION WITH OBSERVER
     ======================================================================== */
  const finaleSection = document.getElementById('finale');
  const finaleConfetti = document.getElementById('confetti-container');
  const finaleBalloons = document.getElementById('balloon-container');
  let finalePlayed = false;

  function runFinaleCelebration() {
    if (finaleFireworks) finaleFireworks.start(8000);
    for (let i = 0; i < 60; i++) createConfettiPiece(finaleConfetti, false);
    for (let i = 0; i < 12; i++) createBalloon(finaleBalloons);

    if (!isPlaying && bgAudio && songs[currentTrack] && songs[currentTrack].src) {
      bgAudio.play().then(() => updateMusicPlayState(true)).catch(() => {});
    }
  }

  if (finaleSection) {
    const finaleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !finalePlayed) {
          finalePlayed = true;
          runFinaleCelebration();
        }
      });
    }, { threshold: 0.5 });
    finaleObserver.observe(finaleSection);

    const replayBtn = document.getElementById('replay-celebration');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        if (finaleConfetti) finaleConfetti.innerHTML = '';
        if (finaleBalloons) finaleBalloons.innerHTML = '';
        runFinaleCelebration();
      });
    }
  }

  /* ========================================================================
     RANDOM SPARKLES ON QUEEN PHOTO
     ======================================================================== */
  const queenSparkles = document.querySelector('.queen-sparkles');
  if (queenSparkles) {
    for (let i = 0; i < 12; i++) {
      const s = document.createElement('div');
      s.className = 'sparkle';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.animationDelay = (Math.random() * 2.5) + 's';
      queenSparkles.appendChild(s);
    }
  }

}); // END OF DOMCONTENTLOADED