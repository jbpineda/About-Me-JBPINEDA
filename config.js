console.log("CONFIG VERSION: school/skills test", new Date().toISOString());

var config = {
  style: 'mapbox://styles/tgnewikow/cmdnimw9n001b01sg61y7a5hy',
  accessToken: 'pk.eyJ1IjoiamJwaW5lZGEiLCJhIjoiY21reGxua2p2MGI5aTNkb2psODE3OGg2YSJ9.VLscZb55_svRCvAuyoEBbw',
  showMarkers: false,
  markerColor: '#3FB1CE',
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  insetOptions: {
    markerColor: 'orange'
  },
  insetPosition: 'bottom-right',
  theme: 'light',
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: 'ABOUT ME?',
  subtitle: 'Jennifer Pineda',
  byline: 'Statistics · Storytelling · Systems Thinking',
  footer: `Thanks for scrolling!<br><br>Best,<br><span class="footer-signature">Jennifer</span>`,
  chapters: [
    {
      id: 'prologue',
      alignment: 'center',
      image: null,
      description: ``,
      callback: 'buildPrologueStack',
      location: {
        center: [-119.4179, 36.7783],
        zoom: 4.5,
        pitch: 0,
        bearing: 0
      },

      // IMPORTANT: leave these empty — DOM work happens in index.html
      onChapterEnter: [],
      onChapterExit: []
    },
    // ✅ Trigger 1: reveal School paper
    {
      id: "school",
      alignment: "center",
      hidden: false,
      title: "",
      image: null,
      description: "",
      location: {
        center: [-119.4179, 36.7783],
        zoom: 4.5,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "none",
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "professional-chapter",
      alignment: "center",
      hidden: false,
      title: "",
      image: null,
      description: `
        <div class="phhs-story pro-story" data-pro-active="c1">
    
          <div class="phhs-kicker">A professional chapter</div>

    
          <div class="pro-genre">INDUSTRY EXPERIENCE</div>
          <div class="pro-tag">Four roles</div>
    
          <button class="phhs-toggle pro-toggle" type="button" aria-expanded="false">
            Open my chapters
          </button>
    
          <div class="phhs-shelf pro-shelf" hidden>
    
            <!-- Company tabs (logos + short labels) -->
            <div class="pro-tabs" role="tablist" aria-label="Company chapters">
              <button class="pro-tab is-active" type="button" role="tab" aria-selected="true" data-pro="c1">
                <span class="pro-logo">
                  <img src="./assets/abc7pls.png" alt="Company 1 logo">
                </span>
                <span class="pro-tabtext">
                  <span class="pro-co">ABC7 News Bay Area</span>
                </span>
              </button>
    
              <button class="pro-tab" type="button" role="tab" aria-selected="false" data-pro="c2">
                <span class="pro-logo">
                  <img src="./assets/aglogo.png" alt="Company 3 logo">
                </span>
                <span class="pro-tabtext">
                  <span class="pro-co">AirGradient</span>
                </span>
              </button>

              <button class="pro-tab" type="button" role="tab" aria-selected="false" data-pro="c3">
                <span class="pro-logo">
                  <img src="./assets/gilead.png" alt="Company 2 logo">
                </span>
                <span class="pro-tabtext">
                  <span class="pro-co">Gilead Sciences</span>
                </span>
              </button>
    
              <button class="pro-tab" type="button" role="tab" aria-selected="false" data-pro="c4">
                <span class="pro-logo">
                  <img src="./assets/dclogz.png" alt="Company 4 logo">
                </span>
                <span class="pro-tabtext">
                  <span class="pro-co">The Daily Californian</span>
                </span>
              </button>
            </div>
    
            <!-- Detail panel (changes based on selected company) -->
            <section class="pro-panel" aria-live="polite">
    
              <div class="pro-panelhead">
  <div class="pro-panelkicker">Highlights</div>
  <div class="pro-panelline" data-pro-line></div>
  <div class="pro-panelbrag" data-pro-brag></div>
</div>

              <div class="pro-moments">
    
                <article class="pro-moment">
                  <div class="pro-momenttitle" data-pro-m1-title>Advised</div>
                  <div class="pro-momenttext" data-pro-m1-text>
                    newsroom leadership on segment resonance and digestibility
                  </div>
                  <div class="pro-momentmeta" data-pro-m1-meta>
                    Delivered actionable recommendations that closed storytelling gaps for a 600k+ digital audience.
                  </div>
                </article>
    
                <article class="pro-moment">
                  <div class="pro-momenttitle" data-pro-m2-title>Assessed</div>
                  <div class="pro-momenttext" data-pro-m2-text>
                    user/viewer benefit for complex broadcasts.
                  </div>
                  <div class="pro-momentmeta" data-pro-m2-meta>
                    Ensured segments met the informational needs of the station’s 2.5 million household reach.
                  </div>
                </article>
    
                <article class="pro-moment">
                  <div class="pro-momenttitle" data-pro-m3-title>Monitered</div>
                  <div class="pro-momenttext" data-pro-m3-text>
                    cross-platform formats and social trends to surface high-value leads.
                  </div>
                  <div class="pro-momentmeta" data-pro-m3-meta>
                    Translated digital sentiment into strategic content input.
                  </div>
                </article>
    
              </div>
    
              <!-- “Artifact” / proof moment (optional but highly recommended) -->
              <div class="pro-proof">
                <div class="pro-proofmedia">
  <a class="pro-prooflink" target="_blank" rel="noopener" aria-label="Open proof link">
    <img data-pro-proof-img src="./assets/proof1.png" alt="Proof artifact" loading="lazy">
  </a>
</div>
                <div class="pro-proofcopy">
                  <div class="pro-proofkicker">One moment I’m proud of</div>
                  <div class="pro-prooftitle" data-pro-proof-title>A snapshot from the work</div>
                  <p class="pro-prooftext" data-pro-proof-text>
                    A short, human sentence explaining why this mattered.
                  </p>
                </div>
              </div>
    
            </section>
          </div>
        </div>
      `,
      location: {
        center: [-122.3965, 37.8021], // ABC7 Bay Area coordinates
        zoom: 18,
        pitch: 55,
        bearing: 10
      },
      mapAnimation: "none",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'where-im-from',
      alignment: 'left',
      hidden: false,
      title: 'Where I’m from',
      image: './assets/sdlib.jpg', // optional
      description: `I grew up in a world of waiting, watching, imagining in... <br>
            <span class="chapter-subtitle">San Diego, California</span>`,
      location: {
        center: [-119.4179, 36.7783], // California
        zoom: 4.5,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: function () {
        // attach sticker to the chapter image container
        const chapterEl = document.querySelector('.chapter.active'); // currently active chapter
        if (!chapterEl) return;

        const sticker = document.createElement('img');
        sticker.src = './assets/pennantsd.png'; // your sticker file
        sticker.id = 'ca-sticker';
        sticker.style.position = 'absolute';
        sticker.style.width = '120px';
        sticker.style.top = '20px';          // adjust vertical placement
        sticker.style.right = '20px';        // adjust horizontal placement
        sticker.style.transform = 'rotate(-5deg)';
        sticker.style.zIndex = 10;
        sticker.style.pointerEvents = 'auto';
        sticker.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';

        // position relative to chapter container
        chapterEl.style.position = 'relative';
        chapterEl.appendChild(sticker);
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'phhs',
      alignment: 'left',
      hidden: false,
      description: `
        <div class="phhs-wrap">
          <!-- TOP: personal chapter info card -->
          <div class="phhs-story">
            <div class="phhs-kicker">A personal chapter</div>
    
            <p class="phhs-lede">
              Before I knew it truly had a name,<br>
              I was already living it at Patrick Henry High.
            </p>
    
            <!-- NEW framing line + spacing -->
            <div class="phhs-genre-frame">The genre I always come back to</div>
    
            <div class="phhs-genre">COMING-OF-AGE</div>
            <div class="phhs-tag">Patrick Henry High School</div>
    
            <button class="phhs-toggle" type="button" aria-expanded="false">
              Open my shelf
            </button>
    
            <div class="phhs-shelf" hidden>
              <div class="shelf-grid">
                <img src="./assets/book1.png" alt="Coming-of-age pick 1">
                <img src="./assets/book2.jpeg" alt="Coming-of-age pick 2">
                <img src="./assets/book3.jpeg" alt="Coming-of-age pick 3">
              </div>
              <p class="shelf-caption">A few stories I read during my own coming-of-age.</p>
            </div>
          </div>
    
          <!-- UNDER: smaller “paper cube” photo card -->
          <figure class="phhs-photocard" aria-label="PHHS photo">
            <div class="phhs-photo-frame">
              <img src="./assets/amidhills.jpeg" alt="Patrick Henry High School moment" loading="lazy">
            </div>
          </figure>
        </div>
      `,
      image: '', // ✅ IMPORTANT: prevents the old auto-image from showing above
      location: {
        center: [-117.0514, 32.7980],
        zoom: 15,
        pitch: 60,
        bearing: 20
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'arriving-berkeley',
      alignment: 'left',
      hidden: false,
      title: 'Arriving at Berkeley',
      image: './assets/berkeley-sign.png', // choose a photo you like
      description: 'Pursuing a Statistics degree, with coursework from the nations No.1 Data Science program.',
      location: {
        center: [-122.255, 37.8715], // near Sather Gate
        zoom: 14,
        pitch: 45,
        bearing: -10
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'reading-glade',
      alignment: 'left',
      hidden: false,
      showImage: false,
      description: `
              <div class="glade-story">
  <div class="glade-kicker">A personal chapter</div>

  <p class="glade-lede">
    Albums that made me pay attention to lyrics like novels.
  </p>

  <div class="glade-grid" aria-label="Album covers">
    <figure class="album album-a">
      <div class="album-frame">
        <img src="./assets/album1.png" alt="Album 1">
      </div>
      <figcaption class="album-cap">Folklore by Taylor Swift 
      </figcaption>
    </figure>

    <figure class="album album-b">
      <div class="album-frame">
        <img src="./assets/albumm2.png" alt="Album 2">
      </div>
      <figcaption class="album-cap">Melodrama by Lorde</figcaption>
    </figure>
  </div>
</div>
            `,
      location: {
        center: [-122.25956, 37.872714],
        zoom: 17,
        pitch: 60,
        bearing: 20
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    // ✅ Replace your current learning-to-publish chapter object with THIS full “shaped” version
    // (Drop it into config.chapters exactly where your current learning-to-publish object is.)
    {
      id: "learning-to-publish",
      alignment: "center",
      hidden: false,
      title: "",
      image: null,
      description: `
        <div class="phhs-story ltp-story" data-ltp-mode="taste">
          <div class="phhs-kicker">A personal chapter</div>
    
          <p class="phhs-lede">
            The media I returned to most made complex systems legible.<br>
            That’s why I joined <strong>The Daily Californian</strong>.
          </p>
    
          <div class="ltp-genre">THE EXPLANATIONS I NEVER SKIPPED</div>
          <div class="ltp-tag">What I always pressed play on</div>
    
          <button class="phhs-toggle ltp-toggle" type="button" aria-expanded="false">
            Open my plays
          </button>
    
          <div class="phhs-shelf ltp-shelf" hidden>
    
            <!-- 4 inspirations -->
            <div class="ltp-grid4">
    
              <a class="ltp-card" href="https://www.youtube.com/watch?v=BOHG-TGip3Q" target="_blank" rel="noopener"
                 data-taste="I love explainers that recognize the intentional decisions made behind closed doors, which can be attributed to the success of business."
                 data-craft="The translation from business model into a clean story arc well done."
                 data-dailycal="Systems-first, evidence-forward, readable. What I pushed for at The Daily Cal.">
                <img class="ltp-thumb" src="https://img.youtube.com/vi/BOHG-TGip3Q/hqdefault.jpg" alt="WSJ: Costco Treasure Hunt Strategy">
                <div class="ltp-meta">
                  <div class="ltp-badge">WSJ • The Economics of</div>
                  <div class="ltp-title">Costco’s Treasure Hunt Strategy</div>
                  <div class="ltp-cap" data-caption></div>
                </div>
              </a>
    
              <a class="ltp-card" href="https://www.youtube.com/watch?v=7tuRJIkDcXg" target="_blank" rel="noopener"
                 data-taste="I'm eager to hear about cost-cutting strategy where one repeatable formula becomes recognizable style and unmistakeable branding."
                 data-craft="The map of a creative ecosystem that finally uncovers the triggers behind a cultural movement."
                 data-dailycal="Connecting culture to incentives underneath it, not treating them separately.">
                <img class="ltp-thumb" src="https://img.youtube.com/vi/7tuRJIkDcXg/hqdefault.jpg" alt="Vox: How A24 took over Hollywood">
                <div class="ltp-meta">
                  <div class="ltp-badge">Vox • America Explained</div>
                  <div class="ltp-title">How A24 took over Hollywood</div>
                  <div class="ltp-cap" data-caption></div>
                </div>
              </a>
    
              <a class="ltp-card" href="https://www.wsj.com/podcasts/the-journal" target="_blank" rel="noopener"
                 data-taste="I always press play on reporting that spotlights inequity over front-cover starlets, revealing the structures that deny stability and longevity to an industry's quiet contributors."
                 data-craft="A listening experience that makes rigorous systems feel personal."
                 data-dailycal="Rigorous systems but reporting can still feel personal.">
                <img class="ltp-thumb ltp-thumb--journal"
                  src="./assets/wsj-journal.jpg" 
                  alt="WSJ The Journal podcast cover">
                <div class="ltp-meta">
                  <div class="ltp-badge">WSJ • The Journal</div>
                  <div class="ltp-title">Hollywood jobs are disappearing</div>
                  <div class="ltp-cap" data-caption></div>
                </div>
              </a>
    
              <!-- NYT interactive (4th card) -->
              <a class="ltp-card" href="https://www.nytimes.com/interactive/2025/10/22/travel/motels-history-100-years.html" target="_blank" rel="noopener"
                 data-taste="If something is everywhere, I want the history and systems underneath it."
                 data-craft="Uses visuals + structure to teach (timeline, artifacts, context)."
                 data-dailycal="This is the exact energy I wanted at The Daily Cal.">
                <img class="ltp-thumb ltp-thumb--nyt"
                  src="./assets/nyt-motels.jpg"
                  alt="NYT interactive: Motels history (100 years)">
                <div class="ltp-meta">
                  <div class="ltp-badge">NYT • Interactive</div>
                  <div class="ltp-title">Motels: 100 Years of an American Idea</div>
                  <div class="ltp-cap" data-caption></div>
                </div>
              </a>
    
            </div>
    
            <!-- Daily Cal becomes the balanced “moment” below -->
            <section class="ltp-dc" aria-label="Daily Californian proof">
              <div class="ltp-dc-grid">
                <div class="ltp-dc-media">
                  <img src="./assets/dailyit.jpg" alt="The Daily Californian artifact" loading="lazy">
                </div>
    
                <div class="ltp-dc-copy">
                  <div class="ltp-dc-kicker">Why I began learning to publish</div>
                  <div class="ltp-dc-title">The Daily Californian</div>
                  <p class="ltp-dc-text">
                    I wanted to share stories that held truths you could only reach by stepping outside your lens and living a thousand lives.<br><br>I learned 'print' is a business, and some stories need to be told.
                  </p>
    
                  <div class="ltp-mini">
                    <span class="ltp-mini-label">Lens:</span>
                    <button class="ltp-mini-btn is-active" type="button" data-mode="taste">Taste</button>
                    <button class="ltp-mini-btn" type="button" data-mode="craft">Craft</button>
                  </div>
    
                  <p class="shelf-caption">Click a card: the caption switches between taste and craft.</p>
                </div>
              </div>
            </section>
    
          </div>
        </div>
      `,
      location: {
        center: [-122.26273, 37.87643],
        zoom: 17,
        pitch: 55,
        bearing: 10
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: []
    },
  ]
};
