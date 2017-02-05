function parseUrl(url) {
    var a = {};
    var searchIndexAfterProtocol = url.indexOf('://') + 3, hostPortDelim = url.indexOf(':', searchIndexAfterProtocol);
    if (hostPortDelim > -1) {
        a.port = url.substring(hostPortDelim + 1, url.indexOf('/', searchIndexAfterProtocol));
        a.hostname = url.substring(searchIndexAfterProtocol, hostPortDelim);
        a.host = a.hostname + ':' + a.port;
    } else {
        a.hostname = url.substring(searchIndexAfterProtocol, url.indexOf('/', searchIndexAfterProtocol));
        a.port = undefined;
        a.host = a.hostname;
    }
    a.pathname = url.indexOf('?') > -1 ? url.substring(url.indexOf('/', searchIndexAfterProtocol), url.indexOf('?')) : undefined;
    a.hash = url.indexOf('#') > -1 ? url.substring(url.lastIndexOf('#')) : undefined;
    a.href = url;
    a.protocol = url.substring(0, url.indexOf('/'));
    a.origin = a.protocol + '//' + a.host;
    return a;
}

let a = parseUrl('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo');

// Вернет объект, в котором будут следующие свойства:
console.log( a.href == "http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" );
console.log( a.hash == "#foo" );
console.log( a.port == "8080" );
console.log( a.host == "tutu.ru:8080" );
console.log( a.protocol == "http:" );
console.log( a.hostname == "tutu.ru" );
console.log( a.pathname == "/do/any.php" );
console.log( a.origin == "http://tutu.ru:8080" );