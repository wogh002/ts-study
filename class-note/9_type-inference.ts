{
    // 타입추론 -기본
    // typescript language server 가 돌면서 알아서 타입작성을 해준다.
    var a = 'abc';
    function getB(b = 10) {
        var c = 'hi';
        return b + c;
    }
    // 타입추론- 기본2
    interface Dropdown<T> {
        value: T;
        title: string;
    }
    // const shoppingItem: Dropdown<string> = {
    //     value: '문자열',
    //     title: '얘도 문자열'
    // }
    // 타입추론- 기본3
    interface DetailDropdown<K> extends Dropdown<K> {
        description: string;
        tag: K;
    }
    const detailedItem: DetailDropdown<number> = {
        value: 123,
        title: '얘도 문자열',
        description: 'aaa',
        tag: 123,
    }
    // Best Common Type 
    var arr = [1, 2, true];

}