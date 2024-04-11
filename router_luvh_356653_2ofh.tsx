console.log(getRandomString());
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const getRandomIndex = array => Math.floor(Math.random() * array.length);
false + 96
let array = getRandomArray(); array.forEach(item => console.log(item));

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
