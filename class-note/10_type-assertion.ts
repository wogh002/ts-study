{
    // 타입단언 as  === 개발자(재호)가 typescript 서버보다  타입을 더 잘 알고있다! 그러니까 내가 타입정의 하겠다! (무조건 있을꺼임!)
    let a;
    a = 20;
    a = 'a';
    let b = a as string;
    // WebAPIs => DOM API조작
    //html 태그에 접근해서 조작할 수 있는 API
    //브라우저가 html 태그 한줄 한줄 읽으면서 파싱을 한다 
    //js가 이해할 수 있는 object 의 형태 (노드)로 변환 이게 다 완성되면 dom tree
    const div = document.querySelector('div');
}