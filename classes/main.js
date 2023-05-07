var hdrObjs = document.querySelectorAll('header *');
var mainObjs = document.querySelectorAll('main [class^="btn-"], main [class^="txt-"]');
var cls = {};

mainObjs.forEach(function(c) {
    if(c.className.match(/^btn-|^txt-/)) {
        cls[c.className] = c;
    }
    c.addEventListener('click', function() {
        cls['txt-in'].value = fixTxt(cls['txt-in'].value);
        if(this.className == 'btn-enc' && cls['txt-in'].value.match(/[a-z]/)) {
            cls['txt-out'].innerText = encrypt(cls['txt-in'].value);
            cls['txt-no'].style.display = 'none';
            cls['txt-out'].style.display = 'block';
            cls['btn-copy'].style.display = 'block';
        } else if(this.className == 'btn-dec' && cls['txt-in'].value.match(/enter|imes|ai|ober|ufat/g)) {
            cls['txt-out'].innerText = decrypt(cls['txt-in'].value);
            cls['txt-no'].style.display = 'none';
            cls['txt-out'].style.display = 'block';
            cls['btn-copy'].style.display = 'block';
        } else if(this.className == 'btn-copy' && cls['txt-out'].innerText != '') {
            try {
                navigator.clipboard.writeText(cls['txt-out'].innerText).
                    then(() => {
                        cls['btn-copy'].innerText = 'Copiado!';
                        setTimeout(function() {
                            cls['btn-copy'].innerText = 'Copiar';
                        }, 3000);
                    });
            } catch {
                if(!window.isSecureContext) {
                    alert('Não foi possível copiar!\nAcesse o site em HTTPS');
                } else {
                    alert('Não foi possível copiar!');
                }
            }
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
            if(!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }
        return false;
    });
});
