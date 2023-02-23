// let i = 0;
// let arr = [2,1,3,4,5];

// const id = setInterval(print ,1000); 
// function print(){
//   if(i == arr.length - 1)
//     { 
//       clearInterval(id);
//       return ;
//     }

//   console.log(arr[i]);
//   i =i+1;
// }
// console.log(89);

//sort without loop methods
let i = 0,j = 0;
let arr = [2,1,3,2333,-78,4,5];
let compId;
const id = setInterval(()=>{
  i = 0;
  compId = setInterval(comp);
  if(j == arr.length)
    clearInterval(id);
  j++;
});

function comp(){
  if(i == arr.length - 1)
    { 
      clearInterval(compId);
      return ;
    }
    if(arr[i]>arr[i+1])
    {
      let temp = arr[i];
      arr[i]= arr[i+1];
      arr[i+1] = temp;
    }
  /* console.log(arr[i]); */
  i =i+1;
}
setTimeout(()=>console.log(arr),5000);