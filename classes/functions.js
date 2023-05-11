function encrypt(t) {
    return t.
        replace(/e/g, 'enter').
        replace(/i/g, 'imes').
        replace(/a/g, 'ai').
        replace(/o/g, 'ober').
        replace(/u/g, 'ufat');
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
    return t.
        toLowerCase().
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
    let copied = true;
    let txtElem = d.createElement('textarea');
    txtElem.value = cls['txt-out'].innerText;
    d.body.appendChild(txtElem);
    txtElem.select();
    try {
        d.execCommand('copy');
    } catch {
        alert('Não foi possível copiar!');
        copied = false;
    } finally {
        d.body.removeChild(txtElem);
        if(copied) {
            cls['btn-copy'].innerText = 'Copiado!';
            setTimeout(() => {
                cls['btn-copy'].innerText = 'Copiar';
            }, 3000);
        }
    }
}
function scnMode() {
    if(d.webkitFullscreenElement || d.fullscreenElement) {
        if(d.exitFullscreen) {
            d.exitFullscreen();
        } else if(d.webkitExitFullscreen) {
            d.webkitExitFullscreen();
        }
    } else {
        if(dE.requestFullscreen) {
            dE.requestFullscreen();
        } else if(dE.webkitRequestFullscreen) {
            dE.webkitRequestFullscreen();
        } else if(dE.webkitEnterFullscreen) {
            dE.webkitEnterFullscreen();
        }
    }
}