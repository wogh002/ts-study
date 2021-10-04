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

    // 제네릭의 타입제한
    // TS입장에서는 제네릭 ✨ logTextLength 함수가 어떤 타입이 올지 예측불가하다 ✨ 그래서 text.length(X);
    // T[] 로 주자 (타입 힌트를 추가적으로 주자)
    function logTextLength<T>(text: T[]): T[] {
        text.forEach((item) => {
            console.log(item);
        })
        return text;
    }
    const logLength = logTextLength<string>(['hi', 'abcccc']);

    //제네릭 타입 제한 2 - 정의된 타입 이용하기
    interface LengthType {
        length: number;
    }
    function logTextLength2<T extends LengthType>(text: T): T {
        console.log(text.length);
        return text;
    }
    logTextLength2('a');
    logTextLength2({ length: 5 });

    // 제네릭 타입 제한 3 -keyof 이미 정의되어 있는 타입의 key 값만 '' 받을 수 있음.
    interface ShoppingItem {
        name: string;
        price: number;
        stock: number;
    }
    function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
        return itemOption;
    }
    getShoppingItemOption('name');
}