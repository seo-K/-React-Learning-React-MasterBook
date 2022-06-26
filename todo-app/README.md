# todo-app

## TodoList 를 만드는 프로젝트.

- TodoTemplate :
  - 화면을 가운데 정렬 시켜주며, 앱 타이틀(일정 관리)을 보여줌. children으로 내부 JSX를 props로 받아와 렌더링해줌
- TodoInsert :
  - 새로운 항목 입력 및 추가할 수 있는 컴포넌트. state로 인풋의 상태 관리
- TodoListItem :
  - 각 할일 항목에 때한 정보를 보여주는 컴포넌트. todo 객체를 props로 받아와서 상태에 따라 다르 스타일의 UI를 보여줌
- TodoList
  - todos 배열을 rposp로 받아 온 후, 이를 배열 내장 함수 map을 사용하여 여러개의 TodoListItem 컴포넌트로 변환하여 보여줌.
