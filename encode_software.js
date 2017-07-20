var encrypt = null;
var userinput = "";
var result = "";
 
function validateInput(inputField, displayField) {
    var re = /[a-z]+/;
    if (re.test(inputField.value)) {
        displayField.innerHTML = inputField.value;
    }
    else {
        displayField.innerHTML = "Wrong!!";
    }
}
 
function display(choice, inputField, displayField) {
    var message;
    switch (choice) {
        case "new":
            encrypt = new Encrypt();
            message = "code: " + encrypt.showCode();
            break;
                 
        case "save":
            if (encrypt == null) {
                message = "No Encrypt object can save!!";
            }
            else {
                document.cookie = "code=" + encrypt.showCode();
                message = "The code is saved.";
            }
            break;
 
        case "load":
            var t = document.cookie;
            if (t == "") {
                message = "Load denied!!";
            }
            else {
                encrypt = new Encrypt();
                t = t.substring(5);
                encrypt.setCode(t)
                message = "code: " + encrypt.showCode();
            }
            break;
                 
        case "encode":
            userinput = inputField.value;
             
            if (userinput == "") {
                message = "No input string!!";
            }
            else {
                if (encrypt == null) {
                    message = "No encrypt object!!";
                }
                else {
                    result = encrypt.toEncode(userinput);
                    message = "encoded result: " + result;
                }
            }
            break;
     
        case "decode":
            userinput = inputField.value;
             
            if (userinput == "") {
                message = "No input string!!";
            }
            else {
                if (encrypt == null) {
                    message = "No encrypt object!!";
                }
                else {
                    result = encrypt.toDecode(userinput);
                    message = "decoded result: " + result;
                }
            }
            break;
 
        case "clear":
            inputField.value = "";
            encrypt = null;
            userinput = "";
            result = "";
            message = "It's done.";            
            break;
                 
        default:
            message = "Wrong choice!!";
    }
     
    displayField.innerHTML = message;
}
 
/* 《程式語言教學誌》的範例程式
   http://pydoing.blogspot.com/
   檔名：encode_software.js
   功能：示範 JavaScript 程式
   作者：張凱慶
   時間：西元 2012 年 12 月 */