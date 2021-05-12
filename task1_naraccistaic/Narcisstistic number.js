let input=prompt("Enter a number");
function narcissistic(item){
let result=0;
//convert each digit to separt index
let arr=Array.from(String(item), Number);
let 
arrmutl=arr.map
(b=>b**arr.length);
result= arrmutl.reduce((a,b)=>(a+b),0);
if(result === Number(item)){
console.log("Narcisstistic number");
}
else {
console.log("Not Narcisstistic number");
}

}

narcissistic(input);