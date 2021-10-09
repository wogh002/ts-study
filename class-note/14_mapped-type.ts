{
    // mapped type.
    type Heroes = 'Hulk' | 'Capt' | 'Thor';
    type HeroAges = { [K in Heroes]: number }
    const ages: HeroAges = {
        Hulk: 12,
        Capt: 98,
        Thor: 1285
    }

    // for in 반복문 코드
    // var arr = ['a', 'b', 'c'];
    // for (var key in arr) {
    //     console.log(arr[key]);
    // }

}