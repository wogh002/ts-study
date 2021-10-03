{
    // JS는 프로토타입기반의 언어다.
    class Person {
        //클래스는 인스턴스를 생성하기 때문에 기본적으로 생성자가 필요하다. 
        constructor(name, age) {
            // 초기화 메서드
            // this = {} 생성자 함수는 빈객체가 암시적으로 만들어진다
            console.log('생성되었습니다');
            this.name = name;
            this.age = age;
            // this = { name, age}
        }
    }
    // new Person('재호', 26); //여기 까지가 인스턴스 생성.
    const user = new Person('재호', 26);
    console.log(user.name);
}