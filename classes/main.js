var d = document, dE = d.documentElement,
hdrObjs = d.querySelectorAll('header *'),
mainObjs = d.querySelectorAll('main [class^="btn-"], main [class^="txt-"]'),
cls = {};

mainObjs.forEach(function(c) {
    if(c.className.match(/^btn-|^txt-/)) {
        cls[cN(c.className)] = c;
    }
    c.addEventListener('click', function() {
        cls.txtIn.value = fixTxt(cls.txtIn.value);
        if(this.className == 'btn-enc' && cls.txtIn.value.match(/[a-z]/)) {
            cls.txtOut.innerText = encrypt(cls.txtIn.value);
            changeOut();
        } else if(this.className == 'btn-dec' && cls.txtIn.value.match(/enter|imes|ai|ober|ufat/g)) {
            cls.txtOut.innerText = decrypt(cls.txtIn.value);
            changeOut();
        } else if(this.className == 'btn-copy' && cls.txtOut.innerText != '') {
            copyTxt();
        }
    });
    c.addEventListener('keyup', () => {
        cls.txtIn.value = fixTxt(cls.txtIn.value);
    });
});

hdrObjs.forEach(function(t) {
    t.addEventListener('click', function() {
        if(this.tagName.match(/img/i)) {
            window.open('https://www.alura.com.br', '_blank');
        } else if(this.tagName.match(/div/i)) {
            scnMode();
        }
    });
    if(t.tagName.match(/div/i)) {
        if(navigator.userAgent.match(/iPhone/i) || d.fullscreenEnabled === false || d.webkitFullscreenEnabled === false) {
            t.style.display = 'none';
        }
    }
});