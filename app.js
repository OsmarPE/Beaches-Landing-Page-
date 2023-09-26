var _a;
var video = document.querySelector('video');
var btnPlay = document.querySelector('.video__play');
var btnMode = document.querySelector('#btnMode');
var inputCheck = document.querySelector('input[type="checkbox"]');
var buttonsMenu = document.querySelectorAll('.btnMenu');
var nav = document.querySelector('.main-nav');
var btnToTop = document.querySelector('.btn-top');
var mode = (_a = localStorage.getItem('mode')) !== null && _a !== void 0 ? _a : 'soon';
mode === "dark" && document.body.classList.add(mode);
btnPlay === null || btnPlay === void 0 ? void 0 : btnPlay.addEventListener('click', function (e) {
    var _a, _b;
    e.preventDefault();
    if (video === null || video === void 0 ? void 0 : video.paused) {
        video.play();
        (_a = btnPlay.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.replace('ri-play-fill', 'ri-pause-line');
        return;
    }
    video === null || video === void 0 ? void 0 : video.pause();
    (_b = btnPlay.firstElementChild) === null || _b === void 0 ? void 0 : _b.classList.replace('ri-pause-line', 'ri-play-fill');
});
btnMode === null || btnMode === void 0 ? void 0 : btnMode.addEventListener('click', function () {
    storageMode(mode);
});
function storageMode(modeText) {
    var _a, _b;
    if (modeText === "soon") {
        document.body.classList.add('dark');
        (_a = btnMode === null || btnMode === void 0 ? void 0 : btnMode.lastElementChild) === null || _a === void 0 ? void 0 : _a.classList.replace('ri-sun-line', 'ri-moon-line');
        mode = "dark";
    }
    else {
        document.body.classList.remove('dark');
        (_b = btnMode === null || btnMode === void 0 ? void 0 : btnMode.lastElementChild) === null || _b === void 0 ? void 0 : _b.classList.replace('ri-moon-line', 'ri-sun-line');
        mode = "soon";
    }
    localStorage.setItem('mode', mode);
}
buttonsMenu.forEach(function (btn) { return btn.addEventListener('click', function (e) {
    e.preventDefault();
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle('active');
}); });
window.addEventListener('scroll', function (e) {
    if (window.scrollY >= 700) {
        console.log('mas de 1000');
        btnToTop === null || btnToTop === void 0 ? void 0 : btnToTop.classList.add('active');
        return;
    }
    btnToTop === null || btnToTop === void 0 ? void 0 : btnToTop.classList.remove('active');
});
btnToTop === null || btnToTop === void 0 ? void 0 : btnToTop.addEventListener('click', function () {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    });
});
