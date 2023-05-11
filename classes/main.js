var d = document, dE = d.documentElement,
hdrObjs = d.querySelectorAll('header *'),
mainObjs = d.querySelectorAll('main [class^="btn-"], main [class^="txt-"]'),
cls = {};

mainObjs.forEach(function(c) {
    if(c.className.match(/^btn-|^txt-/)) {
        cls[c.className] = c;
    }
    c.addEventListener('click', function() {
        cls['txt-in'].value = fixTxt(cls['txt-in'].value);
        if(this.className == 'btn-enc' && cls['txt-in'].value.match(/[a-z]/)) {
            cls['txt-out'].innerText = encrypt(cls['txt-in'].value);
            changeOut();
        } else if(this.className == 'btn-dec' && cls['txt-in'].value.match(/enter|imes|ai|ober|ufat/g)) {
            cls['txt-out'].innerText = decrypt(cls['txt-in'].value);
            changeOut();
        } else if(this.className == 'btn-copy' && cls['txt-out'].innerText != '') {
            copyTxt();
        }
    });
    c.addEventListener('keyup', () => {
        cls['txt-in'].value = fixTxt(cls['txt-in'].value);
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
        if(!d.fullscreenEnabled && !d.webkitFullscreenEnabled) {
            if(t.style.display == 'block') {
                t.style.display = 'none';
            }
        }
    }
});
