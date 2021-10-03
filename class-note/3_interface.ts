// 객체를 다룰 때는 인터페이스를 그 외에는 타입별칭을 쓰자
// 인터페이스:  해당 데이터 구조에 대한 타입 정의 (상호간에 규칙)
//데이터의 규격
interface User {
    age: number,
    name: string,
}
// 변수에 활용한 인터페이스
const jaeho: User = {
    age: 26,
    name: 'jaeho'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const capt = {
    name: '캡틴',
    age: 30,
}
getUser(capt);

//함수의 스펙(구조,규칙)에 인터페이스를 활용.
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;

sum = function (a: number, b: number): number {
    return a + b;
}
sum(1, 2);

// 인덱싱
interface StringArray {
    [index: number]: string
}
var arr: StringArray = ['a', 'b', 'c'];
arr[0];

// 인터페이스 딕셔너리 패턴(딕셔너리? 객체의 프로퍼티에 어떻게 접근할 것인지 정의하는 방식)
interface StringRegexDictionary {
    [key: string]: RegExp;
}
// 대괄호 접근 연산자
// obj['cssFile'] = 'asd';

var obj: StringRegexDictionary = {
    // something: /abc/, 
    cssFile: /\.css$/,
    jsFile: /\.js$/,
    // abc : 'a'; (x)
}

//Object.keys 리턴 타입 = String[]
Object.keys(obj).forEach(item => console.log(item));

// 인터페이스 상속
interface Person {
    name: string;
    age: number;
}
interface Developer extends Person {
    name: string;
    age: number;
    language: string;
}

var capt1: Developer = {
    name: '재호',
    age: 26,
    language: 'ts',
}



