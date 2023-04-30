var idTxt = document.getElementById('txt');
var idEnc = document.getElementById('enc');
var idDec = document.getElementById('dec');
var idCopy = document.getElementById('copy');
var deskOut = document.getElementById('desk_out');
var outTxt = document.getElementById('out_txt');
var idNone = document.getElementById('none');
var idFound = document.getElementById('found');
var copyTxt = true;
idCopy.onclick = function() {
    try {
        navigator.clipboard.writeText(outTxt.innerText);
    } catch(e) {
        if(e.message.match(/Cannot read properties/) && !window.isSecureContext) {
            alert('Não foi possível copiar!\nAcesse o site em HTTPS');
            copyTxt = false;
        }
    } finally {
        if(copyTxt) {
            idCopy.value = 'Copiado!';
            setTimeout(function() {
                idCopy.value = 'Copiar';
            }, 3000);
        }
    }
}
idTxt.onkeyup = function() {
    idTxt.value = fixTxt(idTxt.value);
}
idEnc.onclick = function() {
    idTxt.value = fixTxt(idTxt.value);
    if(idTxt.value != '') {
        idNone.style.display = 'none';
        idFound.style.display = 'block';
        outTxt.innerText = encrypt(idTxt.value);
    }
}
idDec.onclick = function() {
    idTxt.value = fixTxt(idTxt.value);
    if(idTxt.value.match(/enter|imes|ai|ober|ufat/g)) {
        outTxt.innerText = decrypt(idTxt.value);
        idNone.style.display = 'none';
        idFound.style.display = 'block';
    }
}
