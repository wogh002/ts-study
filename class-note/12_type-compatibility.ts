{
    //타입 호환
    interface Developer {
        name: string,
        skill: string,
    }
    interface Person {
        name: string,
        skill: string,
        skill2: string,
    }
    let developer: Developer;
    let person: Person;
    // 오른쪽이 더 많으면 (구조적✨으로 더 크면) 타입 호환 가능.
    developer = person;
    // 함수
    // add < sum 구조적으로 더 크다 . (인자가 많기 때문)
    const add = (a: number) => {
        console.log(a);
    }
    const sum = (a: number, b: number): number => {
        return a + b;
    }

}