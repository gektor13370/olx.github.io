function generateUuid() {
    function e() {
        return t ? 15 & t[n++] : (16 * Math.random()) | 0;
    }
    var t = null,
        n = 0,
        r = window.crypto || window.msCrypto;
    r && r.getRandomValues && (t = r.getRandomValues(new Uint8Array(31)));
    for (var o, i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", a = "", s = 0; s < i.length; s++) "x" === (o = i[s]) ? (a += e().toString(16)) : "y" === o ? (a += (o = (3 & e()) | 8).toString(16)) : (a += 0);
    return a;
}

document.write(generateUuid())
