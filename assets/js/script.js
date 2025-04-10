/**
 * script.js
 */
const isMobile = window.innerWidth < 640;
const isTablet =  640 <= window.innerWidth < 1024;

let currentWidth = window.innerWidth;

window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    // 幅が変わった場合だけリロード(10pxは許容)
    if (Math.abs(currentWidth - newWidth) > 10) {
        currentWidth = newWidth;
        location.reload();
    }
});

if (document.getElementById("pageName") != null) {
    gsap.timeline()
        .to("#pageName", { duration: 1, opacity: 0 })
        .to("#pageName", {
            duration: 0,
            transform: "translate(-50%, 0%)", // Y方向リセット
        })
        .to("#pageName", { duration: 1.25, opacity: 1 })
        .to("#pageName", {
            duration: 1.25,
            top: isMobile ? "1.5rem" : "3.5rem",
            ease: "power2.out",
        })
        .to("main", { duration: 1.5, opacity: 1 });
}