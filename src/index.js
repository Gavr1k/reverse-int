module.exports = function reverse (n) {
    let buf = String(n);
    let for_return = '';
    for(let i = buf.length - 1; i > -1; i = i - 1)
    {
    	if(buf[i] == '-') continue;
        for_return = for_return + buf[i];
    }
    return Number(for_return);
}
