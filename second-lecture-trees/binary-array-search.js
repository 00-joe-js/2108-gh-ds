const randomNumber0To99999 = () => Math.floor(Math.random() * 100000);
const array = new Array(100).fill("").map(() => randomNumber0To99999());

const sortedNumbers = array.sort((a, b) => a < b ? -1 : 1);

console.log(JSON.stringify(array));