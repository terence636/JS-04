
// Solution 1
const star = '*'
for (let i=1;i<=5;i++) {
  console.log(star.repeat(i))
}

// Solution 2
for (let i = 0; i < 5; i++) {
  let asterick = "*";
  for(let j=0;j<i;j++) {
    asterick = asterick.concat("*");
  }
  console.log(asterick);
}

