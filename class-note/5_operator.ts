{
    // union Type == OR | 
    // 파라미터나 변수에 한가지 이상의 타입을 사용하고 싶을 때.
    let jaeho: string | boolean | number;
    function logMessage(value: string | number) {
        console.log(typeof value);
        if (typeof value === 'number') {
            console.log(value.toLocaleString());
        }
        else if (typeof value === 'string') {
            value.toString();
        }
        else {
            throw new TypeError('value must be string or number');
        }
    }
    logMessage(100);

    // union Type 특징
    interface Developer {
        name: string;
        skill: string;
    }
    interface Person {
        name: string;
        age: number;
    }
    // Union Type (OR) | ==>   공통된 프로퍼티만 접근이 가능하다. name 만! (교집합)
    function askSomeone(someone: Developer | Person) {
        // TS관점에서 someone 에 어떤 값이 대입 될 줄 모르기 때문에. someone.age 에러.
        // TS는 보장된 속성만 제공이된다. ✨✨
        console.log("aaaaaaaaaaaa " + someone.name);
    }
    // Person 들어감.
    askSomeone({ name: 'jaeho', age: 26 });

    // InterSection Type (AND) === &
    function askSomeone2(someone: Developer & Person) {
        // 싹 다 접근가능.
        console.log(someone.age);
    }
    askSomeone2({ name: 'jaeho', skill: 'react && ts', age: 26 });

}