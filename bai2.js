let number1=parseInt(prompt('Bạn muốn nhập bao nhiêu số'));
let numberarray=[];
for (let i=0;i<number1;i++){
    number=parseInt(prompt('Nhập một số'));
    numberarray.push(number);
    if(numberarray[i]%2===0){
        numberarray.splice(i,i+1,'-'+number);
    }else {
        numberarray.splice(i,i+1,number);
    }
}
document.write(numberarray.join(''));