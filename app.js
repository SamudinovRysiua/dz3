// var  fruits = ["banana", "kiwi", "strawberry", "watermelon", "cherry"];
// var fruitsForFound = 'watermelon';
// var i = 0;
//
// // while (i < 5){
// //     if(fruits[i] === fruitsForFound)
// //             console.log("Fruit found on index", i);
// //     i++;
// // }
//
// // var randNum = Math.floor(Math.random() * (9 - 0 + 1));
// // do {
// //     var num = Number(prompt("Enter num 1-9"))
// // }while (num !== randNum);
// // console.log("Success i guess", randNum);
//
// for (var i = 1; i <= 12; i += 2){
//     var month;
//     var currentMonth = (new Date()) .getMonth() +1;
//     if (currentMonth === month) break
//     switch(i){
//         case 1: month = "January"; break;
//         case 2: month = "February"; break;
//         case 3: month = "March"; break;
//         case 4: month = "April"; break;
//         case 5: month = "May"; break;
//         case 6: month = "June"; break;
//         case 7: month = "July"; break;
//         case 8: month = "August"; break;
//         case 9: month = "September"; break;
//         case 10: month = "October"; break;
//         case 11: month = "November"; break;
//         case 12: month = "December"; break;
//     }
//     console.log((i === 1 ? "Year Starts with  " : "Then ") + month)
// }

//---------------------Home Task-------------------\\
//---------------------part1-----------------------\\
var start ='*'
var mass = ''
for(let i =0 ; i<8;i++){
    mass +=start
    console.log(mass)
}
//--------------------part2-------------------------\\

for(var i=0;i<100;i++){
    if(i%3===0 && i%5===0){
        console.log('FizzBuzz: '+i)
    }else if(i%3===0){
        console.log('Fizz: '+i)
    }else if(i%5===0){
        console.log('Buzz: '+i)
    }
}
//----------------------part3--------------------------\\
function CountLet(word,letter){
    var count = 0
    word = word.toLowerCase()
    letter = letter.toLowerCase()

    for(var a of word){
        if(a === letter){
             count++
        }
    }
    return console.log(count)

}
CountLet('BiLlion','l')

//--------------------------part4---------------------------\\
function Capital(wor){
  return   console.log(wor[0].toUpperCase()+wor.slice(1).toLowerCase())
}
Capital('eHJHJHH')