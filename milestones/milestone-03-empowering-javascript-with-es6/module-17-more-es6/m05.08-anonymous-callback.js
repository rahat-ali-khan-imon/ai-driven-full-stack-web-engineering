// Anonymous ----> নাম প্রকাশে অনিচ্ছুক

function calculate(a, b, callback) {
    callback(a + b);
}

calculate(10, 20, function(result) {
    console.log(result);
})