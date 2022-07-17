import { combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';


// combineReducers 리듀서를 여러개 만들지않고. 하나로 합쳐주는 유틸함수
const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;

// 파일명을 index로 지정했기때문에 불러올때
// import rootREducer from "./modules" 로 불러올 수 있다.