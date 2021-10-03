{
    // 단점 ⚡❗ 타입을 각각정의 하게 될 시 (중복발생)
    function logText2(str: string) {
        return str;
    }
    function logText3(num: number) {
        return num;
    }
    // function logText(text: string | number) {
    //     console.log(text);
    //     return text;
    // }

    // ✨👍
    // 제네릭. = 어떤 타입이든 사용할껴 , <T> 타입받기
    //타입정의에 대한 이점이 good! 
    //객체를 호출한 시점에 타입결정.
    function logText<T>(text: T): T {
        console.log(text);
        return text;
    }
    const str = logText<string>('a');
    const login = logText<boolean>(true);

    // 인터페이스에 제네릭을 선언하는 방법
    interface Dropdown<T> {
        value: T;
        selected: boolean;
    }
    const obj: Dropdown<string> = {
        value: 'jaeho',
        selected: true,
    }
}