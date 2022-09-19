var str = prompt('Nhập chữ của bạn');
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVgiWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var text = [];
for(var i=0; i<str.length; i++) {
    if(UPPER.indexOf(str[i]) !== -1)
    {
        text.push(str[i].toLowerCase());
    }
    else if(LOWER.indexOf(str[i]) !== -1)
    {
        text.push(str[i].toUpperCase());
    }
    else
    {
        text.push(str[i]);
    }
}
document.write(text.join(''));
