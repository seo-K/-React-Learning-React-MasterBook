# 리럭스 튜토리얼

## 리덕스는 가장 많이 사용하는 리액트 상태 관리 라이브러리

-   전역 상태 관리할때 효과적
-   반면, 간단한 단순 전역 상태 관ㄹ리 시에는 Context API로도 충분.

-   리덕스를 사용하면, 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 더욱 효율적으로 관리 가능
-   또한, 컴포넌트끼리 똑같은 상태 공유할때도 여러 컴포넌트를 거치지 않고 손쉽게 상태 값 전달 및 업데이트 가능
-   코드의 유지 보수성도 높여주고 작업 효율도 극대화해줌.

1. action ( 액션 )

-   상태 변화

*   필수 => type 객체 = action의 이름
*   액션명은 문자열 형태/주로 대문자 사용/고유해야함

```
{
    type: 'ADD_TODO",
    data: {
        id: 1,
        text: '리덕스배우기',
    }
}

{
    type: "CHANGE_INPUT",
    text: "안녕하세요",
}
```

2. action creator ( 액션 생성 함수 )

-   액션 객체를 만들어주는 함수
-   변화가 있을때 액션객체를 만드는데, 매번 액션객체를 직접 작성하기 번거롭 & 만드는 과장 실수 방지. 함수로 만들어서 관리.

```
function addTodo(data){
    return {
        type: "ADD_TOIDO",
        data
    }
}

const changeInput = text => ({
    type: "CHANGE_INPUT",
    text
})
```

3. reducer ( 리듀서 )

-   변화를 일으키는 함수
-   액션을 발생 -> 리듀서가 현재상태와 전달받은 액션 객체를 파라미터로 받아옴 -> 두값을 참고하여 새로운 상태 만들어 반환.

```
const initialState ={
    counter: 1
}
function reducer(state = initialState, action) {
    switch ( action.type) {
        case INCREMENT:
        retrun {
            counter: state.counter + 1
        };
        default:
        retrun state;
    }
}
```

4. store ( 스토어 )

-   리덕스 적용시 단 하나만 가질 수 있는 스토어!
-   애플리케이션 상태와 리듀서가 포함되어있으며, 그 밖에 중요한 내장함수 포함.

5. dispatch ( 디스패치 )

-   스토어의 내장함수 중 하나
-   '액션을 발생시키는 갓'

6. subscribe ( 구독 )

-   구독 함수 안에 리스너 함수를 파라미터로 넣어 호출 시, 해당 리스너 함수가 액션이 액션이 발생되어(디스패치) 상태가 업데이트될 때마다 호출됨.

```
const listener = () => {
    console.log("상태 업데이트")
}
const unsubscribe = store.subscribe(listener);

unsubscribe(); // 추후 구독 비활성할때 함수를 호출
```

## 서버 셋팅

parcel 으로 프로젝트 만들기
[https://ko.parceljs.org/getting_started.html]

1. 설치
   npm i -g parcel-bundler
2. 프로젝트 생성
   mkdir vanilla-redux
3. 셋팅 파일 추가
   package.json 파일 생성
4. 셋팅 코드
   npm init -y
5. 출력 npm start
   parcel index.html

서버 오류시 참고 [https://dog-developers.tistory.com/183]

하단에 나오는 localhost 가 주소임.
