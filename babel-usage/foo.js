var babel = require('babel-core')

var transformed = babel.transform(`function square(n) {
    return n*n;
}`, {

});

console.log(JSON.stringify(transformed.ast))