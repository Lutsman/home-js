const destinationCountry = prompt('Введите название страны');
let possibleCountry;
let price;
const china = 'Китай';
const australia = 'Австралия'
const chile = 'Чили';
const india = 'Индия';
const jamaica = 'Ямайка';

if(destinationCountry.toLowerCase() === china.toLowerCase()){
    possibleCountry = china;
    price = 100;
} else if(destinationCountry.toLowerCase() === australia.toLowerCase()){
    possibleCountry = australia;
    price = 170;
}else if(destinationCountry.toLowerCase() === chile.toLowerCase()){
    possibleCountry = chile;
    price = 150;
}else if(destinationCountry.toLowerCase() === india.toLowerCase()){
    possibleCountry = india;
    price = 120;
} else if(destinationCountry.toLowerCase() === jamaica.toLowerCase()){
    possibleCountry = jamaica;
    price = 140;
}
console.log(price);
console.log(possibleCountry);

