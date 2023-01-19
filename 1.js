const arr = [1, 8, 1, 4, 0, 12, 7, 8,"dsfdsf","dxsdsdsd"];
let even = 0;
let odd = 0;
let zero = 0;
let word = 0;
function getEvenOdd() {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] === 0) {
                zero++;
            } else if (arr[i]%2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }
    console.log(`нули ${zero}; четные ${even}; нечетные ${odd};`)
}
function getWord(){
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !=="number"){
      word++;
    }
  }
  console.log(` Слова ${word}`)
}
getEvenOdd();
getWord();