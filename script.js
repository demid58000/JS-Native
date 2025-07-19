const array = [1, 2, 3];

array.push(10);

// const copyArray = [];
//
// for (let i = 0; i < array.length; i++) {
//     copyArray.push(array[i]);
// }

// объекты (object array function)
// - сложная структура
// - имеют методы
// - ссылочный тип данных

const nextArray = array; //([] или new Array)
nextArray.push(100);
const copyArray =[...array]; //spread оператор

const student = {
    id: 1,
    name: "Bob",
    isStudent: true,
    age: 34
}


