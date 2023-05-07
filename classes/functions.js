function encrypt(t) {
    let arrTxt = t.split('');
    const keys = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };
    for(var i = 0; i < arrTxt.length; i++) {
        if(typeof keys[arrTxt[i]] != 'undefined') {
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
        replace(/ç/, 'c').
        replace(/[^a-z0-9\,\.\!\?\s\n]/g, '').
        replace(/^[\s\n]+/m, '').
        replace(/\s\s+/g, ' ');
}
