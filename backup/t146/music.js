function _0x44a9(_0xbc434d, _0x201112) {
    const _0x5929ad = _0x5929();
    return _0x44a9 = function (_0x44a9f9, _0xdc3ea3) {
        _0x44a9f9 = _0x44a9f9 - 0x11b;
        let _0xeffdf9 = _0x5929ad[_0x44a9f9];
        return _0xeffdf9;
    }, _0x44a9(_0xbc434d, _0x201112);
}

function _0x5929() {
    const _0x55b6f6 = ['click', 'querySelector', '.overlay', '10fxNtYl', '246222FUaync', 'loop', '72JavbPG', '11dfVvUO', '#remove-overlay', '14777GkatYY', '9UYxdvu', 'display', '3227440dIxIwi', '11965428MkQzeQ', 'style', 'addEventListener', '1086gGxGFH', 'play', 'currentTime', '385172Hkcqxn', '315158rCVOxG', '286102IDofRu', 'ended', 'none'];
    _0x5929 = function () { return _0x55b6f6; };
    return _0x5929();
}

const _0x18d0a6 = _0x44a9;

(function (_0x34a9a3, _0x2cc189) {
    const _0x2bf493 = _0x44a9, _0xdf5d84 = _0x34a9a3();
    while (true) {
        try {
            const _0x1fab53 = parseInt(_0x2bf493(0x11c)) / 0x1 +
                -parseInt(_0x2bf493(0x11d)) / 0x2 * (-parseInt(_0x2bf493(0x12a)) / 0x3) +
                parseInt(_0x2bf493(0x11b)) / 0x4 * (parseInt(_0x2bf493(0x123)) / 0x5) +
                -parseInt(_0x2bf493(0x130)) / 0x6 * (-parseInt(_0x2bf493(0x129)) / 0x7) +
                -parseInt(_0x2bf493(0x126)) / 0x8 * (parseInt(_0x2bf493(0x124)) / 0x9) +
                -parseInt(_0x2bf493(0x12c)) / 0xa * (-parseInt(_0x2bf493(0x127)) / 0xb) +
                -parseInt(_0x2bf493(0x12d)) / 0xc;
            if (_0x1fab53 === _0x2cc189) break;
            else _0xdf5d84['push'](_0xdf5d84['shift']());
        } catch (_0x4937b3) {
            _0xdf5d84['push'](_0xdf5d84['shift']());
        }
    }
}(_0x5929, 0x61437));

const overlay = document[_0x18d0a6(0x121)](_0x18d0a6(0x122)),
    removeOverlayButton = document['querySelector'](_0x18d0a6(0x128));

removeOverlayButton[_0x18d0a6(0x12f)](_0x18d0a6(0x120), () => {
    const _0x100a73 = _0x18d0a6;
    overlay[_0x100a73(0x12e)][_0x100a73(0x12b)] = _0x100a73(0x11f);

    const video = document.createElement('video');
    video.src = 'video.mp4';
    video[_0x100a73(0x125)] = true;
    video[_0x100a73(0x131)]();
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1';
    document.body.appendChild(video);

    video['addEventListener'](_0x100a73(0x11e), () => {
        const _0x4b7820 = _0x100a73;
        video[_0x4b7820(0x132)] = 0x0;
        video[_0x4b7820(0x131)]();
    });
});
