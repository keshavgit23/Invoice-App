let array = [2,4,5,3,7]
let sum = 0
array.forEach(element => {
    sum +=element
});
console.log(sum)

let array_2 = [2,4,[5,3,6],7]

;let flat = array_2.flat(Infinity)
console.log('Flatten',flat);

let a = "DiffieHellmanGroup" 
let b = 232

console.log(`${a}`,`${b}`)