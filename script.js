(function () {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav');

  if (menuBtn && nav) {
    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      const label = open ? 'menu.close' : 'menu.open';
      menuBtn.setAttribute('aria-label', window.I18N ? window.I18N.t(label) : (open ? '關閉選單' : '開啟選單'));
      menuBtn.textContent = open ? '✕' : '☰';
    };

    menuBtn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));

    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => setOpen(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        setOpen(false);
        menuBtn.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
        setOpen(false);
      }
    });

    // 視窗放大回桌機版時，清除殘留的 open 狀態
    window.matchMedia('(min-width: 851px)').addEventListener('change', (e) => {
      if (e.matches) setOpen(false);
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

/* ===== 車型照片：點擊放大（燈箱） ===== */
(function () {
  var SELECTOR = '.gallery-placeholder figure img, .diagram-pair img';
  var triggers = Array.prototype.slice.call(document.querySelectorAll(SELECTOR));
  if (!triggers.length) return;

  function tr(key, fallback) {
    var v = '';
    try { v = window.I18N ? window.I18N.t(key) : ''; } catch (e) {}
    return v || fallback;
  }

  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.hidden = true;
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.innerHTML =
    '<button type="button" class="lb-btn lb-close"></button>' +
    '<button type="button" class="lb-btn lb-prev"></button>' +
    '<button type="button" class="lb-btn lb-next"></button>' +
    '<div class="lb-stage">' +
      '<img class="lb-img" alt="">' +
      '<div class="lb-cap"><span class="lb-title"></span><span class="lb-count"></span></div>' +
    '</div>';
  document.body.appendChild(lb);

  var elClose = lb.querySelector('.lb-close');
  var elPrev = lb.querySelector('.lb-prev');
  var elNext = lb.querySelector('.lb-next');
  var elImg = lb.querySelector('.lb-img');
  var elTitle = lb.querySelector('.lb-title');
  var elCount = lb.querySelector('.lb-count');
  elClose.textContent = '\u00d7';
  elPrev.textContent = '\u2039';
  elNext.textContent = '\u203a';

  var list = [];
  var idx = 0;
  var lastFocus = null;
  var startX = null;

  function groupImages(img) {
    var g = img.closest('.gallery-placeholder, .diagram-pair');
    return g ? Array.prototype.slice.call(g.querySelectorAll('img')) : [img];
  }

  function captionOf(img) {
    var fig = img.closest('figure');
    var cap = fig ? fig.querySelector('figcaption') : null;
    var txt = cap ? cap.textContent.trim() : '';
    if (!txt && img.parentElement) {
      var h = img.parentElement.querySelector('h2');
      if (h) txt = h.textContent.trim();
    }
    return txt || img.getAttribute('alt') || '';
  }

  function show(i) {
    idx = (i + list.length) % list.length;
    var img = list[idx];
    elImg.src = img.currentSrc || img.src;
    elImg.alt = img.getAttribute('alt') || '';
    elTitle.textContent = captionOf(img);
    elCount.textContent = list.length > 1 ? (idx + 1) + ' / ' + list.length : '';
    if (list.length > 1) {
      [list[(idx + 1) % list.length], list[(idx - 1 + list.length) % list.length]].forEach(function (n) {
        var p = new Image();
        p.src = n.currentSrc || n.src;
      });
    }
  }

  function openAt(img) {
    list = groupImages(img);
    lastFocus = img;
    elClose.setAttribute('aria-label', tr('lightbox.close', '關閉'));
    elPrev.setAttribute('aria-label', tr('lightbox.prev', '上一張'));
    elNext.setAttribute('aria-label', tr('lightbox.next', '下一張'));
    lb.setAttribute('aria-label', tr('lightbox.title', '圖片檢視'));
    var multi = list.length > 1;
    elPrev.hidden = !multi;
    elNext.hidden = !multi;
    lb.hidden = false;
    document.body.classList.add('lb-open');
    show(list.indexOf(img));
    elClose.focus();
  }

  function close() {
    if (lb.hidden) return;
    lb.hidden = true;
    document.body.classList.remove('lb-open');
    elImg.removeAttribute('src');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  triggers.forEach(function (img) {
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.addEventListener('click', function () { openAt(img); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openAt(img);
      }
    });
  });

  // 分類標籤：點擊後以彈出視窗瀏覽該類別的照片
  Array.prototype.slice.call(document.querySelectorAll('.spec-list li[data-gallery]')).forEach(function (tag) {
    function go() {
      var g = document.getElementById(tag.getAttribute('data-gallery'));
      var first = g && g.querySelector('img');
      if (first) openAt(first);
    }
    tag.addEventListener('click', go);
    tag.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
    });
  });

  elClose.addEventListener('click', close);
  elPrev.addEventListener('click', function () { show(idx - 1); });
  elNext.addEventListener('click', function () { show(idx + 1); });

  // 點擊圖片與按鈕以外的地方（背景、圖說）就關閉
  lb.addEventListener('click', function (e) {
    if (!e.target.closest('.lb-img, .lb-btn')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowLeft' && list.length > 1) {
      e.preventDefault();
      show(idx - 1);
    } else if (e.key === 'ArrowRight' && list.length > 1) {
      e.preventDefault();
      show(idx + 1);
    } else if (e.key === 'Tab') {
      var f = [elClose, elPrev, elNext].filter(function (b) { return !b.hidden; });
      var first = f[0];
      var last = f[f.length - 1];
      if (f.indexOf(document.activeElement) === -1) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // 手機左右滑動切換
  lb.addEventListener('touchstart', function (e) {
    startX = e.touches.length === 1 ? e.touches[0].clientX : null;
  }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (startX == null || list.length < 2) return;
    var dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) show(dx < 0 ? idx + 1 : idx - 1);
  }, { passive: true });
})();
