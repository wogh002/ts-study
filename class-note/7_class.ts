{
    class Person {
        // TS에서는 클래스의 최상단에 멤버변수 타입을 적어줘야한다.
        public name: string;
        private age: number;
        readonly log: string;
        constructor(name: string, age: number) {
            //this.xxx === 멤버변수
            this.name = name;
            this.age = age;
        }
    }
}