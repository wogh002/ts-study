{
    // enum 에 값을 별도로 주지 않으면 숫자로 판단.
    enum Shoes {
        Nike,
        Adidas,
    }
    const myShoes = Shoes.Nike;
    console.log(myShoes);//0
    // Enum 예제
    enum Answer {
        Yes = 'Y',
        No = 'N'
    }
    function askQeustion(answer: Answer) {
        if (answer === Answer.Yes) {
            console.log('정답 입니다')
        }
        else {
            console.log('오답 입니다')
        }
    }
    askQeustion(Answer.Yes);
}