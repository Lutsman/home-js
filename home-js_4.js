const credits = 23580;
const pricePerDroid = 3000; 
const quantity = prompt('Кол-во дроидов');
let totalPrice;
let balance;
if(quantity === null){
    console.log('Отменено пользователем');
} else {
    totalPrice = quantity * 3000; 
if(totalPrice > credits){
console.log('Недостаточно средств на счету')
} else {
    balance = credits - totalPrice 
    console.log(`Вы купили${quantity} дроидов, на счету осталось ${balance} кредитов`)
}
}