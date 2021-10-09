{
    // 유틸리티 타입 === 제네릭 타입  코드의 중복방지. ✨✨
    // TS는 보장된 속성만 제공이된다. ✨✨
    interface Product {
        id: number;
        name: string;
        price: number;
        brand: string;
        stock: number;
        something: object;
    }
    //상품 목록을 받아오기 위한 API 함수
    // function fetchProducts(): Promise<Product[]> {
    //     // ..
    // }
    // Pick -유틸리티 타입 === 제네릭 타입-을 사용했을경우 ProductDetail 필요없음.
    interface ProductDetail {
        id: number;
        name: string;
        price: number
    }
    type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
    //  내가 사용하고 싶은 타입의 키들을 빼서 쓰자.
    // 2.특정상품의 상세 페이지 Pick<타입, 뽑아올 타입의 키들을 작성>
    function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

    }
    // interface UpdateProduct {
    //     id?: number;
    //     name?: string;
    //     price?: number;
    //     brand?: string;
    //     stock?: number;
    //     something?: object;
    // }
    type UpdateProduct = Partial<Product>
    // 3.특정 상품 정보 업데이트 하는 함수
    // 파셜 Partial은 모든 구성 타입이 옵셔널 ? 된다.
    function updateProductItem(productItem: UpdateProduct) {

    }
    // 4. 유틸리티 타입 구현하기 - Partial
    interface UserProfile {
        username: string;
        email: string;
        profilePhotoUrl: string;
    }
    // interface UserProfileUpdate {
    //     username?: string;
    //     email?: string;
    //     profilePhotoUrl?: string;
    // }
    // type UserProfileUpdate = {
    //     username?: UserProfile['username'];
    //     email?: UserProfile['email'];
    //     profilePhotoUrl?: UserProfile['profilePhotoUrl'];
    // }
    // #2
    type UserProfileUpdate = {
        // [p 반복문을 돌린다 한번씩 돌면서 for in 같은 느낌] 
        // mapped 타입
        [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
    }
    // #3
    type UserProfileUpdate2 = {
        [p in keyof UserProfile]?: UserProfile[p]
    }
    // #4
    type Partial<T> = {
        [p in keyof T]?: T[p]
    }
    

}