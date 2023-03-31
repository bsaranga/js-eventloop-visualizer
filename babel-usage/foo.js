var babel = require('babel-core')

var transformed = babel.transform(`function foo() {
    console.log('HelloWorld');
}`, {

});

console.log(transformed.ast)