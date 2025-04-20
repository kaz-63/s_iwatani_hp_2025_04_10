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
        snsButtons.innerHTML = `
          <!-- Twitter -->
          <a href="https://x.com/Shige_Iwatani" target="_blank" aria-label="Twitter" class="text-white text-2xl hover:text-blue-400 transition">
            <i class="fab fa-twitter"></i>
          </a>

          <!-- Instagram -->
          <a href="https://www.instagram.com/shige_iwatani/" target="_blank" aria-label="Instagram" class="text-white text-2xl hover:text-pink-500 transition">
            <i class="fab fa-instagram"></i>
          </a>

          <!-- YouTube -->
          <a href="https://youtube.com/" target="_blank" aria-label="YouTube" class="text-white text-2xl hover:text-red-500 transition">
            <i class="fab fa-youtube"></i>
          </a>
        `;
      });
    });
  }());
  