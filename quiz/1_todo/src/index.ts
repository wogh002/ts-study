{
  // 타입 별칭
  // type Todo = {
  //   id: number,
  //   title: string,
  //   done: boolean
  // }
  type Yeran = string | number | boolean;
  type YeranFavoriteFood = 'noodle' | 'pizza' | 'somewhat';
  // 객체를 다룰 때는 인터페이스를 그 외에는 타입별칭을 쓰자
  // 인터페이스:  해당 데이터 구조에대한 타입 정의
  interface Todo {
    id: number;
    title: string;
    done: boolean;
  }
  // let todoItems: Array<{ id: number; title: string; done: boolean }>;
  let todoItems: Todo[];

  function fetchTodoItems(): Array<Todo> {
    const todos = [
      { id: 1, title: '안녕', done: false },
      { id: 2, title: '타입', done: false },
      { id: 3, title: '스크립트', done: false },
    ];
    return todos;
  }

  // crud methods
  function fetchTodos(): Array<Todo> {
    const todos = fetchTodoItems();
    return todos;
  }

  function addTodo(todo: Todo): void {
    todoItems.push(todo);
  }
  function deleteTodo(index: number): void {
    todoItems.splice(index, 1);
  }

  function completeTodo(index: number, todo: Todo): void {
    todo.done = true;
    todoItems.splice(index, 1, todo);
  }

  // business logic
  function logFirstTodo(): Todo {
    return todoItems[0];
  }

  function showCompleted(): Array<Todo> {
    return todoItems.filter((item: Todo): boolean => item.done);
  }

  // TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수 입니다.
  function addTwoTodoItems(): void {
    // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
    addTodo({ id: 4, title: '운동하기', done: false });
    addTodo({ id: 5, title: '식사하기', done: true });
  }

  // NOTE: 유틸 함수
  function log(): void {
    console.log(todoItems);
  }
  todoItems = fetchTodoItems();
}
