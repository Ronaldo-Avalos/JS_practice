 const price = "16,000.00";

const textoprom = 'en promocion'.repeat(3);
console.log(textoprom);
console.log(`${product} ${textoprom} !!!`);

//split permite dividir un string

//Este ejemplo recoje los hobbies y los separa por , y 
// les quita los espacios entre palabras y los guarda en una 
// lista.

const hobbies = "Dormir, Comer, Programar, Estudiar";
console.log("hobbies: " + hobbies);
const list = []; 
hobbies.split(",").forEach((element, index) => {
list[index] = (element.trim());
});
console.log(list);

