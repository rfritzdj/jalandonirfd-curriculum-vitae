(function () {
  "use strict";

  /* ---------------------------------------------------------
     Mobile nav toggle
  --------------------------------------------------------- */
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    primaryNav.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 960) {
          primaryNav.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  /* ---------------------------------------------------------
     Scroll-spy: highlight the nav link for the visible section
  --------------------------------------------------------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var linkFor = {};
    navLinks.forEach(function (link) {
      linkFor[link.getAttribute("href").slice(1)] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = linkFor[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove("active"); });
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------------------------------------------------------
     Ambient Voronoi tessellation — a nod to the cell-growth /
     tissue-mechanics models (Voronoi tessellations) that run
     through this CV's research and publications.

     Implementation: a small set of seed points drift slowly.
     Each frame we rasterize, at low resolution, which seed is
     nearest to each cell of a coarse grid, then trace the
     boundaries between differently-owned cells. This gives a
     living tessellation without needing a full geometric
     Voronoi/Delaunay library.
  --------------------------------------------------------- */
  var canvas = document.getElementById("tessellation");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var CELL = 22;               // coarse grid resolution in CSS px
    var POINTS = 22;             // number of seeds
    var SPEED = 0.06;            // px per frame per seed
    var seeds = [];
    var W = 0, H = 0, cols = 0, rows = 0;
    var owner = null;
    var raf = null;
    var lastStep = 0;
    var STEP_MS = reduceMotion ? 0 : 45;

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(W / CELL) + 1;
      rows = Math.ceil(H / CELL) + 1;
      owner = new Int16Array(cols * rows);

      if (seeds.length === 0) {
        for (var i = 0; i < POINTS; i++) {
          seeds.push({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * SPEED,
            vy: (Math.random() - 0.5) * SPEED
          });
        }
      }
    }

    function step() {
      seeds.forEach(function (s) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0 || s.x > W) s.vx *= -1;
        if (s.y < 0 || s.y > H) s.vy *= -1;
        s.x = Math.max(0, Math.min(W, s.x));
        s.y = Math.max(0, Math.min(H, s.y));
      });
    }

    function computeOwners() {
      for (var r = 0; r < rows; r++) {
        var y = r * CELL;
        for (var c = 0; c < cols; c++) {
          var x = c * CELL;
          var best = -1, bestDist = Infinity;
          for (var i = 0; i < seeds.length; i++) {
            var dx = seeds[i].x - x, dy = seeds[i].y - y;
            var d = dx * dx + dy * dy;
            if (d < bestDist) { bestDist = d; best = i; }
          }
          owner[r * cols + c] = best;
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // draw cell edges where ownership changes
      ctx.strokeStyle = "rgba(47, 111, 98, 0.16)"; // --teal at low alpha
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          var idx = r * cols + c;
          var here = owner[idx];
          if (c < cols - 1 && owner[idx + 1] !== here) {
            var x = c * CELL + CELL, y0 = r * CELL - CELL / 2, y1 = r * CELL + CELL / 2;
            ctx.moveTo(x, y0);
            ctx.lineTo(x, y1);
          }
          if (r < rows - 1 && owner[idx + cols] !== here) {
            var y = r * CELL + CELL, x0 = c * CELL - CELL / 2, x1 = c * CELL + CELL / 2;
            ctx.moveTo(x0, y);
            ctx.lineTo(x1, y);
          }
        }
      }
      ctx.stroke();

      // seed points
      ctx.fillStyle = "rgba(180, 131, 31, 0.35)"; // --amber at low alpha
      seeds.forEach(function (s) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function loop(ts) {
      if (!reduceMotion) {
        if (ts - lastStep > STEP_MS) {
          step();
          computeOwners();
          draw();
          lastStep = ts;
        }
      }
      raf = requestAnimationFrame(loop);
    }

    resize();
    computeOwners();
    draw();

    if (!reduceMotion) {
      raf = requestAnimationFrame(loop);
    }

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
        computeOwners();
        draw();
      }, 150);
    });
  }
})();
