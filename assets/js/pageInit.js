/**
 * pageInit.js
 */
(function () {
    document.addEventListener("DOMContentLoaded", () => {
      // ページファイル名を取得（例：profile.html → profile）
      const pagePath = window.location.pathname;
      const fileName = pagePath.substring(pagePath.lastIndexOf('/') + 1);
      const pageFile = fileName.replace(/\.html$/, '');
  
      // <title> に <meta property="pageName"> の content を先頭に追加
      const pageName = document.querySelector('meta[property="pageName"]')?.content;
      const titleEl = document.querySelector('title');
      if (pageName && titleEl) {
        titleEl.textContent = `${pageName} | ${titleEl.textContent.replace(/^.*?\|\s*/, '')}`;
      }
  
      // #pageName 要素の中身を pageName に置き換え
      const pageNameEl = document.getElementById('pageName');
      if (pageName && pageNameEl) {
        pageNameEl.textContent = pageName;
      }
  
      // ページ固有CSSを読み込む
      if (pageFile) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `assets/css/pages/${pageFile}.css?v=1.0.1`;
        document.head.appendChild(link);
  
        // <nav> 内の <a> に current クラスを追加して href を "#" に変更
        document.querySelectorAll('nav a').forEach(a => {
          if (a.getAttribute('href')?.includes(pageFile)) {
            a.setAttribute('href', '#');
            a.classList.add('current');
          }
        });
      }

      // SNSボタンの生成
      const snsButtonsList = document.querySelectorAll(".sns_buttons");
      snsButtonsList.forEach(function (snsButtons) {
        const isFixed = snsButtons.classList.contains("fixed");
        snsButtons.innerHTML = `
          <!-- Twitter -->
          <a href="https://x.com/shige_iwatani?s=21&t=pjyGOprN_CCBwzgybe2kZQ" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
            class="text-white text-2xl ${isFixed ? 'hover:scale-125' : 'hover:text-blue-400'} transition">
            <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>

          <!-- Instagram -->
          <a href="https://www.instagram.com/shige_iwatani?igsh=aHlzenJnaXA2dHY1&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            class="text-white text-2xl ${isFixed ? 'hover:scale-125' : 'hover:text-pink-500'} transition">
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
  
          <!-- YouTube -->
          <a href="https://m.youtube.com/channel/UCXcHL3vsOvQonUyZBkQ9EOA/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
            class="text-white text-2xl ${isFixed ? 'hover:scale-125' : 'hover:text-red-500'} transition">
            <i class="fab fa-youtube" aria-hidden="true"></i>
          </a>
        `;
      });
    });
  }());
  