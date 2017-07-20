function Encrypt() {
    this.code = "abcdefghijklmnopqrstuvwxyz".split("", 26);
    var i = this.code.length;
    while (i) {
        var j = parseInt(Math.random() * i);
        var x = this.code[--i];
        this.code[i] = this.code[j];
        this.code[j] = x;
    }
     
    this.alph = "abcdefghijklmnopqrstuvwxyz".split("", 26);
}
 
Encrypt.prototype.showCode = function() {
    return this.code.join("");
}
 
Encrypt.prototype.setCode = function(c) {
    this.code = c.split("", 26);
}
 
Encrypt.prototype.toEncode = function(str) {
    var result = "";
    var i = 0;
    var len = str.length;
    while (i < len) {
        var regExp = /^[a-z]+$/;
        if (regExp.test(str[i])) {
            var j = this.alph.indexOf(str[i])
            result += this.code[j];
        }
        else {
            result += str[i];
        }
             
        i++;
    }
     
    return result;
}
 
Encrypt.prototype.toDecode = function(str) {
    var result = "";
    var i = 0;
    var len = str.length;
    while (i < len) {
        var regExp = /^[a-z]+$/;
        if (regExp.test(str[i])) {
            var j = this.code.indexOf(str[i]);
            result += this.alph[j];
        }
        else {
            result += str[i];
        }
             
        i++;
    }
     
    return result;
}
 
/* 《程式語言教學誌》的範例程式
   http://pydoing.blogspot.com/
   檔名：encrypt.js
   功能：示範 JavaScript 程式
   作者：張凱慶
   時間：西元 2012 年 12 月 */