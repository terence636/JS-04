const printHeader = (section) => {
  console.log("*******");
  console.log(section)
  console.log("*******");
}

printHeader("PART1")
let xValue = 3;
while(true) {
  console.log(xValue)
  xValue -= 0.5;
  if(xValue < 0)
    break;
}


printHeader("PART2");
for(let num=0;num<100;num++) {
  if(num%2 !== 0)
    console.log(num)
}

printHeader("PART3");

const printNumInSqBrackets = (count) => {
  console.log("n = ",count)
  let n=1;
  while(n<=count) {
    console.log(`[${n}]`)
    n++
  }
}
printNumInSqBrackets(10)

printHeader("PART4")

const computeSumOfNPosInt = (n) => {
  let i=0;
  let sum=0;
  while(i<=n) {
    sum += i
    i++
  }
  console.log(`n = ${n}, sum = ${sum}`)
  return sum;
}

const testResult = () => {
  console.log(computeSumOfNPosInt(10)===55);
  console.log(computeSumOfNPosInt(100) === 5050);
  console.log(computeSumOfNPosInt(1000) === 500500);
}

testResult()
