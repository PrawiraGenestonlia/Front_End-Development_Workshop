function reverseString (str){
  let length = str.length;
  let newstr="";
  while (length>=0){
    newstr += str.charAt(length);
    length -=1;
  }
  return newstr;
}

// console.log(reverseString("HELLO WORLD! TODAY"));

function evenNumberInArray (arr){
  let newarr=[];
  let i=0;
  let j=0
  while (i<=arr.length){
    if(arr[i]%2===0){
      newarr[j]=arr[i];
      j++;
    }
    i++;
  }
  return newarr;
}

const reverseString2 = str => new Array(str).reverse().join("");
const filterEven = numbers.filter(numbers => !(numbers%2));

console.log(evenNumberInArray([2,2,3,4,5,6,7,8]));
