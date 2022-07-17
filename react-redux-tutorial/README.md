# react-redex

1. UI준비

-   프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트 분리
-   프레젠테이셔널 (상태관리가 이루어지지않고 props 받아 UI만 보여주는 컴포넌트 리덕스로 상태를 받아오기도하고 리덕스 스토어에 액션을 디스패치하기도함.)
- 컨테이너 컴포넌트 ( 리덕스 스토어와 연동된 컴포넌트 = connect 함수사용해야함)

2. react-redux 설치


3. redux-devtools-extension 설치
```
npm install --save redux-devtools-extension
```
크롬 확장자 redux devtools 설치
- 스토어 내부 state 볼 수있는 유용한 아이

4. 
connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
mapStateToProps = [리덕스 스토어 안의 상태]를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
mapDispatchToProps = [액션 생성 함수]를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수

connect 함수를 호출하면 또 다른 함수를 반환한다. 반환된 함수에 컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어짐.

```
const makeContainer = connect(mapStateToProps, mapDispatchToProps);
makeContainer(타깃 컴포넌트)
```