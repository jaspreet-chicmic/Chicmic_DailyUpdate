const arr = [2, 1, 3, 2333, -78, 4, 5];
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => console.log(arr[i]), arr[i]);
}
// arr.push to inplace
