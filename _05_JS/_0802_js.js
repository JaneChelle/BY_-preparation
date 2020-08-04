let test = (function (i) {
    return function () {
        // alert(i *= 2);  // alert弹出结果皆为字符串
        console.log((i *= 2));
    }
})(2);
test(5);

let a = 0, b = 0;

function A(a) {
    A = function (b) {
        console.log((a + b++));
    };
    console.log((a++));
}

A(1);
A(2);
