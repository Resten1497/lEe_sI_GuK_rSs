// let express = require('express');
// let app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

// 일급 함수 
// 변수에 함수넣기 
let a = (a,b) => { return a+b }

//console.log(a(2,4))
function add(a){
    return function(b){
        return a+b
    }
}

let base2 = add(2); //리턴된 function을 가지는 함수 -> a는 클로저
console.log(add(1)) // 해당 코드 실행시 함수 반환
console.log(base2(5))
// 안에서 바깥 요소를 접근할수 있으면 클로저

let temp = {'a':0};  // 객체

console.log(temp['a'])

temp['b'] = 10
console.log(temp.b)

console.log("////////////////////////////////////////////\n")

let student = [
    {name: 'man', age: 10},
    {name: 'wow', age: 57},
    {name: 'restern', age: 20},
    {name: 'fume', age: 19}
]

function mappap(array, iteratee){
    for(let i = 0; i < array.length ; i++){
        iteratee(array[i])
    }
}

function findPPAP(array,iteratee,predicate){
    let result = [];
    for(let i = 0; i < array.length ; i++){
        if(predicate(array[i])) { result.push(iteratee(array[i])) }
    }
    return result;
}

function logName(arrayKey){
    return arrayKey.name
}

function logAge(arrayKey){

   return arrayKey.age <= 19 ? true : false;
}

console.log(findPPAP(student,logName,logAge))