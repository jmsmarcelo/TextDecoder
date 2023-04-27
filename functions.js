function encrypt(t) {
    var textArray = t.split('');
    for(var i = 0; i < textArray.length; i++) {
        if(textArray[i] == 'a') {
            textArray[i] = 'ai';
        } else if(textArray[i] == 'e') {
            textArray[i] = 'enter';
        } else if(textArray[i] == 'i') {
            textArray[i] = 'imes';
        } else if(textArray[i] == 'o') {
            textArray[i] = 'ober';
        } else if(textArray[i] == 'u') {
            textArray[i] = 'ufat';
        }
    }
    return textArray.join('');
}
function decrypt(t) {
    t = t.replace(/enter/g, 'e');
    t = t.replace(/imes/g, 'i');
    t = t.replace(/ai/g, 'a');
    t = t.replace(/ober/g, 'o');
    t = t.replace(/ufat/g, 'u');
    return t;
}
function copyText(t) {
    return navigator.clipboard.writeText(t.innerText);
}
