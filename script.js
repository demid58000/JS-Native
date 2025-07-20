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
const copyArray = [...array]; //spread оператор

const student = {
    id: 1,
    name: "Bob",
    isStudent: true,
    age: 34
}

function checkDataUpdate(data, newData) {
    if (data !== newData) {
        console.clear()
        console.log(newData)
    } else {
        console.log("Данные не обновились")
    }

}

const newStudent = {...student, age: 35};

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]
//CRUD create read update delete

// create

const newUser = {
    id: 5,
    name: "Valera",
    isStudent: true
}

const updatedUsers = [newUser, ...users];

// update user id =3 => not student now

const updatedUsers = users.filter(user => {
    if (iser.id !== 3) {
        return true
    } else {
        return false
    }
})

// filter возвращет новый мсассив
// update user id =3 => change name to Helen

const updatedUsers2 = users.map(user => { if(user.id === 1) {return {...user, name: "Helen"}} else {return user}})

//map возвращает новый массив
//деструктурирующее присваивание

const nextUser = {
    id: 5,
    name: "Valera",
    isStudent: true
}

// const name = nextUser.name;
// const isStudent = nextUser.isStudent;

const {name: name, isStudent: isStudent} = nextUser;


