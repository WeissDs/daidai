var a = "aaaa";
console.log(a);
var b = [{ qq: 'qw' }, { qq: 'wwww' }, { qq: '123' }];
var result = b.map(function (item) {
    return item;
});
console.log(result);
var Change = /** @class */ (function () {
    function Change() {
    }
    Change.prototype.fun1 = function () {
        console.log(1);
    };
    return Change;
}());
var change1 = new Change();
change1.fun1();
