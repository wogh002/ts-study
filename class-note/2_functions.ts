{
    // vscode 내부적으로 ts language server 돌고 있음.
    //즉 , 알아서 리턴 값을 타입추론을 한다는 것.
    function sum(a: number, b: number) {
        return a + b;
    }
    sum(10, 20);
    // 함수의 옵셔널 파라미터(?) (인자를 사용해도 되고 안해도 된다는 의미)
    function log(a: string, b?: string, c?: string) {
        
    }
    log('jaeho');
    log('aaa', 'aaaaa');
}