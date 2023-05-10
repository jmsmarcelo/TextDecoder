function encrypt(t) {
    let arrTxt = t.split('');
    const keys = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };
    for(var i = 0; i < arrTxt.length; i++) {
        if(typeof keys[arrTxt[i]] !== 'undefined') {
            arrTxt[i] = keys[arrTxt[i]];
        }
    }
    return arrTxt.join('');
}
function decrypt(t) {
    return t.
        replace(/enter/g, 'e').
        replace(/imes/g, 'i').
        replace(/ai/g, 'a').
        replace(/ober/g, 'o').
        replace(/ufat/g, 'u');
}
function fixTxt(t) {
    return t.toLowerCase().
        replace(/[à-ã]/g, 'a').
        replace(/[è-ê]/g, 'e').
        replace(/[ì-î]/g, 'i').
        replace(/[ò-õ]/g, 'o').
        replace(/[ù-û]/g, 'u').
        replace(/ç/g, 'c').
        replace(/[^a-z0-9\,\.\!\?\s\n]/g, '').
        replace(/^[\s\n]+/gm, '').
        replace(/\s\s+/g, ' ');
}
function changeOut() {
    cls['txt-no'].style.display = 'none';
    cls['txt-out'].style.display = 'block';
    cls['btn-copy'].style.display = 'block';
}
function copyTxt() {
    try {
        navigator.clipboard.writeText(cls['txt-out'].innerText).
            then(() => {
                cls['btn-copy'].innerText = 'Copiado!';
                setTimeout(() => {
                    cls['btn-copy'].innerText = 'Copiar';
                }, 3000);
            }).catch(() => {
                copyTxtOld();
            });
    } catch {
        copyTxtOld();
    }
}
function copyTxtOld() {
    let txtElem = d.createElement('textarea');
    let copied = true;
    txtElem.value = cls['txt-out'].innerText;
    d.body.appendChild(txtElem);
    txtElem.select();
    try {
        d.execCommand('copy');
    } catch {
        alert('Não foi possível copiar!');
        copied = false;
    } finally {
        if(copied) {
            d.body.removeChild(txtElem);
            cls['btn-copy'].innerText = 'Copiado!';
            setTimeout(() => {
                cls['btn-copy'].innerText = 'Copiar';
            }, 3000);
        }
    }
}
function changeScreen() {
    if(navigator.userAgent.match(/Mac/i)) {
        if(!d.webkitFullscreenElement) {
            if(dE.webkitEnterFullscreen) {
                dE.webkitEnterFullscreen();
            } else if(dE.webkitRequestFullscreen) {
                dE.webkitRequestFullscreen();
            }
        } else if(d.webkitFullscreenElement) {
            if(d.webkitExitFullscreen) {
                d.webkitExitFullscreen();
            }
        }
    }
    if(!d.fullscreenElement) {
        if(dE.requestFullscreen) {
            dE.requestFullscreen();
        }
    } else if(d.fullscreenElement) {
        if(d.exitFullscreen) {
            d.exitFullscreen();
        }
    }
}