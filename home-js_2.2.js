// Напиши скрипт подсчета стоимости гравировки украшений.
//     Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
// принимающую строку (в строке будут только слова и пробелы)
// и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.
//

let totalPrice = 0;


const calculateEngravingPrice = function(message, pricePerWord){

    const messageArr = message.split(' ');

    for(let i = 0; i < messageArr.length; i += 1){

        totalPrice = (i + 1) * pricePerWord;

    }

    return(totalPrice);
}

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',
    10,));



    console.log(calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        80, ));


console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        20,
    ));


console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40,)); // 240

console.log(
     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20,),
); // 120


// /     const calculateEngravingPrice = function(message, pricePerWord) {
// //     // твой код
// // };
// //
// // /*
// //  * Вызовы функции для проверки работоспособности твоей реализации.
// //  */
// // console.log(