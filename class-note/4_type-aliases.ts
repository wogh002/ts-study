interface Person {
    name: string;
    age: number;
}
// type Person = {
//     name: string;
//     age: number;
// }
type Todo = { id: string; nickname: string; age: number };
function getTodo(todo: Todo) {

}
//type 별칭은 확장(상속) 이 되지 않는다 가급적이면 Interface를 사용하자
