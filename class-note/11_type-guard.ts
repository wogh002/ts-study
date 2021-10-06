{
    // 타입가드를 왜 써야하는가? 아래를 보자
    interface Developer {
        name: string;
        skill: string;
    }
    interface Person {
        name: string;
        age: number;
    }

    // 함수의 인자로 받은 타입이 Developer나 Person 모두 취급할 수 있기 때문에 어느 타입이 들어올지 몰라 안전한 `name` 값만 접근할 수 있다고 보면 되구요.
    function test(someone: Developer | Person) {
        console.log(someone.name);
    }

    // union Type 어떤 타입이 들어올지 모르기때문에 안전한 `name` 값만 접근 가능
    // TS는 보장된 속성만 제공이된다. ✨✨
    function introduce(): Developer | Person {
        return { name: 'jaeho', skill: 'ts', age: 26 }
    }
    const jaeho = introduce();
    //jaeho 변수를 사용할 시점에 생각해보자
    // union type 에 의하여 공통된 속성 name 만 접근 가능하다.
    console.log(jaeho.name);
    //타입 어썰션 (단언) 을 이용하면 skill or age 접근 가능
    if ((jaeho as Developer).skill) {
        console.log((jaeho as Developer).skill);
    }
    else if ((jaeho as Person).age) {
        console.log((jaeho as Person).age);
    }
    // 타입가드
    // function is해당타입() {

    // }
    //타입가드 정의 ✨ 많이 사용하는 패턴
    function isDeveloper(target: Developer | Person): target is Developer {
        // undefined 아니라면 true .
        return (target as Developer).skill !== undefined;
    }
    if (isDeveloper(jaeho)) {
        console.log(jaeho.skill);
    }
    else console.log(jaeho.age);
}